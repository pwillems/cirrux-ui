interface AvatarProps {
  initials: string;
  size?: "sm" | "md";
}

export function Avatar({ initials, size = "sm" }: AvatarProps) {
  if (size === "md") {
    return (
      <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-accent-muted text-sm font-medium text-gray-900">
        {initials}
      </span>
    );
  }

  return (
    <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-accent-muted text-xs font-medium text-gray-900">
      {initials}
    </span>
  );
}
