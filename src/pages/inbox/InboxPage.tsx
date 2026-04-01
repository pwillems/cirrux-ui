import { useEffect, useMemo, useState } from "react";
import { Archive, Send, Trash2 } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { UndoToast } from "../../components/ui/UndoToast";
import { emails, type Email } from "../../data/mockData";
import type { ComposeDraft, InboxPageState } from "../compose/composeState";
import { EmailRow } from "./EmailRow";
import { SelectionBar } from "./SelectionBar";

type InboxActionType = "archive" | "delete";
const UNDO_TOAST_DURATION = 5000;

type PendingToast =
  | {
      id: string;
      type: InboxActionType;
      emails: Email[];
    }
  | {
      id: string;
      type: "send";
      draft: ComposeDraft;
    };

const earlierDates = new Set([
  "22 Mar",
  "21 Mar",
  "20 Mar",
  "19 Mar",
  "18 Mar",
  "17 Mar",
]);

const orderedEmails = orderEmails(emails);
const emailOrder = new Map(
  orderedEmails.map((email, index) => [email.id, index])
);

function orderEmails(sourceEmails: Email[]) {
  const todayEmails = sourceEmails.filter((email) => email.time);
  const lastWeekEmails = sourceEmails.filter(
    (email) => !email.time && !earlierDates.has(email.date)
  );
  const earlierEmails = sourceEmails.filter((email) =>
    earlierDates.has(email.date)
  );

  return [...todayEmails, ...lastWeekEmails, ...earlierEmails];
}

function sortEmailsByInboxOrder(sourceEmails: Email[]) {
  return [...sourceEmails].sort(
    (left, right) =>
      (emailOrder.get(left.id) ?? Number.MAX_SAFE_INTEGER) -
      (emailOrder.get(right.id) ?? Number.MAX_SAFE_INTEGER)
  );
}

function getUndoMessage(type: InboxActionType, count: number) {
  const action = type === "archive" ? "archived" : "deleted";
  return count === 1 ? `1 ${action}` : `${count} ${action}`;
}

export function InboxPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const composeState = location.state as InboxPageState | null;
  const [visibleEmails, setVisibleEmails] = useState(orderedEmails);
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(
    orderedEmails[0]?.id ?? null
  );
  const [checkedEmailIds, setCheckedEmailIds] = useState<string[]>([]);
  const [pendingToast, setPendingToast] = useState<PendingToast | null>(() =>
    composeState?.sentDraft
      ? {
          id: `send-${Date.now()}`,
          type: "send",
          draft: composeState.sentDraft,
        }
      : null
  );

  const groupedEmails = useMemo(() => {
    const orderedVisibleEmails = orderEmails(visibleEmails);

    return {
      today: orderedVisibleEmails.filter((email) => email.time),
      lastWeek: orderedVisibleEmails.filter(
        (email) => !email.time && !earlierDates.has(email.date)
      ),
      earlier: orderedVisibleEmails.filter((email) =>
        earlierDates.has(email.date)
      ),
    };
  }, [visibleEmails]);

  const hasCheckedEmails = checkedEmailIds.length > 0;

  const restoreEmails = (emailsToRestore: Email[]) => {
    setVisibleEmails((currentEmails) => {
      const existingIds = new Set(currentEmails.map((email) => email.id));
      const restoredEmails = emailsToRestore.filter(
        (email) => !existingIds.has(email.id)
      );

      return sortEmailsByInboxOrder([...currentEmails, ...restoredEmails]);
    });
  };

  const applyAction = (type: InboxActionType, emailIds: string[]) => {
    if (!emailIds.length) {
      return;
    }

    const idsToRemove = new Set(emailIds);
    const emailsToRemove = visibleEmails.filter((email) =>
      idsToRemove.has(email.id)
    );

    if (!emailsToRemove.length) {
      return;
    }

    const remainingEmails = visibleEmails.filter(
      (email) => !idsToRemove.has(email.id)
    );

    setVisibleEmails(remainingEmails);
    setCheckedEmailIds((currentIds) =>
      currentIds.filter((id) => !idsToRemove.has(id))
    );
    setPendingToast({
      id: `${type}-${Date.now()}`,
      type,
      emails: emailsToRemove,
    });

    if (selectedEmailId && idsToRemove.has(selectedEmailId)) {
      const selectedIndex = visibleEmails.findIndex(
        (email) => email.id === selectedEmailId
      );
      const nextSelectedEmail =
        remainingEmails[selectedIndex] ??
        remainingEmails[selectedIndex - 1] ??
        remainingEmails[0] ??
        null;

      setSelectedEmailId(nextSelectedEmail?.id ?? null);
    }
  };

  const handleArchive = (emailIds: string[]) => {
    applyAction("archive", emailIds);
  };

  const handleDelete = (emailIds: string[]) => {
    applyAction("delete", emailIds);
  };

  const toggleCheckedEmail = (id: string) => {
    setCheckedEmailIds((currentIds) =>
      currentIds.includes(id)
        ? currentIds.filter((currentId) => currentId !== id)
        : [...currentIds, id]
    );
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTypingTarget =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        target?.isContentEditable;

      if (isTypingTarget || !visibleEmails.length) {
        return;
      }

      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
        return;
      }

      event.preventDefault();

      setSelectedEmailId((currentId) => {
        const currentIndex = visibleEmails.findIndex(
          (email) => email.id === currentId
        );

        if (currentIndex === -1) {
          return visibleEmails[0].id;
        }

        const nextIndex =
          event.key === "ArrowDown"
            ? Math.min(currentIndex + 1, visibleEmails.length - 1)
            : Math.max(currentIndex - 1, 0);

        return visibleEmails[nextIndex].id;
      });
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [visibleEmails]);

  useEffect(() => {
    if (!selectedEmailId) {
      return;
    }

    document
      .getElementById(`email-row-${selectedEmailId}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [selectedEmailId]);

useEffect(() => {
    if (!composeState?.sentDraft) {
      return;
    }

    navigate(location.pathname, { replace: true, state: null });
  }, [composeState?.sentDraft, location.pathname, navigate]);

  return (
    <div className="sidebar-offset-center mx-auto w-full max-w-full overflow-x-hidden pb-32 md:max-w-[60rem]">
      <div className="px-4 pt-4 pb-2 md:px-6 md:pt-6">
        <h1 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
          Inbox
        </h1>
      </div>

      <div className="flex flex-col">
        {groupedEmails.today.map((email) => (
          <EmailRow
            key={email.id}
            email={email}
            selected={selectedEmailId === email.id}
            checked={checkedEmailIds.includes(email.id)}
            hasChecked={hasCheckedEmails}
            onSelect={setSelectedEmailId}
            onToggleChecked={toggleCheckedEmail}
            onArchive={(id) => handleArchive([id])}
            onDelete={(id) => handleDelete([id])}
          />
        ))}
      </div>

      {groupedEmails.lastWeek.length > 0 && (
        <>
          <div className="px-4 pt-4 pb-1 md:px-6">
            <span className="text-sm text-gray-400">Last 7 days</span>
          </div>
          <div className="flex flex-col">
            {groupedEmails.lastWeek.map((email) => (
              <EmailRow
                key={email.id}
                email={email}
                selected={selectedEmailId === email.id}
                checked={checkedEmailIds.includes(email.id)}
                hasChecked={hasCheckedEmails}
                onSelect={setSelectedEmailId}
                onToggleChecked={toggleCheckedEmail}
                onArchive={(id) => handleArchive([id])}
                onDelete={(id) => handleDelete([id])}
              />
            ))}
          </div>
        </>
      )}

      {groupedEmails.earlier.length > 0 && (
        <>
          <div className="px-4 pt-4 pb-1 md:px-6">
            <span className="text-sm text-gray-400">Earlier</span>
          </div>
          <div className="flex flex-col">
            {groupedEmails.earlier.map((email) => (
              <EmailRow
                key={email.id}
                email={email}
                selected={selectedEmailId === email.id}
                checked={checkedEmailIds.includes(email.id)}
                hasChecked={hasCheckedEmails}
                onSelect={setSelectedEmailId}
                onToggleChecked={toggleCheckedEmail}
                onArchive={(id) => handleArchive([id])}
                onDelete={(id) => handleDelete([id])}
              />
            ))}
          </div>
        </>
      )}

      {!pendingToast && hasCheckedEmails && (
        <SelectionBar
          count={checkedEmailIds.length}
          onClear={() => setCheckedEmailIds([])}
          onArchive={() => handleArchive(checkedEmailIds)}
          onDelete={() => handleDelete(checkedEmailIds)}
        />
      )}

      {pendingToast && (
        <UndoToast
          key={pendingToast.id}
          icon={
            pendingToast.type === "archive" ? (
              <Archive size={16} />
            ) : pendingToast.type === "delete" ? (
              <Trash2 size={16} />
            ) : (
              <Send size={16} />
            )
          }
          message={
            pendingToast.type === "send"
              ? "Sending…"
              : getUndoMessage(pendingToast.type, pendingToast.emails.length)
          }
          onUndo={() => {
            if (pendingToast.type === "send") {
              navigate("/compose", {
                state: {
                  draft: pendingToast.draft,
                },
              });
              setPendingToast(null);
              return;
            }

            restoreEmails(pendingToast.emails);
            setPendingToast(null);
          }}
          extraActionLabel={
            pendingToast.type === "send" ? "Instant send" : undefined
          }
          onExtraAction={() => {
            if (pendingToast.type === "send") {
              setPendingToast(null);
            }
          }}
          onDismiss={() => setPendingToast(null)}
          duration={UNDO_TOAST_DURATION}
        />
      )}
    </div>
  );
}
