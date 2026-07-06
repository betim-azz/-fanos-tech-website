import Button from "@/components/Button";

const values = [
  {
    title: "Our Mission",
    desc: "To equip Ethiopian businesses and institutions with technology that improves operations, reduces inefficiency, and supports long-term growth.",
  },
  {
    title: "Our Vision",
    desc: "To be one of Africa's most trusted enterprise technology companies.",
  },
];

export default function About() {
  return (
    <>
      <section className="max-w-content mx-auto px-6 pt-16 pb-16 md:pt-24 md:pb-20">
        <p className="section-label mb-4">About Us</p>
        <h1 className="font-display text-4xl md:text-5xl text-navy mb-8 max-w-2xl leading-[1.1]">
          Ethiopian technology, built for Ethiopian reality
        </h1>
        <div className="max-w-2xl space-y-6 text-ink/75 text-lg leading-relaxed">
          <p>
            FANOS Tech is an Ethiopian technology company that builds digital
            solutions for enterprises, institutions, and government
            organizations.
          </p>
          <p>
            We specialize in ERP systems, custom software, mobile
            applications, and digital transformation — delivering technology
            that solves real operational problems and creates measurable
            impact.
          </p>
          <p>
            Our team combines deep local market knowledge with modern
            technology expertise. We understand how Ethiopian businesses and
            institutions operate, and we build systems that fit that reality.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-white/40">
        <div className="max-w-content mx-auto px-6 py-16 md:py-20 grid md:grid-cols-2 gap-10">
          {values.map((v) => (
            <div key={v.title} className="border-t-2 border-ochre pt-6">
              <h2 className="font-display text-2xl text-navy mb-3">{v.title}</h2>
              <p className="text-ink/70 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-content mx-auto px-6 py-20 md:py-28 text-center">
        <h2 className="font-display text-3xl md:text-4xl text-navy mb-6 max-w-lg mx-auto">
          Want to know how we work?
        </h2>
        <p className="text-ink/65 mb-8 max-w-md mx-auto">
          Tell us what you&rsquo;re trying to solve — we&rsquo;ll listen first.
        </p>
        <Button href="/contact">Start Your Project</Button>
      </section>
    </>
  );
}