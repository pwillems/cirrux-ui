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
    <div className="sidebar-offset-center mx-auto w-full max-w-[60rem] px-6 py-6">
        {/* Back + subject */}
        <div className="mb-4 flex items-start gap-3">
          <button
            onClick={() => navigate("/")}
            className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
            aria-label="Back to inbox"
          >
            <ArrowLeft size={16} />
          </button>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900">
            {subject}
          </h1>
        </div>

        {/* Actions toolbar */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-gray-400">
            {[Star, Archive, Trash2, Clock, Forward].map((Icon, i) => (
              <button
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
                aria-label={Icon.displayName}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
          <div className="flex items-center gap-0.5 text-gray-400">
            <button
              className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Previous"
            >
              <ChevronUp size={16} />
            </button>
            <button
              className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
              aria-label="Next"
            >
              <ChevronDown size={16} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex flex-col gap-3">
          {messages.map((msg) =>
            msg ? (
              <article
                key={msg.id}
                className="rounded-lg shadow-card bg-white"
              >
                {/* Header */}
                <div className="flex items-center justify-between px-5 pt-4 pb-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-medium text-gray-900">
                      {msg.from.name}
                    </span>
                    <span className="text-sm text-gray-400">
                      to {msg.to[0]?.email || msg.to[0]?.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
                      aria-label="Reply"
                    >
                      <Reply size={16} />
                    </button>
                    <button
                      className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
                      aria-label="Forward"
                    >
                      <Forward size={16} />
                    </button>
                    <span className="ml-1 text-sm text-gray-400">
                      {msg.date}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="px-5 pb-4 pt-1">
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
