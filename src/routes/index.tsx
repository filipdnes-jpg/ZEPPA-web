import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import {
  Camera, Flame, Volume2, ShieldCheck, Video, KeyRound, Network, Cable, Building2, Zap,
  ArrowRight, Award, Users, Clock, Sparkles, MapPin, Phone, Mail,
} from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { ContactForm } from "@/components/site/ContactForm";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZEPPA — Slaboprúd, kamerové systémy a EPS Žilina" },
      { name: "description", content: "Profesionálne kamerové systémy, EPS, HSP, zabezpečenie a slaboprúdové rozvody v Žiline. Inštalácia, servis a inteligentné budovy." },
      { name: "keywords", content: "Slaboprúd Žilina, Kamerové systémy Žilina, EPS Žilina, HSP Žilina, Bezpečnostné systémy Žilina, Elektroinštalácie Žilina" },
      { property: "og:title", content: "ZEPPA — Slaboprúd a bezpečnostné systémy Žilina" },
      { property: "og:description", content: "Profesionálne kamerové systémy, EPS, HSP a slaboprúdové rozvody v Žiline." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "ZEPPA",
        image: heroImg,
        telephone: "+421904633461",
        email: "makyna.milan@zeppa.sk",
        address: { "@type": "PostalAddress", streetAddress: "Kamenná 11", postalCode: "010 01", addressLocality: "Žilina", addressCountry: "SK" },
        areaServed: "Žilina",
        description: "Slaboprúdové elektroinštalácie a bezpečnostné systémy.",
      }),
    }],
  }),
  component: Index,
});

const services = [
  { icon: Zap, title: "Silnoprúdové inštalácie", desc: "Kompletné elektroinštalácie, rozvodné skrine, ističe, revízie a opravy silnoprúdových rozvodov." },
  { icon: Camera, title: "Kamerové systémy (CCTV)", desc: "IP a HD kamery, NVR, vzdialený prístup a 24/7 monitoring." },
  { icon: Flame, title: "Elektrická požiarna signalizácia (EPS)", desc: "Návrh, montáž a revízia podľa STN EN 54." },
  { icon: Volume2, title: "Hlasová signalizácia požiaru (HSP)", desc: "Profesionálne evakuačné rozhlasy pre budovy." },
  { icon: ShieldCheck, title: "Poplachové zabezpečovacie systémy", desc: "Alarmy, detektory pohybu, GSM komunikátory." },
  { icon: Video, title: "Videovrátniky", desc: "IP videovrátniky s integráciou do mobilu." },
  { icon: KeyRound, title: "Prístupové systémy", desc: "RFID, biometria, riadený vstup a evidencia." },
  { icon: Network, title: "Dátové siete", desc: "Štruktúrovaná kabeláž CAT6/6A, optika, WiFi." },
  { icon: Cable, title: "Slaboprúdové rozvody", desc: "Komplexné slaboprúdové inštalácie na mieru." },
  { icon: Building2, title: "Inteligentné budovy", desc: "Automatizácia, KNX, smart home riešenia." },
];

const stats = [
  { value: "3+", label: "Rokov skúseností", icon: Clock },
  { value: "100+", label: "Dokončených projektov", icon: Award },
  { value: "50+", label: "Spokojných klientov", icon: Users },
  { value: " ", label: " ", icon: Sparkles },
];

const values = [
  "Profesionalita", "Spoľahlivosť", "Precízne prevedenie",
  "Individuálny prístup", "Moderné technológie", "Dodržiavanie termínov",
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster theme="dark" position="top-center" richColors />
      <Header />
      <FloatingActions />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-28 pb-20 bg-hero overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" width={1920} height={1280} className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-brand/30 blur-[120px] -z-10 animate-pulse" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-glow/20 blur-[120px] -z-10" />

        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-[1.25fr_0.75fr] gap-20 items-center w-full">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-brand-glow">
                <Sparkles className="h-3.5 w-3.5" /> Bezpečnosť na profesionálnej úrovni
              </div>
           <Reveal delay={100}>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                <span className="text-brand-glow">ZEPPA:</span>&nbsp;Váš partner pre&nbsp;<span className="text-brand-glow">elektroištalácie a bezpečnosť</span>
            </h1>
            </Reveal>
            <Reveal delay={100}>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
                <span className="text-brand-glow">ZEPPA:</span>&nbsp;Váš partner pre&nbsp;<span className="text-brand-glow">elektroištalácie a bezpečnosť</span>
            </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
                Realizujeme komplexné práce v oblasti silnoprúdu, slaboprúdu a certifikovanej požiarnej ochrany (EPS, HSP). Získajte spoľahlivé technologické zázemie pre váš biznis.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#kontakt" className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-cta)] px-6 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-cta)] hover:scale-105 transition-transform">
                  Nezáväzná cenová ponuka <ArrowRight className="h-4 w-4" />
                </a>
                <a href="tel:+421904633461" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-semibold hover:scale-105 transition-transform">
                  <Phone className="h-4 w-4" /> Kontaktovať nás
                </a>
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="mt-10 grid grid-cols-4 gap-4 max-w-md">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
                    <div className="text-[10px] md:text-xs text-muted-foreground mt-1 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={300} className="hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl bg-[var(--gradient-brand)] opacity-20 blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden glass shadow-elegant">
                <img src={heroImg} alt="ZEPPA — inštalácia bezpečnostných systémov" width={1920} height={1280} className="w-full h-[460px] object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section id="sluzby" className="py-24 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-brand-glow">Naše služby</div>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold">Komplexné <span className="text-gradient">elektroinštalačné a bezpečnostné služby</span></h2>
              <p className="mt-4 text-muted-foreground">Od návrhu cez montáž až po servis — pokrývame celé spektrum bezpečnostných, slaboprúdových a silnoprúdových technológií.</p>
            </div>
          </Reveal>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div className="group relative h-full glass rounded-2xl p-7 hover:-translate-y-1 transition-all duration-500 hover:shadow-glow">
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-[var(--gradient-brand)] shadow-glow group-hover:scale-110 transition-transform">
                    <s.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="realizacie" className="py-24 lg:py-32 relative bg-black/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-brand-glow">Portfólio</div>
                <h2 className="mt-4 text-4xl md:text-5xl font-bold">Naše <span className="text-gradient">realizácie</span></h2>
              </div>
              <p className="text-muted-foreground max-w-md">Vybrané projekty, ktoré ukazujú našu prácu, prístup a kvalitu prevedenia.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link
                  to="/realizacie/$slug"
                  params={{ slug: p.slug }}
                  className="group block rounded-2xl overflow-hidden glass hover:-translate-y-1 transition-all duration-500 hover:shadow-glow h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.cover} alt={p.title} width={1280} height={896} loading="lazy" className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand-glow">
                      Zobraziť projekt <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section id="pred-po" className="py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-brand-glow">Pred a po</div>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold">Premena <span className="text-gradient">pred a po</span> realizácii</h2>
              <p className="mt-4 text-muted-foreground">Posúvajte jazdec a sledujte rozdiel medzi stavom pred a po našom zásahu.</p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <BeforeAfter />
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="o-nas" className="py-24 lg:py-32 bg-black/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-brand-glow">O firme</div>
            <h2 className="mt-5 text-4xl md:text-5xl font-bold">Skúsený tím <span className="text-gradient">odborníkov</span></h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              ZEPPA je dynamická spoločnosť špecializovaná na komplexné elektroinštalácie a bezpečnostné systémy. Na trhu úspešne pôsobíme viac ako 3 roky, počas ktorých sme sa stali stabilným partnerom pre firemné a priemyselné objekty. Sme tím technicky zdatných profesionálov, ktorí prinášajú moderné riešenia, maximálnu flexibilitu a 100 % spoľahlivosť do každého projektu.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {values.map((v) => (
                <div key={v} className="flex items-center gap-2 text-sm">
                  <div className="h-1.5 w-1.5 rounded-full bg-brand-glow" />
                  {v}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="glass rounded-2xl p-6">
                  <s.icon className="h-6 w-6 text-brand-glow" />
                  <div className="mt-4 text-3xl font-bold text-gradient">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT + MAP */}
      <section id="kontakt" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-widest text-brand-glow">Kontakt</div>
              <h2 className="mt-5 text-4xl md:text-5xl font-bold">Povedzte nám o <span className="text-gradient">vašom projekte</span></h2>
              <p className="mt-4 text-muted-foreground">Odpovieme do 24 hodín s návrhom riešenia a nezáväznou cenovou ponukou.</p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-5 gap-8">
            <Reveal className="lg:col-span-2 space-y-4">
              <a href="tel:+421904633461" className="flex items-center gap-4 glass rounded-2xl p-5 hover:-translate-y-0.5 transition-transform">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-brand)] shadow-glow"><Phone className="h-5 w-5 text-white" /></div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Telefón</div>
                  <div className="font-semibold">+421 904 633 461</div>
                </div>
              </a>
              <a href="mailto:makyna.milan@zeppa.sk" className="flex items-center gap-4 glass rounded-2xl p-5 hover:-translate-y-0.5 transition-transform">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-brand)] shadow-glow"><Mail className="h-5 w-5 text-white" /></div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">E-mail</div>
                  <div className="font-semibold break-all">makyna.milan@zeppa.sk</div>
                </div>
              </a>
              <div className="flex items-center gap-4 glass rounded-2xl p-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-brand)] shadow-glow"><MapPin className="h-5 w-5 text-white" /></div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">Adresa</div>
                  <div className="font-semibold">Kamenná 11, 010 01 Žilina</div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-3">
              <ContactForm />
            </Reveal>
          </div>

          <Reveal delay={200} className="mt-16">
            <div className="rounded-3xl overflow-hidden glass shadow-elegant">
              <iframe
                title="Mapa — Kamenná 11, Žilina"
                src="https://www.google.com/maps?q=Kamenn%C3%A1+11,+010+01+%C5%BDilina&output=embed"
                width="100%"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0, filter: "invert(0.92) hue-rotate(180deg) contrast(0.9)" }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
