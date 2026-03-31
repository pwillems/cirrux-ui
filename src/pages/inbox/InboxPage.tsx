import { useEffect, useState } from "react";
import { emails } from "../../data/mockData";
import { EmailRow } from "./EmailRow";
import { SelectionBar } from "./SelectionBar";

const earlierDates = new Set([
  "22 Mar",
  "21 Mar",
  "20 Mar",
  "19 Mar",
  "18 Mar",
  "17 Mar",
]);

const todayEmails = emails.filter((email) => email.time);
const lastWeekEmails = emails.filter(
  (email) => !email.time && !earlierDates.has(email.date)
);
const earlierEmails = emails.filter((email) => earlierDates.has(email.date));
const orderedEmails = [...todayEmails, ...lastWeekEmails, ...earlierEmails];

export function InboxPage() {
  const [selectedEmailId, setSelectedEmailId] = useState<string | null>(
    orderedEmails[0]?.id ?? null
  );
  const [checkedEmailIds, setCheckedEmailIds] = useState<string[]>([]);
  const hasCheckedEmails = checkedEmailIds.length > 0;

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

      if (isTypingTarget || !orderedEmails.length) {
        return;
      }

      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") {
        return;
      }

      event.preventDefault();

      setSelectedEmailId((currentId) => {
        const currentIndex = orderedEmails.findIndex(
          (email) => email.id === currentId
        );

        if (currentIndex === -1) {
          return orderedEmails[0].id;
        }

        const nextIndex =
          event.key === "ArrowDown"
            ? Math.min(currentIndex + 1, orderedEmails.length - 1)
            : Math.max(currentIndex - 1, 0);

        return orderedEmails[nextIndex].id;
      });
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!selectedEmailId) {
      return;
    }

    document
      .getElementById(`email-row-${selectedEmailId}`)
      ?.scrollIntoView({ block: "nearest" });
  }, [selectedEmailId]);

  return (
    <div className="sidebar-offset-center mx-auto w-full max-w-[60rem] pb-32">
      <div className="px-6 pt-6 pb-2">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
          Inbox
        </h1>
      </div>

      {/* Today / ungrouped */}
      <div className="flex flex-col">
        {todayEmails.map((email) => (
          <EmailRow
            key={email.id}
            email={email}
            selected={selectedEmailId === email.id}
            checked={checkedEmailIds.includes(email.id)}
            hasChecked={hasCheckedEmails}
            onSelect={setSelectedEmailId}
            onToggleChecked={toggleCheckedEmail}
          />
        ))}
      </div>

      {/* Last 7 days */}
      {lastWeekEmails.length > 0 && (
        <>
          <div className="px-6 pt-4 pb-1">
            <span className="text-sm text-gray-400">
              Last 7 days
            </span>
          </div>
          <div className="flex flex-col">
            {lastWeekEmails.map((email) => (
              <EmailRow
                key={email.id}
                email={email}
                selected={selectedEmailId === email.id}
                checked={checkedEmailIds.includes(email.id)}
                hasChecked={hasCheckedEmails}
                onSelect={setSelectedEmailId}
                onToggleChecked={toggleCheckedEmail}
              />
            ))}
          </div>
        </>
      )}

      {/* Earlier */}
      {earlierEmails.length > 0 && (
        <>
          <div className="px-6 pt-4 pb-1">
            <span className="text-sm text-gray-400">Earlier</span>
          </div>
          <div className="flex flex-col">
            {earlierEmails.map((email) => (
              <EmailRow
                key={email.id}
                email={email}
                selected={selectedEmailId === email.id}
                checked={checkedEmailIds.includes(email.id)}
                hasChecked={hasCheckedEmails}
                onSelect={setSelectedEmailId}
                onToggleChecked={toggleCheckedEmail}
              />
            ))}
          </div>
        </>
      )}

      {hasCheckedEmails && (
        <SelectionBar
          count={checkedEmailIds.length}
          onClear={() => setCheckedEmailIds([])}
        />
      )}
    </div>
  );
}
