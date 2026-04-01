/* ============================================
   MOCK DATA
   Dummy data for all Cirrux screens
   ============================================ */

export interface Email {
  id: string;
  from: { name: string; email: string };
  to: { name: string; email: string }[];
  subject: string;
  preview: string;
  body: string;
  date: string;
  time?: string;
  read: boolean;
  starred: boolean;
  hasAttachment: boolean;
  threadMessageCount?: number;
  threadParticipants?: string[];
  labels?: string[];
}

export interface Thread {
  id: string;
  subject: string;
  messages: Email[];
}

export interface Identity {
  id: string;
  name: string;
  email: string;
  isDefault: boolean;
}

export interface Signature {
  id: string;
  name: string;
  content: string;
  isDefault: boolean;
}

export interface Mailbox {
  id: string;
  email: string;
  provider: string;
  status: "connected" | "error" | "syncing";
  lastSync: string;
}

export interface Domain {
  id: string;
  domain: string;
  status: "verified" | "pending" | "error";
  addedAt: string;
}

const kayInbox = [{ name: "Kay", email: "kay@evrs.xyz" }];

// --- Folders / navigation ---
export const folders = [
  { id: "inbox", name: "Inbox", count: 6 },
  { id: "starred", name: "Starred", count: 3 },
  { id: "drafts", name: "Drafts", count: 2 },
  { id: "sent", name: "Sent", count: 0 },
  { id: "archive", name: "Archive", count: 0 },
  { id: "trash", name: "Trash", count: 0 },
  { id: "spam", name: "Spam", count: 0 },
  { id: "notes", name: "Notes", count: 0 },
] as const;

// --- Emails ---
export const emails: Email[] = [
  {
    id: "mail-001",
    from: { name: "Make", email: "hello@make.com" },
    to: kayInbox,
    subject: "Get your own Make swag plus new stories and insights",
    preview: "Hey Kay, we've got some exciting news to share with you...",
    body: "Hey Kay,\n\nWe've got some exciting news to share with you! As a valued Make user, you now have the opportunity to get your very own Make swag.\n\nCheck out our latest stories and insights on automation trends that are shaping the future.\n\nBest,\nThe Make Team",
    date: "30 Mar",
    time: "16:18",
    read: false,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-002",
    from: { name: "Lena Park", email: "lena@northstack.studio" },
    to: kayInbox,
    subject: "Re: Homepage feedback",
    preview: "I folded your notes into the hero and added a calmer CTA treatment.",
    body: "Hey Kay,\n\nI folded your notes into the hero and added a calmer CTA treatment. The new mockup should feel more premium without losing clarity.\n\nIf you're good with it, I'll also update the mobile pass.\n\nLena",
    date: "30 Mar",
    time: "15:02",
    read: false,
    starred: true,
    hasAttachment: true,
    threadMessageCount: 4,
    threadParticipants: ["me", "Lena Park"],
  },
  {
    id: "mail-003",
    from: { name: "Linear", email: "updates@linear.app" },
    to: kayInbox,
    subject: "7 issues need triage before tomorrow's sync",
    preview: "Most of them are waiting on design review or a final product decision.",
    body: "Hi Kay,\n\nSeven issues are still open for tomorrow's sync. Most are waiting on design review or a final product decision.\n\nOpen Linear to review them.\n\nLinear",
    date: "30 Mar",
    time: "13:41",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-004",
    from: { name: "Rik van Noord", email: "rik@ateliernorth.nl" },
    to: kayInbox,
    subject: "Re: Kickoff notes",
    preview: "Makes sense. I added a cleaner milestone breakdown and a shortlist of dependencies.",
    body: "Hi Kay,\n\nMakes sense. I added a cleaner milestone breakdown and a shortlist of dependencies so we can make quicker calls in the next round.\n\nRik",
    date: "30 Mar",
    time: "09:12",
    read: false,
    starred: false,
    hasAttachment: false,
    threadMessageCount: 3,
    threadParticipants: ["me", "Rik van Noord"],
  },
  {
    id: "mail-005",
    from: { name: "Stripe", email: "support@stripe.com" },
    to: kayInbox,
    subject: "Your March payout is on the way",
    preview: "A payout of EUR 12,480.00 is expected to arrive in 2 business days.",
    body: "Hi Kay,\n\nA payout of EUR 12,480.00 is expected to arrive in your bank account within 2 business days.\n\nThanks,\nStripe",
    date: "29 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-006",
    from: { name: "OpenAI", email: "team@openai.com" },
    to: kayInbox,
    subject: "New API usage insights for your workspace",
    preview: "You can now break down spend and latency by project, environment, and model family.",
    body: "Hi Kay,\n\nYou can now break down spend and latency by project, environment, and model family in the usage dashboard.\n\nOpenAI",
    date: "29 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-007",
    from: { name: "Riverside", email: "hello@riverside.fm" },
    to: kayInbox,
    subject: "Your recording with Thomas is ready",
    preview: "We finished processing the separate audio and 4K video tracks.",
    body: "Hey Kay,\n\nWe finished processing the separate audio and 4K video tracks for your recording with Thomas.\n\nRiverside",
    date: "28 Mar",
    read: true,
    starred: false,
    hasAttachment: true,
  },
  {
    id: "mail-008",
    from: { name: "GitHub", email: "noreply@github.com" },
    to: kayInbox,
    subject: "3 pull requests are waiting for your review",
    preview: "One review was requested by Annie Case in cirrux-ui.",
    body: "Hi Kay,\n\nThree pull requests are waiting for your review. One was requested by Annie Case in cirrux-ui.\n\nGitHub",
    date: "28 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-009",
    from: { name: "Notion", email: "team@updates.notion.so" },
    to: kayInbox,
    subject: "Re: Q2 planning board",
    preview: "I merged the roadmap comments and converted blockers into owner-tagged tasks.",
    body: "Hi Kay,\n\nI merged the roadmap comments and converted the blockers into owner-tagged tasks. The board should be ready for Monday.\n\nNotion",
    date: "28 Mar",
    read: false,
    starred: true,
    hasAttachment: false,
    threadMessageCount: 5,
    threadParticipants: ["me", "Notion"],
  },
  {
    id: "mail-010",
    from: { name: "ben's bites", email: "ben@bensbites.com" },
    to: kayInbox,
    subject: "A peek inside CLI tools",
    preview: "CLI tools are having a moment. Here's why developers love them.",
    body: "Hey!\n\nCLI tools are having a moment. Here's why developers love them and what the best ones have in common.\n\n— Ben",
    date: "27 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-011",
    from: { name: "Sophie Chen", email: "sophie@meridian.studio" },
    to: kayInbox,
    subject: "Design pass on the pricing page",
    preview: "The enterprise section still feels a bit too timid compared to the rest.",
    body: "Hi Kay,\n\nThe enterprise section still feels a bit too timid compared to the rest of the page. I'd like to simplify the grid and make the contrast more deliberate.\n\nSophie",
    date: "27 Mar",
    read: false,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-012",
    from: { name: "Figma", email: "team@figma.com" },
    to: kayInbox,
    subject: "Your prototype comments are getting traction",
    preview: "18 new comments landed on the onboarding flow prototype.",
    body: "Hi Kay,\n\nEighteen new comments landed on the onboarding flow prototype.\n\nFigma",
    date: "27 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-013",
    from: { name: "Vercel", email: "notifications@vercel.com" },
    to: kayInbox,
    subject: "Production deployment completed",
    preview: "cirrux-ui is live on production with build 8f2c1a9.",
    body: "Hey Kay,\n\ncirrux-ui is live on production with build 8f2c1a9.\n\nVercel",
    date: "26 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-014",
    from: { name: "Make", email: "hello@make.com" },
    to: kayInbox,
    subject: "What are builders creating with Make right now?",
    preview: "Discover the latest automations and integrations the community is shipping.",
    body: "Hi Kay,\n\nCurious about what other builders are creating? From marketing automations to data pipelines, the community is building incredible things.\n\nMake",
    date: "26 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-015",
    from: { name: "Airbnb", email: "express@airbnb.com" },
    to: kayInbox,
    subject: "Your Amsterdam reservation details",
    preview: "Check-in instructions for your stay next week are now available.",
    body: "Hi Kay,\n\nCheck-in instructions for your stay next week are now available in the app.\n\nAirbnb",
    date: "26 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-016",
    from: { name: "GitHub", email: "noreply@github.com" },
    to: kayInbox,
    subject: "Important Update to GitHub Copilot Interaction Data Usage Policy",
    preview: "We're writing to let you know about an important update to the policy.",
    body: "Hi Kay,\n\nWe're writing to let you know about an important update to GitHub Copilot's data usage policy. Please review the changes at your earliest convenience.\n\nGitHub",
    date: "25 Mar",
    read: true,
    starred: false,
    hasAttachment: true,
  },
  {
    id: "mail-018",
    from: { name: "Framer", email: "updates@framer.com" },
    to: kayInbox,
    subject: "Your latest site report is ready",
    preview: "Performance improved by 11% after last week's asset changes.",
    body: "Hi Kay,\n\nPerformance improved by 11% after last week's asset changes. The report also flags two oversized video assets.\n\nFramer",
    date: "24 Mar",
    read: false,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-019",
    from: { name: "Jasper", email: "jasper@pilotbench.io" },
    to: kayInbox,
    subject: "Three naming directions for the AI assistant",
    preview: "I like the second direction most because it feels more product-like than chat-like.",
    body: "Hi Kay,\n\nI drafted three naming directions for the assistant. I like the second direction most because it feels more product-like than chat-like.\n\nJasper",
    date: "24 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-020",
    from: { name: "Jamie @ Northstar", email: "jamie@northstar.digital" },
    to: kayInbox,
    subject: "Re: Launch checklist",
    preview: "The release notes are drafted and I added owners to the post-launch tasks.",
    body: "Hi Kay,\n\nThe release notes are drafted and I added owners to the post-launch tasks. We should be in good shape if QA clears tonight.\n\nJamie",
    date: "24 Mar",
    read: true,
    starred: true,
    hasAttachment: false,
    threadMessageCount: 3,
    threadParticipants: ["me", "Jamie @ Northstar"],
  },
  {
    id: "mail-021",
    from: { name: "Robin @ Mollie", email: "robin@mollie.com" },
    to: kayInbox,
    subject: "Invoice export for March",
    preview: "CSV and PDF exports are attached for your bookkeeping run.",
    body: "Hi Kay,\n\nThe CSV and PDF exports for March are attached for your bookkeeping run.\n\nRobin",
    date: "23 Mar",
    read: true,
    starred: false,
    hasAttachment: true,
  },
  {
    id: "mail-025",
    from: { name: "Calendly", email: "notifications@calendly.com" },
    to: kayInbox,
    subject: "New meeting booked for Thursday",
    preview: "Thomas de Vries booked a 30-minute product walkthrough.",
    body: "Hi Kay,\n\nThomas de Vries booked a 30-minute product walkthrough for Thursday at 11:00.\n\nCalendly",
    date: "22 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-026",
    from: { name: "Slack", email: "feedback@slack.com" },
    to: kayInbox,
    subject: "You were mentioned in #launch",
    preview: "Sam: can we freeze copy by noon so support can prep the macros?",
    body: "Hi Kay,\n\nSam mentioned you in #launch: can we freeze copy by noon so support can prep the macros?\n\nSlack",
    date: "21 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-027",
    from: { name: "Cursor", email: "hello@cursor.com" },
    to: kayInbox,
    subject: "Your weekly editor summary",
    preview: "You spent 14.2 hours in AI-assisted coding sessions this week.",
    body: "Hi Kay,\n\nYou spent 14.2 hours in AI-assisted coding sessions this week.\n\nCursor",
    date: "20 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-028",
    from: { name: "Superhuman", email: "hi@superhuman.com" },
    to: kayInbox,
    subject: "Speed tips for triaging faster",
    preview: "A few keyboard-first workflows can help you clear the queue quicker.",
    body: "Hey Kay,\n\nA few keyboard-first workflows can help you clear the queue quicker.\n\nSuperhuman",
    date: "19 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-029",
    from: { name: "Patrick from Medium", email: "patrick@medium.com" },
    to: kayInbox,
    subject: "Would you publish this as a short post?",
    preview: "The draft about calm product interfaces feels like a strong fit for our design vertical.",
    body: "Hi Kay,\n\nThe draft about calm product interfaces feels like a strong fit for our design vertical. Would you be open to publishing it as a short post?\n\nPatrick",
    date: "18 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
  {
    id: "mail-030",
    from: { name: "Fin @ Mercur", email: "fin@mercur.studio" },
    to: kayInbox,
    subject: "Quick thought on the dashboard motion",
    preview: "The easing is close, but the panel snap still feels slightly too abrupt.",
    body: "Hi Kay,\n\nThe easing is close, but the panel snap still feels slightly too abrupt. I would soften the end state by about 15%.\n\nFin",
    date: "17 Mar",
    read: true,
    starred: false,
    hasAttachment: false,
  },
];

// --- Thread (conversation) ---
export const threads: Thread[] = [
  {
    id: "thread-homepage-feedback",
    subject: "Homepage feedback",
    messages: [
      {
        id: "mail-002-a",
        from: { name: "Kay", email: "kay@evrs.xyz" },
        to: [{ name: "Lena Park", email: "lena@northstack.studio" }],
        subject: "Homepage feedback",
        preview: "Can you make the hero feel a little more composed?",
        body: "Hey Lena,\n\nCan you make the hero feel a little more composed? I want the headline to stay bold, but the supporting details should step back a bit.\n\nKay",
        date: "29 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-002-b",
        from: { name: "Lena Park", email: "lena@northstack.studio" },
        to: kayInbox,
        subject: "Re: Homepage feedback",
        preview: "Yes, I can simplify the second row and tighten the spacing.",
        body: "Hey Kay,\n\nYes, I can simplify the second row and tighten the spacing under the headline.\n\nLena",
        date: "29 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-002-c",
        from: { name: "Kay", email: "kay@evrs.xyz" },
        to: [{ name: "Lena Park", email: "lena@northstack.studio" }],
        subject: "Re: Homepage feedback",
        preview: "Great, and can you also reduce the CTA noise?",
        body: "Great.\n\nCan you also reduce the CTA noise? The split buttons read a bit too busy right now.\n\nKay",
        date: "30 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-002",
        from: { name: "Lena Park", email: "lena@northstack.studio" },
        to: kayInbox,
        subject: "Re: Homepage feedback",
        preview: "I folded your notes into the hero and added a calmer CTA treatment.",
        body: "Hey Kay,\n\nI folded your notes into the hero and added a calmer CTA treatment. The new mockup should feel more premium without losing clarity.\n\nIf you're good with it, I'll also update the mobile pass.\n\nLena",
        date: "30 Mar",
        time: "15:02",
        read: false,
        starred: true,
        hasAttachment: true,
      },
    ],
  },
  {
    id: "thread-kickoff-notes",
    subject: "Kickoff notes",
    messages: [
      {
        id: "mail-004-a",
        from: { name: "Kay", email: "kay@evrs.xyz" },
        to: [{ name: "Rik van Noord", email: "rik@ateliernorth.nl" }],
        subject: "Kickoff notes",
        preview: "Sharing the rough notes from this morning.",
        body: "Hi Rik,\n\nSharing the rough notes from this morning. The main open item is whether we front-load analytics or design system work.\n\nKay",
        date: "29 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-004-b",
        from: { name: "Rik van Noord", email: "rik@ateliernorth.nl" },
        to: kayInbox,
        subject: "Re: Kickoff notes",
        preview: "I would front-load analytics because it changes what we need to instrument later.",
        body: "Hi Kay,\n\nI would front-load analytics because it changes what we need to instrument later.\n\nRik",
        date: "29 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-004",
        from: { name: "Rik van Noord", email: "rik@ateliernorth.nl" },
        to: kayInbox,
        subject: "Re: Kickoff notes",
        preview: "Makes sense. I added a cleaner milestone breakdown and a shortlist of dependencies.",
        body: "Hi Kay,\n\nMakes sense. I added a cleaner milestone breakdown and a shortlist of dependencies so we can make quicker calls in the next round.\n\nRik",
        date: "30 Mar",
        time: "09:12",
        read: false,
        starred: false,
        hasAttachment: false,
      },
    ],
  },
  {
    id: "thread-q2-planning-board",
    subject: "Q2 planning board",
    messages: [
      {
        id: "mail-009-a",
        from: { name: "Kay", email: "kay@evrs.xyz" },
        to: [{ name: "Notion", email: "team@updates.notion.so" }],
        subject: "Q2 planning board",
        preview: "I moved the roadmap themes into separate swimlanes.",
        body: "Hi team,\n\nI moved the roadmap themes into separate swimlanes. Can you sanity-check the sequencing?\n\nKay",
        date: "26 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-009-b",
        from: { name: "Notion", email: "team@updates.notion.so" },
        to: kayInbox,
        subject: "Re: Q2 planning board",
        preview: "The board looks good. I think the onboarding work should move up.",
        body: "Hi Kay,\n\nThe board looks good. I think the onboarding work should move up one slot because the copy pass depends on it.\n\nNotion",
        date: "26 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-009-c",
        from: { name: "Kay", email: "kay@evrs.xyz" },
        to: [{ name: "Notion", email: "team@updates.notion.so" }],
        subject: "Re: Q2 planning board",
        preview: "Agreed. I also tagged owners for launch-critical items.",
        body: "Agreed.\n\nI also tagged owners for launch-critical items so the dependencies are more explicit.\n\nKay",
        date: "27 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-009-d",
        from: { name: "Notion", email: "team@updates.notion.so" },
        to: kayInbox,
        subject: "Re: Q2 planning board",
        preview: "Nice. I turned those owner tags into filters for the weekly review.",
        body: "Nice.\n\nI turned those owner tags into filters for the weekly review so it is easier to scan.\n\nNotion",
        date: "27 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-009",
        from: { name: "Notion", email: "team@updates.notion.so" },
        to: kayInbox,
        subject: "Re: Q2 planning board",
        preview: "I merged the roadmap comments and converted blockers into owner-tagged tasks.",
        body: "Hi Kay,\n\nI merged the roadmap comments and converted the blockers into owner-tagged tasks. The board should be ready for Monday.\n\nNotion",
        date: "28 Mar",
        read: false,
        starred: true,
        hasAttachment: false,
      },
    ],
  },
  {
    id: "thread-launch-checklist",
    subject: "Launch checklist",
    messages: [
      {
        id: "mail-020-a",
        from: { name: "Kay", email: "kay@evrs.xyz" },
        to: [{ name: "Jamie @ Northstar", email: "jamie@northstar.digital" }],
        subject: "Launch checklist",
        preview: "Do you want to own release notes and support prep?",
        body: "Hey Jamie,\n\nDo you want to own release notes and support prep for the launch checklist?\n\nKay",
        date: "23 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-020-b",
        from: { name: "Jamie @ Northstar", email: "jamie@northstar.digital" },
        to: kayInbox,
        subject: "Re: Launch checklist",
        preview: "Yes, give me release notes and I can also cover support prep.",
        body: "Hey Kay,\n\nYes, give me release notes and I can also cover support prep.\n\nJamie",
        date: "23 Mar",
        read: true,
        starred: false,
        hasAttachment: false,
      },
      {
        id: "mail-020",
        from: { name: "Jamie @ Northstar", email: "jamie@northstar.digital" },
        to: kayInbox,
        subject: "Re: Launch checklist",
        preview: "The release notes are drafted and I added owners to the post-launch tasks.",
        body: "Hi Kay,\n\nThe release notes are drafted and I added owners to the post-launch tasks. We should be in good shape if QA clears tonight.\n\nJamie",
        date: "24 Mar",
        read: true,
        starred: true,
        hasAttachment: false,
      },
    ],
  },
];

// --- Profile / Account settings ---
export const profile = {
  username: "kayev",
  firstName: "Kay",
  lastName: "",
  recoveryEmail: "ops@rivermail.co",
  productUpdates: true,
  productUpdatesEmail: "hello@northfield.studio",
};

// --- Identities ---
export const identities: Identity[] = [
  { id: "id1", name: "Kay", email: "kay@evrs.xyz", isDefault: true },
  { id: "id2", name: "Kay Evers", email: "hi@kayevers.nl", isDefault: false },
  { id: "id3", name: "Kay", email: "kay@invalley.com", isDefault: false },
];

// --- Signatures ---
export const signatures: Signature[] = [
  {
    id: "sig1",
    name: "Default",
    content: "Best regards,\nKay",
    isDefault: true,
  },
  {
    id: "sig2",
    name: "Professional",
    content: "Kind regards,\nKay Evers\nkay@evrs.xyz",
    isDefault: false,
  },
];

// --- Mailboxes ---
export const mailboxes: Mailbox[] = [
  {
    id: "mb1",
    email: "hello@northfield.studio",
    provider: "Cirrux",
    status: "connected",
    lastSync: "Just now",
  },
  {
    id: "mb2",
    email: "ops@rivermail.co",
    provider: "Google Workspace",
    status: "connected",
    lastSync: "5 minutes ago",
  },
  {
    id: "mb3",
    email: "team@foundryhq.io",
    provider: "Microsoft 365",
    status: "syncing",
    lastSync: "Syncing...",
  },
];

// --- Domains ---
export const domains: Domain[] = [
  {
    id: "d1",
    domain: "northfield.studio",
    status: "verified",
    addedAt: "Jan 2026",
  },
  {
    id: "d2",
    domain: "rivermail.co",
    status: "verified",
    addedAt: "Feb 2026",
  },
  {
    id: "d3",
    domain: "foundryhq.io",
    status: "pending",
    addedAt: "Mar 2026",
  },
];

// --- Settings sidebar navigation ---
export const settingsSections = {
  general: [
    { id: "profile", label: "Profile" },
    { id: "security", label: "Security" },
    { id: "workspaces", label: "Workspaces" },
  ],
  personal: [
    { id: "mailboxes", label: "Mailboxes" },
    { id: "domains", label: "Domains" },
    { id: "syncs", label: "Syncs" },
    { id: "backups", label: "Backups" },
    { id: "admin", label: "Admin" },
    { id: "billing", label: "Billing" },
  ],
} as const;
