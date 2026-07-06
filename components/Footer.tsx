import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "ERP Solutions",
  "Custom Software",
  "Website Development",
  "Mobile Apps",
  "SaaS Platforms",
  "Digital Transformation",
];

const social = ["LinkedIn", "Telegram", "Facebook", "X / Twitter"];

export default function Footer() {
  return (
    <footer className="bg-navy text-stone">
      <div className="max-w-content mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <p className="font-display text-lg mb-3">
            FANOS <span className="text-ochre">Tech</span>
          </p>
          <p className="text-sm text-stone/70 leading-relaxed">
            Building reliable digital solutions for Ethiopian enterprises,
            institutions, and government organizations.
          </p>
        </div>

        <div>
          <p className="section-label mb-4">Quick Links</p>
          <ul className="space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-stone/80 hover:text-ochre">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label mb-4">Services</p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s} className="text-sm text-stone/80">
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="section-label mb-4">Follow Us</p>
          <ul className="space-y-2 mb-6">
            {social.map((s) => (
              <li key={s} className="text-sm text-stone/80">
                {s}
              </li>
            ))}
          </ul>
          <p className="text-sm text-stone/70">Addis Ababa, Ethiopia</p>
          <p className="text-sm text-stone/70">info@fanostech.io</p>
        </div>
      </div>

      <div className="border-t border-stone/10 py-6 text-center text-xs text-stone/50">
        © 2026 FANOS Tech. All rights reserved.
      </div>
    </footer>
  );
}
