import { ArrowLeft, ExternalLink, Paperclip, Trash2 } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PageTitle } from "../../components/atoms/PageTitle";
import { IconButtonGroup } from "../../components/molecules/IconButtonGroup";
import type {
  ComposeDraft,
  ComposePageState,
  InboxPageState,
} from "./composeState";

export function ComposePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const draft = (location.state as ComposePageState | null)?.draft;

  const [to, setTo] = useState(draft?.to ?? "");
  const [cc, setCc] = useState(draft?.cc ?? "");
  const [bcc, setBcc] = useState(draft?.bcc ?? "");
  const [subject, setSubject] = useState(draft?.subject ?? "");
  const [body, setBody] = useState(draft?.body ?? "");

  const handleSend = () => {
    const sentDraft: ComposeDraft = {
      to,
      cc,
      bcc,
      subject,
      body,
    };

    navigate("/", {
      state: {
        sentDraft,
      } satisfies InboxPageState,
    });
  };

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={() => navigate("/")}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
          aria-label="Back to inbox"
        >
          <ArrowLeft size={16} />
        </button>
        <PageTitle>New email</PageTitle>
      </div>

      {/* Fields */}
      <div className="flex flex-col gap-3 mb-6">
        {[
          { label: "To", value: to, onChange: setTo },
          { label: "Cc", value: cc, onChange: setCc },
          { label: "Bcc", value: bcc, onChange: setBcc },
          { label: "Subject", value: subject, onChange: setSubject },
        ].map(({ label, value, onChange }) => (
          <div key={label} className="flex items-center gap-3">
            <label className="w-12 shrink-0 text-sm text-gray-400 md:w-16 md:text-base">
              {label}
            </label>
            <input
              type="text"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="flex-1 border-b border-transparent bg-transparent py-1.5 text-base text-gray-900 placeholder:text-gray-300 focus:border-gray-300 focus:outline-none transition-colors"
            />
          </div>
        ))}
      </div>

      {/* Body */}
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write your message..."
        className="min-h-[300px] w-full resize-none bg-transparent text-base text-gray-900 placeholder:text-gray-300 focus:outline-none leading-relaxed"
      />

      {/* Bottom bar */}
      <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
        <button
          type="button"
          onClick={handleSend}
          className="text-base font-medium text-gray-700 transition-colors hover:text-gray-900 cursor-pointer"
        >
          Send
        </button>
        <IconButtonGroup
          buttons={[
            { icon: <ExternalLink size={16} />, label: "Open in new window" },
            { icon: <Paperclip size={16} />, label: "Attach file" },
            { icon: <Trash2 size={16} />, label: "Discard draft" },
          ]}
        />
      </div>
    </div>
  );
}
