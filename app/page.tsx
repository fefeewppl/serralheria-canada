import Image from "next/image";
import { ArrowRight, Check, Clock, Facebook, Instagram, Mail, MapPin, Phone, Plus } from "lucide-react";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import QuoteForm from "@/components/QuoteForm";
import { Logo, WhatsAppIcon } from "@/components/icons";
import { CONTAINER, FAQ, SERVICES, SITE, STEPS, TESTIMONIALS } from "@/lib/site";
import { WHATSAPP_LINKS, serviceWhatsAppLink } from "@/lib/whatsapp";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function SectionHead({ eyebrow, title, text, dark }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-14">
      <div>
        <p className={`eyebrow ${dark ? "" : "!text-amber-dark"}`}>{eyebrow}</p>
        <h2 className={`display mt-3.5 text-[clamp(38px,5vw,60px)] ${dark ? "text-white" : ""}`}>{title}</h2>
      </div>
      {text && <p className={`max-w-md ${dark ? "text-muted" : "text-muted-dark"}`}>{text}</p>}
    </div>
  );
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Barra superior */}
      <div className="border-b border-white/10 bg-ink-3 text-[13px] text-muted">
        <div className="mx-auto flex max-w-[1180px] justify-between gap-4 px-4 py-2 md:px-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {SITE.citiesServed.join(" · ")} e região
          </span>
          <span className="hidden items-center gap-4 md:flex">
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> Seg–Sex 8h às 18h
            </span>
            <a href={`tel:${SITE.phoneE164}`} className="flex items-center gap-1.5 hover:text-amber">
              <Phone className="h-3.5 w-3.5" /> {SITE.phone}
            </a>
          </span>
        </div>
      </div>

      <Header />

      <main>
        {/* HERO */}
        <section id="inicio" className="relative flex min-h-[calc(100svh-110px)] flex-col overflow-hidden">
          <div className="absolute inset-y-0 right-0 hidden w-[58%] lg:block">
            <Image
              src="/equipe.webp"
              alt="Equipe da Serralheria Canadá"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-[50%_30%]"
            />
          </div>
          {/* Desktop: foto à direita com degradê do lado do texto. No celular a foto aparece abaixo dos botões. */}
          <div className="absolute inset-0 hidden bg-gradient-to-r from-[#0c0d0e] from-[42%] via-[#0c0d0e]/60 via-[55%] to-transparent to-[75%] lg:block" />
          <div className="relative mx-auto flex w-full max-w-[1180px] flex-1 flex-col justify-center px-4 py-20 md:px-6">
            <p className="eyebrow">Serralheria &amp; locação de containers</p>
            <h1 className="display my-6 max-w-3xl text-[clamp(48px,7.5vw,96px)] text-white">
              Metal sob medida,
              <br />
              <span className="text-amber">feito para durar.</span>
            </h1>
            <p className="mb-10 max-w-xl text-lg text-[#c9c7c2] md:text-[19px]">
              Portões, escadas, grades e estruturas metálicas com acabamento de alto padrão — e containers para a sua
              obra, com entrega e retirada.
            </p>
            <div className="flex flex-wrap gap-3.5">
              <a href={WHATSAPP_LINKS.general} {...ext} className="btn btn-primary">
                <WhatsAppIcon className="h-5 w-5" /> Pedir orçamento no WhatsApp
              </a>
              <a href="#projetos" className="btn btn-ghost">
                Ver projetos <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-md lg:hidden">
              <Image
                src="/equipe.webp"
                alt="Equipe da Serralheria Canadá"
                fill
                sizes="100vw"
                className="object-cover object-[50%_45%]"
              />
            </div>
          </div>
          <div className="relative border-t border-white/10 bg-[#0c0d0e]/75 backdrop-blur">
            <dl className="mx-auto grid max-w-[1180px] grid-cols-2 px-4 md:grid-cols-4 md:px-6">
              {[
                [String(SITE.since), `Desde, em ${SITE.city}`],
                ["100%", "Projetos sob medida"],
                ["Medição", "No local, antes do orçamento"],
                ["Containers", "Com entrega e retirada"],
              ].map(([value, label], i) => (
                <div key={label} className={`py-5 ${i % 2 ? "pl-5 border-l border-white/10" : ""} ${i === 2 ? "md:pl-5 md:border-l md:border-white/10" : ""}`}>
                  <dt className="sr-only">{label}</dt>
                  <dd>
                    <span className="block font-display text-3xl font-bold leading-none text-white md:text-[34px]">{value}</span>
                    <span className="text-[13px] text-muted">{label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="bg-paper py-20 text-[#1d1d1b] md:py-28">
          <div className="mx-auto max-w-[1180px] px-4 md:px-6">
            <SectionHead
              eyebrow="O que fazemos"
              title="Nossos serviços"
              text="Cada projeto é medido, desenhado e fabricado para o seu espaço — com técnica, cuidado e compromisso com a durabilidade."
            />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICES.map((s, i) => (
                <article
                  key={s.id}
                  className="group flex flex-col overflow-hidden rounded-md border border-black/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(0,0,0,0.3)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={s.image} alt={s.title} fill sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="font-display text-sm font-semibold tracking-widest text-amber-dark">0{i + 1}</span>
                    <h3 className="display mb-2.5 mt-1.5 text-[26px]">{s.title}</h3>
                    <p className="mb-4 text-[15px] text-muted-dark">{s.description}</p>
                    <ul className="mb-6 space-y-1.5 text-sm">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-amber-dark" /> {item}
                        </li>
                      ))}
                    </ul>
                    <a href={serviceWhatsAppLink(s.title)} {...ext} className="mt-auto inline-flex items-center gap-2 self-start border-b-2 border-amber pb-0.5 text-sm font-semibold">
                      Solicitar orçamento <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="py-20 md:py-28">
          <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-4 md:px-6 lg:grid-cols-2 lg:gap-20">
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image src="/portoes/portao-residencial.jpg" alt="Portão fabricado pela Serralheria Canadá" fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="absolute -bottom-6 right-4 rounded-md bg-amber px-6 py-5 text-black lg:-right-6 lg:bottom-10">
                <span className="block font-display text-5xl font-bold leading-none">+{year - SITE.since}</span>
                <span className="text-xs font-semibold uppercase tracking-widest">anos de oficina</span>
              </div>
            </div>
            <div>
              <p className="eyebrow">Nossa história</p>
              <p className="display my-5 text-[34px] leading-[1.1] text-white">“Transformamos metal em confiança.”</p>
              <p className="mb-4 text-muted">
                Desde {SITE.since}, a {SITE.name} cria soluções metálicas que combinam funcionalidade, segurança e design
                — de portões e escadas a estruturas metálicas complexas.
              </p>
              <p className="text-muted">
                Hoje também oferecemos locação de containers para obras, com a mesma seriedade no atendimento que nossos
                clientes conhecem.
              </p>
              <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
                {["Materiais de qualidade", "Acabamento de alto padrão", "Design funcional", "Atendimento próximo"].map((d) => (
                  <li key={d} className="flex items-center gap-2.5 font-medium text-[#ddd]">
                    <Check className="h-5 w-5 shrink-0 text-amber" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CONTAINERS */}
        <section id="containers" className="bg-ink-2 py-20 md:py-28">
          <div className="mx-auto max-w-[1180px] px-4 md:px-6">
            <div className="grid overflow-hidden rounded-md border border-white/10 lg:grid-cols-[1.1fr_1fr]">
              <div className="relative min-h-[320px] lg:min-h-[480px]">
                <Image src={CONTAINER.image} alt="Container para locação em obras" fill sizes="(min-width:1024px) 55vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6 md:p-12">
                <p className="eyebrow">Locação</p>
                <h2 className="display mb-3.5 mt-3 text-4xl text-white md:text-[44px]">Containers para obras</h2>
                <p className="mb-8 text-muted">
                  Robustos e seguros para guardar materiais e equipamentos. Durabilidade, praticidade e confiança em um só
                  lugar.
                </p>
                <div className="mb-9 grid gap-6 sm:grid-cols-2">
                  {CONTAINER.features.map((f) => (
                    <div key={f.title}>
                      <i className="mb-3 block h-0.5 w-8 bg-amber" />
                      <b className="mb-1 block font-semibold text-white">{f.title}</b>
                      <span className="text-sm text-muted">{f.text}</span>
                    </div>
                  ))}
                </div>
                <a href={WHATSAPP_LINKS.container} {...ext} className="btn btn-primary">
                  <WhatsAppIcon className="h-5 w-5" /> Consultar disponibilidade
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="bg-paper py-20 text-[#1d1d1b] md:py-28">
          <div className="mx-auto max-w-[1180px] px-4 md:px-6">
            <SectionHead eyebrow="Como trabalhamos" title="Do orçamento à instalação" text="Um processo simples e transparente, com você acompanhando cada etapa." />
            <ol className="grid gap-8 border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <li key={s.title} className="pt-8">
                  <span className="font-display text-6xl font-bold leading-none text-amber-dark">0{i + 1}</span>
                  <h3 className="display mb-2 mt-3 text-2xl">{s.title}</h3>
                  <p className="text-[15px] text-muted-dark">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="py-20 md:py-28">
          <div className="mx-auto max-w-[1180px] px-4 md:px-6">
            <SectionHead dark eyebrow="Portfólio" title="Projetos recentes" text="Trabalhos entregues em Avanhandava, Penápolis e região. Clique para ampliar." />
            <Gallery />
          </div>
        </section>

        {/* DEPOIMENTOS */}
        <section className="bg-paper py-20 text-[#1d1d1b] md:py-28">
          <div className="mx-auto max-w-[1180px] px-4 md:px-6">
            <SectionHead eyebrow="Depoimentos" title="Quem contratou, recomenda" />
            <div className="grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((t) => (
                <figure key={t.name} className="flex flex-col rounded-md border border-black/10 bg-white p-8">
                  <div className="mb-4 tracking-[3px] text-amber-dark" aria-label="5 de 5 estrelas">★★★★★</div>
                  <blockquote className="mb-6 flex-1 text-[17px] text-[#2a2a28]">“{t.quote}”</blockquote>
                  <figcaption className="flex items-center gap-3 border-t border-black/10 pt-5">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-semibold text-amber">
                      {t.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </span>
                    <span>
                      <b className="block text-[15px]">{t.name}</b>
                      <span className="text-[13px] text-muted-dark">{t.city}</span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="py-20 md:py-28">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
          <div className="mx-auto grid max-w-[1180px] gap-12 px-4 md:px-6 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="eyebrow">Dúvidas frequentes</p>
              <h2 className="display mb-5 mt-3.5 text-[clamp(38px,5vw,56px)] text-white">Perguntas frequentes</h2>
              <p className="mb-8 text-muted">Não encontrou o que procurava? Fale direto com a gente.</p>
              <a href={WHATSAPP_LINKS.contact} {...ext} className="btn btn-ghost">
                <WhatsAppIcon className="h-5 w-5" /> Tirar dúvida no WhatsApp
              </a>
            </div>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {FAQ.map((f) => (
                <details key={f.q} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-white [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus className="h-5 w-5 shrink-0 text-amber transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="mt-3 pr-10 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="bg-amber py-20 text-black md:py-24">
          <div className="mx-auto grid max-w-[1180px] items-start gap-12 px-4 md:px-6 lg:grid-cols-2">
            <div>
              <p className="eyebrow !text-black">Contato</p>
              <h2 className="display mb-6 mt-3.5 text-[clamp(38px,5vw,60px)]">Tem um projeto em mente? Vamos tirar do papel.</h2>
              <ul className="mb-8 space-y-3 text-[17px] font-medium">
                <li>
                  <a href={`tel:${SITE.phoneE164}`} className="inline-flex items-center gap-3 hover:underline">
                    <Phone className="h-5 w-5" /> {SITE.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-3 break-all hover:underline">
                    <Mail className="h-5 w-5 shrink-0" /> {SITE.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.mapQuery)}`}
                    {...ext}
                    className="inline-flex items-center gap-3 hover:underline"
                  >
                    <MapPin className="h-5 w-5 shrink-0" /> {SITE.street} — {SITE.city}, {SITE.state}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Clock className="h-5 w-5" /> Segunda a sexta, 8h às 18h
                </li>
              </ul>
              <div className="overflow-hidden rounded-md border-2 border-black/10">
                <iframe
                  title={`Mapa — ${SITE.name}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
                  className="h-64 w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
            <QuoteForm />
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="bg-ink-3 pb-8 pt-16 text-sm text-muted md:pt-20">
        <div className="mx-auto max-w-[1180px] px-4 md:px-6">
          <div className="mb-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Logo />
              <p className="mt-5 max-w-xs">Serralheria e locação de containers em {SITE.city} e região desde {SITE.since}.</p>
              <p className="mt-3 flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {SITE.street}, {SITE.city} - {SITE.state}
              </p>
              <div className="mt-5 flex gap-3">
                <a href={SITE.social.instagram} {...ext} aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-amber hover:text-amber">
                  <Instagram className="h-4 w-4" />
                </a>
                <a href={SITE.social.facebook} {...ext} aria-label="Facebook" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 hover:border-amber hover:text-amber">
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="display mb-4 text-lg tracking-wide text-white">Serviços</h3>
              <ul className="space-y-2.5">
                {SERVICES.map((s) => (
                  <li key={s.id}><a href="#servicos" className="hover:text-amber">{s.title}</a></li>
                ))}
                <li><a href="#containers" className="hover:text-amber">Locação de containers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="display mb-4 text-lg tracking-wide text-white">Atendemos</h3>
              <ul className="space-y-2.5">
                {SITE.citiesServed.map((c) => <li key={c}>{c}</li>)}
                <li>e região</li>
              </ul>
            </div>
            <div>
              <h3 className="display mb-4 text-lg tracking-wide text-white">Horário</h3>
              <ul className="space-y-2.5">
                {SITE.hours.map((h) => (
                  <li key={h.label}>{h.label}: {h.value}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-[13px]">
            <span>© {year} {SITE.name}. Todos os direitos reservados.</span>
            <a href={`tel:${SITE.phoneE164}`} className="hover:text-amber">{SITE.phone}</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp flutuante */}
      <a
        href={WHATSAPP_LINKS.general}
        {...ext}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-5 right-5 z-[60] grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 md:h-16 md:w-16"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>
    </>
  );
}
