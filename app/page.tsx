import Button from "@/components/Button";
import LedgerGrid from "@/components/LedgerGrid";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import {
  Boxes,
  Code2,
  Globe,
  Smartphone,
  Layers,
  RefreshCw,
} from "lucide-react";

const trustedBy = [
  "Ministry of Industry",
  "Prime Minister's Office",
  "Ministry of Technology",
  "Telecom Sector",
  "National Digital Transformation Initiatives",
];

const services = [
  { n: "01", title: "ERP Solutions", desc: "Unify operations, eliminate data silos, get real-time visibility.", href: "/services#erp", icon: Boxes },
  { n: "02", title: "Custom Software", desc: "Software built around your exact workflows — secure and scalable.", href: "/services#custom-software", icon: Code2 },
  { n: "03", title: "Website Development", desc: "Professional sites that build credibility and convert visitors.", href: "/services#website", icon: Globe },
  { n: "04", title: "Mobile App Development", desc: "Android and iOS apps built for real-world daily operations.", href: "/services#mobile", icon: Smartphone },
  { n: "05", title: "SaaS Platforms", desc: "Scalable products your clients or teams can rely on.", href: "/services#saas", icon: Layers },
  { n: "06", title: "Digital Transformation", desc: "Move from manual processes to modern digital operations.", href: "/services#transformation", icon: RefreshCw },
];

const whyUs = [
  { title: "We Understand the Ethiopian Market", desc: "Built for local realities — not adapted from elsewhere." },
  { title: "Enterprise-Grade Quality", desc: "Designed for reliability, scalability, and long-term use." },
  { title: "Government Project Experience", desc: "Contributed to major national institutions and digital initiatives." },
  { title: "We Solve Problems, Not Just Deliver Software", desc: "Focused on your operational outcomes, not just code." },
  { title: "Long-Term Partnership", desc: "We stay involved after deployment with support and optimization." },
  { title: "Proven Across Industries", desc: "From manufacturing to government, startups to NGOs." },
];

const stats = [
  { value: "20+", label: "Digital Solutions Delivered" },
  { value: "Multiple", label: "Government-Related Projects" },
  { value: "3", label: "Enterprises, Institutions & Startups" },
  { value: "Long-Term", label: "Partnerships Across Ethiopia" },
];

const testimonials = [
  { quote: "FANOS Tech delivered a system that significantly improved how we manage operations and report internally. The team understood our requirements and built exactly what we needed.", who: "Operations Director, Ethiopian Enterprise" },
  { quote: "They have a strong grasp of local operational challenges and how technology can address them. Professional, reliable, and capable.", who: "Senior Manager, Institutional Partner" },
  { quote: "What impressed us most was their ability to take complex operational requirements and turn them into a clean, functional system. They delivered on time and stayed supportive after launch.", who: "Business Owner, Private Sector Client" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-ochre/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 -right-24 w-96 h-96 bg-teal/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-navy/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

        <div className="relative max-w-content mx-auto px-6 pt-16 pb-20 md:pt-28 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="section-label mb-5">Enterprise Technology · Addis Ababa</p>
            <h1 className="font-display text-4xl md:text-6xl leading-[1.08] text-navy mb-6">
              Ethiopia&rsquo;s{" "}
              <span className="bg-gradient-to-r from-ochre to-teal bg-clip-text text-transparent">
                Enterprise Technology
              </span>{" "}
              Partner
            </h1>
            <p className="text-ink/75 text-lg leading-relaxed mb-8 max-w-lg">
              We build ERP systems, custom software, mobile applications, and
              digital platforms that help businesses and institutions operate
              more efficiently and grow with confidence.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button href="/contact">Start Your Project</Button>
              <Button href="/contact" variant="secondary">Book a Free Consultation</Button>
            </div>
            <p className="text-sm text-ink/50">
              Trusted by enterprises, institutions, and government organizations across Ethiopia.
            </p>
          </div>
          <div className="flex justify-center md:justify-end animate-float">
            <LedgerGrid />
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="border-y border-line bg-white/40">
        <div className="max-w-content mx-auto px-6 py-10">
          <p className="section-label mb-6 text-center md:text-left">
            Contributed to technology projects involving
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4 justify-center md:justify-between">
            {trustedBy.map((t) => (
              <span key={t} className="font-display text-navy/70 text-sm md:text-base hover:text-ochre transition-colors">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-content mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <p className="section-label mb-4">What We Build</p>
          <h2 className="font-display text-3xl md:text-4xl text-navy mb-14 max-w-xl">
            Six ways we help you operate better
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 80}>
                <Link
                  href={s.href}
                  className="block h-full bg-white rounded-2xl p-8 border border-line hover:border-ochre/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-ochre/15 transition-colors">
                    <Icon className="text-navy group-hover:text-ochre transition-colors" size={22} />
                  </div>
                  <p className="font-mono text-xs text-ochre mb-2">{s.n}</p>
                  <h3 className="font-display text-xl text-navy mb-2">{s.title}</h3>
                  <p className="text-sm text-ink/65 leading-relaxed">{s.desc}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy text-stone relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-ochre/10 rounded-full blur-3xl" />
        <div className="relative max-w-content mx-auto px-6 py-20 md:py-28">
          <Reveal>
            <p className="section-label mb-4">Why Choose FANOS Tech</p>
            <h2 className="font-display text-3xl md:text-4xl mb-14 max-w-xl">
              Built for how Ethiopian organizations actually operate
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {whyUs.map((w, i) => (
              <Reveal key={w.title} delay={i * 60} className="border-t border-stone/20 pt-5 hover:border-ochre/60 transition-colors">
                <h3 className="font-display text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-stone/65 leading-relaxed">{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="max-w-content mx-auto px-6 py-20 md:py-28">
        <Reveal>
          <p className="section-label mb-4">Progress in Numbers</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="font-display text-3xl md:text-4xl bg-gradient-to-r from-navy to-teal bg-clip-text text-transparent mb-2">
                {s.value}
              </p>
              <p className="text-sm text-ink/60 leading-snug">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/50 border-y border-line">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <Reveal>
            <p className="section-label mb-4">What Our Clients Say</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {testimonials.map((t, i) => (
              <Reveal key={t.who} delay={i * 100}>
                <figure className="h-full flex flex-col justify-between bg-stone rounded-2xl p-7 border border-line hover:shadow-lg transition-shadow">
                  <blockquote className="text-ink/80 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="text-sm font-medium text-navy">
                    — {t.who}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy to-teal" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-ochre/20 rounded-full blur-3xl animate-blob" />
        <div className="relative max-w-content mx-auto px-6 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className="font-display text-3xl md:text-4xl text-stone mb-6 max-w-xl mx-auto">
              Tell us what you&rsquo;re trying to solve
            </h2>
            <p className="text-stone/70 mb-8 max-w-lg mx-auto">
              We will listen, assess your needs, and recommend the right solution — with no pressure and no jargon.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full bg-ochre text-navy hover:scale-[1.03] hover:shadow-lg transition-all duration-300">
                Book a Free Consultation
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full border border-stone/40 text-stone hover:bg-stone/10 hover:scale-[1.03] transition-all duration-300">
                Send Us a Message
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}