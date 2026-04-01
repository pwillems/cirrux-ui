export interface ComposeDraft {
  to: string;
  cc: string;
  bcc: string;
  subject: string;
  body: string;
}

export interface ComposePageState {
  draft?: ComposeDraft;
}

export interface InboxPageState {
  sentDraft?: ComposeDraft;
}
