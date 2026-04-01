import { useEffect, useRef, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

const ENTER_DURATION = 200;

interface UndoToastProps {
  icon: ReactNode;
  message: string;
  onUndo: () => void;
  onDismiss: () => void;
  duration?: number;
  undoLabel?: string;
  extraActionLabel?: string;
  onExtraAction?: () => void;
}

export function UndoToast({
  icon,
  message,
  onUndo,
  onDismiss,
  duration = 5000,
  undoLabel = "Undo",
  extraActionLabel,
  onExtraAction,
}: UndoToastProps) {
  const [mounted, setMounted] = useState(false);
  const [exiting, setExiting] = useState(false);

  const timerRef = useRef<number | null>(null);
  const remainingRef = useRef(duration);
  const startedAtRef = useRef(0);
  const exitingRef = useRef(false);
  const progressRef = useRef<HTMLDivElement>(null);

  // Stable refs for callbacks — no dependency chains, no re-renders
  const onDismissRef = useRef(onDismiss);
  const onUndoRef = useRef(onUndo);
  const onExtraActionRef = useRef(onExtraAction);
  onDismissRef.current = onDismiss;
  onUndoRef.current = onUndo;
  onExtraActionRef.current = onExtraAction;

  const clearTimer = () => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const exit = () => {
    if (exitingRef.current) return;
    exitingRef.current = true;
    clearTimer();
    setExiting(true);
    window.setTimeout(() => onDismissRef.current(), ENTER_DURATION);
  };

  const scheduleExit = () => {
    clearTimer();
    startedAtRef.current = Date.now();
    timerRef.current = window.setTimeout(exit, remainingRef.current);
  };

  const pauseTimer = () => {
    if (timerRef.current === null) return;
    clearTimer();
    remainingRef.current = Math.max(
      0,
      remainingRef.current - (Date.now() - startedAtRef.current),
    );
  };

  // Mount animation + auto-dismiss — runs once, zero dependencies
  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    const enterDelay = window.setTimeout(scheduleExit, ENTER_DURATION);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(enterDelay);
      clearTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard shortcuts — runs once
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        exit();
      } else if (e.key === "z" && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
        e.preventDefault();
        clearTimer();
        onUndoRef.current();
        exit();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleMouseEnter = () => {
    pauseTimer();
    progressRef.current?.style.setProperty("animation-play-state", "paused");
  };

  const handleMouseLeave = () => {
    scheduleExit();
    progressRef.current?.style.setProperty("animation-play-state", "running");
  };

  const handleUndo = () => {
    clearTimer();
    onUndoRef.current();
    exit();
  };

  const handleExtraAction = () => {
    clearTimer();
    onExtraActionRef.current?.();
    exit();
  };

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="pointer-events-none fixed inset-x-0 bottom-8 z-30 flex justify-center px-4">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`
          pointer-events-auto relative flex items-center gap-1 overflow-hidden rounded-2xl
          border border-black/40 bg-[#181512] px-4 py-2.5 text-white shadow-[0_18px_40px_rgba(0,0,0,0.32)]
          transition-all duration-200 ease-out
          ${mounted && !exiting ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"}
        `}
      >
        <span className="flex h-8 w-8 shrink-0 items-center justify-center text-white/70">
          {icon}
        </span>
        <span className="whitespace-nowrap pr-1 text-sm font-medium">
          {message}
        </span>

        <div className="mx-1 h-4 w-px bg-white/16" />

        {extraActionLabel && (
          <button
            type="button"
            onClick={handleExtraAction}
            className="hidden h-8 cursor-pointer items-center whitespace-nowrap rounded-md px-2.5 text-sm font-medium text-white/55 transition-colors hover:bg-white/10 hover:text-white/85 md:flex"
          >
            {extraActionLabel}
          </button>
        )}

        <button
          type="button"
          onClick={handleUndo}
          className="flex h-8 cursor-pointer items-center whitespace-nowrap rounded-md px-2.5 text-sm font-medium transition-colors hover:bg-white/10"
        >
          {undoLabel}
        </button>

        <button
          type="button"
          onClick={exit}
          className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-white/40 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Dismiss"
        >
          <X size={14} />
        </button>

        <div className="pointer-events-none absolute inset-x-4 bottom-1.5 h-px overflow-hidden rounded-full bg-white/10">
          <div
            ref={progressRef}
            className="undo-toast-progress h-full origin-left bg-white/35"
            style={{
              animationDuration: `${duration}ms`,
              animationDelay: `${ENTER_DURATION}ms`,
            }}
          />
        </div>
      </div>
    </div>,
    document.body
  );
}
