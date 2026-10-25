"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/icons";
import { SERVICES, SITE } from "@/lib/site";
import { createWhatsAppLink } from "@/lib/whatsapp";

const OPTIONS = [...SERVICES.map((s) => s.title), "Locação de container", "Manutenção / conserto", "Outro"];

export default function QuoteForm() {
  const [name, setName] = useState("");
  const [service, setService] = useState(OPTIONS[0]);
  const [city, setCity] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Olá, vi o site da ${SITE.name} e gostaria de um orçamento.`,
      "",
      `*Nome:* ${name.trim()}`,
      `*Serviço:* ${service}`,
      city.trim() ? `*Cidade:* ${city.trim()}` : null,
      details.trim() ? `*Detalhes:* ${details.trim()}` : null,
    ].filter((l) => l !== null);
    window.open(createWhatsAppLink(lines.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md bg-white p-6 text-[#1d1d1b] shadow-xl md:p-8">
      <h3 className="display text-3xl">Orçamento rápido</h3>
      <p className="mb-6 mt-2 text-sm text-muted-dark">
        Preencha e envie direto para o nosso WhatsApp. Se puder, mande fotos do local na conversa.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium">
          Seu nome
          <input required value={name} onChange={(e) => setName(e.target.value)} className="field mt-1.5" autoComplete="name" />
        </label>
        <label className="block text-sm font-medium">
          Cidade
          <input value={city} onChange={(e) => setCity(e.target.value)} className="field mt-1.5" placeholder="Ex.: Penápolis" autoComplete="address-level2" />
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Serviço
          <select value={service} onChange={(e) => setService(e.target.value)} className="field mt-1.5">
            {OPTIONS.map((o) => (
              <option key={o}>{o}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium sm:col-span-2">
          Conte um pouco do projeto <span className="font-normal text-muted-dark">(opcional)</span>
          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={3}
            className="field mt-1.5 resize-y"
            placeholder="Ex.: portão de correr de 3 m para garagem"
          />
        </label>
      </div>
      <button type="submit" className="btn mt-6 w-full bg-[#25d366] text-white hover:bg-[#1ebe5b]">
        <WhatsAppIcon className="h-5 w-5" />
        Enviar pelo WhatsApp
      </button>
    </form>
  );
}
