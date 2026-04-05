import { type ReactNode, useRef, useState } from "react";

interface TooltipProps {
  content: ReactNode;
  delay?: number;
  className?: string;
  children: ReactNode;
}

export function Tooltip({ content, delay = 500, className = "relative inline-flex", children }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function show() {
    timerRef.current = setTimeout(() => setVisible(true), delay);
  }

  function hide() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVisible(false);
  }

  return (
    <div className={className} onMouseEnter={show} onMouseLeave={hide}>
      {children}
      {visible && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 z-50 pointer-events-none whitespace-nowrap">
          {content}
        </div>
      )}
    </div>
  );
}
