import {
  ArrowLeft,
  ExternalLink,
  Paperclip,
  Trash2,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function ComposePage() {
  const navigate = useNavigate();
  const [to, setTo] = useState("");
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <div className="sidebar-offset-center mx-auto w-full max-w-[60rem] px-6 py-6">
        <div className="mb-6 flex items-center gap-3">
          <button
            onClick={() => navigate("/")}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
            aria-label="Back to inbox"
          >
            <ArrowLeft size={16} />
          </button>
          <h1 className="text-xl font-semibold tracking-tight text-gray-900">
            New email
          </h1>
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
              <label className="w-16 shrink-0 text-base text-gray-400">
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
          <button className="text-base font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
            Send
          </button>
          <div className="flex items-center gap-1 text-gray-400">
            {[ExternalLink, Paperclip, Trash2].map((Icon, i) => (
              <button
                key={i}
                className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
                aria-label={Icon.displayName}
              >
                <Icon size={16} />
              </button>
            ))}
          </div>
        </div>
      </div>
  );
}
