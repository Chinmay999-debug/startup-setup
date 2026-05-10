import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/contact";
import { WhatsAppIcon } from "./WhatsAppIcon";

type Item = { label: string; to?: string; href?: string };
type Col = { title: string; items: Item[] };

export function Footer() {
  const cols: Col[] = [
    {
      title: "Software",
      items: [
        { label: "Lead Tracking", href: "/software#lead-tracking" },
        { label: "Workflows", href: "/software#workflow-management" },
        { label: "WhatsApp", href: "/software#whatsapp-automation" },
        { label: "AI Assistant", href: "/software#ai-assistant" },
      ],
    },
    {
      title: "Industries",
      items: [
        { label: "Education", href: "/industries#education" },
        { label: "Real Estate", href: "/industries#real-estate" },
        { label: "Clinics", href: "/industries#clinics" },
        { label: "Insurance", href: "/industries#insurance" },
        { label: "Solar", href: "/industries#solar" },
      ],
    },
    {
      title: "Contact",
      items: [
        { label: "Book Demo", href: "/contact#demo-form" },
        { label: "WhatsApp", href: contact.whatsappHref },
        { label: "Email", href: `mailto:${contact.email}` },
        { label: "Support", href: "/contact#support" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t hairline bg-surface">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[640px] -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-6 sm:pt-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-12 md:gap-12">
          <div className="sm:col-span-2 md:col-span-5">
            <div className="flex items-center gap-2.5">
              <img
                src="/ss-logo-black.png"
                alt=""
                className="h-7 w-7 shrink-0 object-contain"
                aria-hidden="true"
              />
              <span className="text-[15px] font-semibold tracking-tight text-foreground">
                Startup Setup
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-muted-foreground">
              Operational lead management software for businesses that handle real customers every
              day.
            </p>
            <div className="mt-7 flex min-w-0 flex-wrap items-center gap-2">
              <a
                className="group inline-flex items-center gap-2 rounded-full border hairline bg-card px-3.5 py-1.5 text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground hover:shadow-soft"
                href={`mailto:${contact.email}`}
              >
                <span className="h-1 w-1 rounded-full bg-accent" />
                <span className="break-all">{contact.email}</span>
              </a>
              <a
                className="group inline-flex items-center gap-2 rounded-full border hairline bg-card px-3.5 py-1.5 text-xs text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-foreground/25 hover:text-foreground hover:shadow-soft"
                href={contact.whatsappHref}
              >
                <WhatsAppIcon className="h-3.5 w-3.5 text-success" />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-2">
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li key={it.label}>
                    {it.to ? (
                      <Link
                        to={it.to as never}
                        className="group inline-flex items-center gap-1.5 text-[14px] text-foreground/75 transition-colors hover:text-foreground"
                      >
                        <span className="h-px w-0 bg-foreground transition-all duration-300 group-hover:w-3" />
                        {it.label}
                      </Link>
                    ) : (
                      <a
                        href={it.href}
                        className="group inline-flex items-center gap-1.5 text-[14px] text-foreground/75 transition-colors hover:text-foreground"
                      >
                        <span className="h-px w-0 bg-foreground transition-all duration-300 group-hover:w-3" />
                        {it.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="sm:col-span-2 md:col-span-1 md:text-right">
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Region
            </div>
            <div className="mt-5 inline-flex items-center gap-1.5 text-[13px] text-foreground/75">
              <span className="h-1.5 w-1.5 rounded-full bg-success" />
              India
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t hairline pt-7 sm:mt-20 md:flex-row md:items-center">
          <div className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Startup Setup. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-muted-foreground">
            <Link to="/contact" hash="support" className="transition-colors hover:text-foreground">
              Support
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-foreground">
              Privacy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-foreground">
              Terms
            </Link>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-success" />
              All systems operational
            </span>
          </div>
        </div>
      </div>

      {/* Oversized brand mark */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div
          aria-hidden
          className="pointer-events-none select-none overflow-hidden font-display leading-none tracking-[-0.04em] text-foreground/[0.045] text-[22vw]"
        >
          startup setup
        </div>
      </div>
    </footer>
  );
}
