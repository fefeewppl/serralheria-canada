"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";
import { PROJECTS, SERVICES, type ServiceId } from "@/lib/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

const FILTERS: { id: ServiceId | "todos"; label: string }[] = [
  { id: "todos", label: "Todos" },
  ...SERVICES.map((s) => ({ id: s.id, label: s.short })),
  { id: "containers", label: "Containers" },
];

export default function Gallery() {
  const [filter, setFilter] = useState<ServiceId | "todos">("todos");
  const [active, setActive] = useState<number | null>(null);

  const items = filter === "todos" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setActive((i) => (i === null ? i : (i + dir + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, step]);

  return (
    <>
      <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar projetos">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filter === f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              filter === f.id
                ? "border-amber bg-amber text-black"
                : "border-white/15 text-[#cfcdc8] hover:border-white/40 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {items.length === 0 && (
        <div className="rounded-md border border-dashed border-white/15 px-6 py-14 text-center">
          <p className="mb-5 text-muted">Novas fotos desta categoria em breve. Quer ver trabalhos parecidos?</p>
          <a href={createWhatsAppLink(`Olá, vi o site da Serralheria Canadá e gostaria de ver projetos de ${FILTERS.find((f) => f.id === filter)?.label.toLowerCase()}`)} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <WhatsAppIcon className="h-5 w-5" /> Pedir fotos no WhatsApp
          </a>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {items.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => setActive(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-md bg-ink-2 text-left"
            aria-label={p.video ? `Assistir vídeo: ${p.title}` : `Ampliar foto: ${p.title}`}
          >
            <Image
              src={p.src}
              alt={p.title}
              fill
              sizes="(min-width: 768px) 33vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {p.video && (
              <span className="absolute inset-0 grid place-items-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-amber text-black shadow-lg transition-transform group-hover:scale-110">
                  <Play className="ml-1 h-6 w-6 fill-current" />
                </span>
              </span>
            )}
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent px-4 pb-3 pt-10 text-xs font-semibold uppercase tracking-wider text-white md:opacity-0 md:transition-opacity md:group-hover:opacity-100">
              {p.title}
            </span>
          </button>
        ))}
      </div>

      {active !== null && items[active] && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={items[active].title}
          onClick={close}
        >
          <button type="button" onClick={close} aria-label="Fechar" className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <X className="h-6 w-6" />
          </button>
          {items.length > 1 && (
            <>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(-1); }} aria-label="Foto anterior" className="absolute left-2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-6">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button type="button" onClick={(e) => { e.stopPropagation(); step(1); }} aria-label="Próxima foto" className="absolute right-2 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-6">
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
          <figure className="relative h-[80vh] w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            {items[active].video ? (
              <video
                key={items[active].video}
                src={items[active].video}
                poster={items[active].src}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            ) : (
              <Image src={items[active].src} alt={items[active].title} fill sizes="100vw" className="object-contain" />
            )}
            <figcaption className="absolute -bottom-8 left-0 right-0 text-center text-sm text-white/80">
              {items[active].title} · {active + 1}/{items.length}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
