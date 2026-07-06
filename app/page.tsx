import Button from "@/components/Button";
import LedgerGrid from "@/components/LedgerGrid";
import Link from "next/link";

const trustedBy = [
  "Ministry of Industry",
  "Prime Minister's Office",
  "Ministry of Technology",
  "Telecom Sector",
  "National Digital Transformation Initiatives",
];

const services = [
  { n: "01", title: "ERP Solutions", desc: "Unify operations, eliminate data silos, get real-time visibility.", href: "/services#erp" },
  { n: "02", title: "Custom Software", desc: "Software built around your exact workflows — secure and scalable.", href: "/services#custom-software" },
  { n: "03", title: "Website Development", desc: "Professional sites that build credibility and convert visitors.", href: "/services#website" },
  { n: "04", title: "Mobile App Development", desc: "Android and iOS apps built for real-world daily operations.", href: "/services#mobile" },
  { n: "05", title: "SaaS Platforms", desc: "Scalable products your clients or teams can rely on.", href: "/services#saas" },
  { n: "06", title: "Digital Transformation", desc: "Move from manual processes to modern digital operations.", href: "/services#transformation" },
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
      <section className="max-w-content mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="section-label mb-5">Enterprise Technology · Addis Ababa</p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.1] text-navy mb-6">
            Ethiopia&rsquo;s Enterprise Technology Partner
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
        <div className="flex justify-center md:justify-end">
          <LedgerGrid />
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
              <span key={t} className="font-display text-navy/70 text-sm md:text-base">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-content mx-auto px-6 py-20 md:py-28">
        <p className="section-label mb-4">What We Build</p>
        <h2 className="font-display text-3xl md:text-4xl text-navy mb-14 max-w-xl">
          Six ways we help you operate better
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {services.map((s) => (
            <Link
              key={s.n}
              href={s.href}
              className="bg-stone p-8 hover:bg-white transition-colors group"
            >
              <p className="font-mono text-xs text-ochre mb-4">{s.n}</p>
              <h3 className="font-display text-xl text-navy mb-2">{s.title}</h3>
              <p className="text-sm text-ink/65 leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-navy text-stone">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <p className="section-label mb-4">Why Choose FANOS Tech</p>
          <h2 className="font-display text-3xl md:text-4xl mb-14 max-w-xl">
            Built for how Ethiopian organizations actually operate
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {whyUs.map((w) => (
              <div key={w.title} className="border-t border-stone/20 pt-5">
                <h3 className="font-display text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-stone/65 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="max-w-content mx-auto px-6 py-20 md:py-28">
        <p className="section-label mb-4">Progress in Numbers</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-3xl md:text-4xl text-navy mb-2">{s.value}</p>
              <p className="text-sm text-ink/60 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white/50 border-y border-line">
        <div className="max-w-content mx-auto px-6 py-20 md:py-28">
          <p className="section-label mb-4">What Our Clients Say</p>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {testimonials.map((t) => (
              <figure key={t.who} className="flex flex-col justify-between">
                <blockquote className="text-ink/80 leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="text-sm font-medium text-navy">
                  — {t.who}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-content mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-navy mb-6 max-w-xl mx-auto">
          Tell us what you&rsquo;re trying to solve
        </h2>
        <p className="text-ink/65 mb-8 max-w-lg mx-auto">
          We will listen, assess your needs, and recommend the right solution — with no pressure and no jargon.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button href="/contact">Book a Free Consultation</Button>
          <Button href="/contact" variant="secondary">Send Us a Message</Button>
        </div>
      </section>
    </>
  );
}
