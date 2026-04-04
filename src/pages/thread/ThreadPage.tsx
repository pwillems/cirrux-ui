import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Star,
  Archive,
  Trash2,
  Clock,
  Forward,
  Reply,
  ChevronUp,
  ChevronDown,
} from "lucide-react";
import { threads, emails } from "../../data/mockData";
import { IconButton } from "../../components/atoms/IconButton";
import { IconButtonGroup } from "../../components/molecules/IconButtonGroup";

export function ThreadPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find thread or fall back to single email
  const thread = threads.find((t) => t.messages.some((m) => m.id === id));
  const messages = thread
    ? thread.messages
    : [emails.find((e) => e.id === id)].filter(Boolean);
  const subject = thread?.subject || messages[0]?.subject || "Email";

  return (
    <div>
      {/* Back + subject */}
      <div className="mb-4 flex items-start gap-3">
        <button
          onClick={() => navigate("/")}
          className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Back to inbox"
        >
          <ArrowLeft size={16} />
        </button>
        <h1 className="text-xl font-semibold tracking-tight text-gray-900 md:text-2xl">
          {subject}
        </h1>
      </div>

      {/* Actions toolbar */}
      <div className="mb-3 flex items-center justify-between">
        <IconButtonGroup
          buttons={[
            { icon: <Star size={16} />, label: "Star" },
            { icon: <Archive size={16} />, label: "Archive" },
            { icon: <Trash2 size={16} />, label: "Delete" },
            { icon: <Clock size={16} />, label: "Snooze" },
            { icon: <Forward size={16} />, label: "Forward" },
          ]}
        />
        <div className="hidden md:flex items-center gap-0.5 text-gray-400">
          <IconButton icon={<ChevronUp size={16} />} label="Previous" />
          <IconButton icon={<ChevronDown size={16} />} label="Next" />
        </div>
      </div>

      {/* Messages */}
      <div className="flex flex-col gap-3">
        {messages.map((msg) =>
          msg ? (
            <article
              key={msg.id}
              className="rounded-lg shadow-card bg-surface"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 pt-3 pb-2 md:px-5 md:pt-4">
                <div className="flex items-baseline gap-2 min-w-0">
                  <span className="text-base font-medium text-gray-900 shrink-0">
                    {msg.from.name}
                  </span>
                  <span className="text-sm text-gray-400 truncate hidden sm:inline">
                    to {msg.to[0]?.email || msg.to[0]?.name}
                  </span>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <IconButton
                    icon={<Reply size={16} />}
                    label="Reply"
                    size="sm"
                  />
                  <IconButton
                    icon={<Forward size={16} />}
                    label="Forward"
                    size="sm"
                  />
                  <span className="ml-1 text-sm text-gray-400 hidden sm:inline">
                    {msg.date}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="px-4 pb-4 pt-1 md:px-5">
                <p className="whitespace-pre-wrap text-base text-gray-600 leading-relaxed">
                  {msg.body}
                </p>
              </div>
            </article>
          ) : null
        )}
      </div>
    </div>
  );
}
