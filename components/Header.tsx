"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/icons";
import { WHATSAPP_LINKS } from "@/lib/whatsapp";

const NAV = [
  { href: "#servicos", label: "Serviços" },
  { href: "#containers", label: "Containers" },
  { href: "#projetos", label: "Projetos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-[76px] max-w-[1180px] items-center justify-between px-4 md:px-6">
        <a href="#inicio" aria-label="Serralheria Canadá — início">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#cfcdc8] lg:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-amber">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden !px-5 !py-3 sm:inline-flex"
          >
            Orçamento
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid h-11 w-11 place-items-center rounded-md text-white hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t border-white/10 bg-ink lg:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col px-4 py-3">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-base font-medium text-[#e9e7e2] last:border-0"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3"
            >
              Pedir orçamento no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
