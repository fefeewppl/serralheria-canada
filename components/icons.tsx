import Image from "next/image";

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.6 2.1 1.1 1 2.1 1.3 2.4 1.4.3.2.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.1.1.7-.1 1.3Z" />
    </svg>
  );
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <Image
        src="/logo.webp"
        alt=""
        width={48}
        height={48}
        priority
        className="h-12 w-12 shrink-0 rounded-md ring-1 ring-amber/60"
      />
      {!compact && (
        <span className="leading-none">
          <span className="block font-display text-[22px] font-bold uppercase tracking-wide text-white">
            Serralheria Canadá
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted">Desde 2016</span>
        </span>
      )}
    </span>
  );
}
