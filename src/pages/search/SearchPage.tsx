import { useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { emails } from "../../data/mockData";
import { PageTitle } from "../../components/atoms/PageTitle";
import { EmailRow } from "../inbox/EmailRow";

const suggestions = [
  "from:newsletter is:unread",
  "has:attachment after:2025-01-01",
  'subject:"meeting notes"',
  "-from:noreply is:unread",
  "to:me after:2025-06-01 before:2025-07-01",
];

const operators = [
  { syntax: "from: to: cc: bcc:", description: "filter by sender or recipient" },
  { syntax: "subject: body:", description: "search specific fields" },
  { syntax: "is:unread is:starred is:replied", description: "filter by status" },
  { syntax: "has:attachment", description: "emails with files" },
  { syntax: "after: before:", description: "date range (YYYY-MM-DD)" },
  { syntax: "-", description: "negate any filter" },
];

export function SearchPage() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return emails.filter(
      (e) =>
        e.from.name.toLowerCase().includes(q) ||
        e.from.email.toLowerCase().includes(q) ||
        e.subject.toLowerCase().includes(q) ||
        e.preview.toLowerCase().includes(q)
    );
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <div className="w-full overflow-x-hidden pb-32">
      {/* Header */}
      <div className="px-6 pt-6 pb-5 md:px-10 md:pt-8">
        <PageTitle>Search</PageTitle>

        {/* Search input */}
        <div className="mt-5 flex items-center gap-3 border-b border-gray-100 pb-3">
          <Search size={16} className="shrink-0 text-gray-400" />
          <input
            ref={inputRef}
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search emails..."
            className="flex-1 bg-transparent text-base text-gray-900 placeholder:text-gray-400 !outline-none"
          />
        </div>
      </div>

      {/* Empty state */}
      {!hasQuery && (
        <div className="px-6 md:px-10">
          {/* Suggestions */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Try
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setQuery(s);
                  inputRef.current?.focus();
                }}
                className="rounded-md border border-gray-200 px-2.5 py-1 text-sm text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-900 cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Operators reference */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Operators
          </p>
          <div className="mb-6 flex flex-col gap-1.5">
            {operators.map((op) => (
              <div key={op.syntax} className="flex items-baseline gap-2 text-sm">
                <span className="font-medium text-gray-700">{op.syntax}</span>
                <span className="text-gray-400">{op.description}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-400">
            Combine multiple terms to narrow results. Use quotes for exact phrases.
          </p>
        </div>
      )}

      {/* No results */}
      {hasQuery && results.length === 0 && (
        <div className="px-6 py-12 text-center md:px-10">
          <p className="text-sm text-gray-400">No emails match &ldquo;{query}&rdquo;</p>
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="flex flex-col">
          {results.map((email) => (
            <EmailRow
              key={email.id}
              email={email}
              selected={selectedId === email.id}
              checked={false}
              hasChecked={false}
              onSelect={setSelectedId}
              onToggleChecked={() => {}}
              onArchive={() => {}}
              onDelete={() => {}}
            />
          ))}
        </div>
      )}
    </div>
  );
}
