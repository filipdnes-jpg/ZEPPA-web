import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { ArrowLeft, CheckCircle2, Wrench, Target } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal } from "@/components/site/Reveal";
import { getProject, projects, type Project } from "@/data/projects";

export const Route = createFileRoute("/realizacie/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.project;
    return {
      meta: [
        { title: p ? `${p.title} — ZEPPA realizácie` : "Realizácia — ZEPPA" },
        { name: "description", content: p?.short ?? "" },
        { property: "og:title", content: p?.title ?? "" },
        { property: "og:description", content: p?.short ?? "" },
        { property: "og:image", content: p?.cover ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: p ? `/realizacie/${p.slug}` : "" },
      ],
      links: p ? [{ rel: "canonical", href: `/realizacie/${p.slug}` }] : [],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Projekt nenájdený</h1>
        <Link to="/" className="mt-4 inline-block text-brand-glow underline">Späť domov</Link>
      </div>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster theme="dark" position="top-center" richColors />
      <Header />
      <FloatingActions />

      <section className="relative pt-32 pb-16 bg-hero">
        <div className="absolute inset-0 -z-10">
          <img src={project.cover} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        </div>
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" /> Späť na hlavnú stránku
          </Link>
          <Reveal>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold max-w-3xl leading-tight">{project.title}</h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{project.short}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <div className="rounded-3xl overflow-hidden glass shadow-elegant">
              <img src={project.gallery[0]} alt={project.title} className="w-full h-[500px] object-cover" loading="lazy" />
            </div>
          </Reveal>

          <div className="mt-16 grid lg:grid-cols-3 gap-10">
            <Reveal className="lg:col-span-2">
              <h2 className="text-3xl font-bold">Popis realizácie</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed text-lg">{project.description}</p>
            </Reveal>

            <Reveal delay={100} className="space-y-4">
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2 text-brand-glow mb-3"><Wrench className="h-5 w-5" /><h3 className="font-semibold">Použité technológie</h3></div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {project.technologies.map((t) => (
                    <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-brand-glow mt-0.5 shrink-0" />{t}</li>
                  ))}
                </ul>
              </div>
              <div className="glass rounded-2xl p-6">
                <div className="flex items-center gap-2 text-brand-glow mb-3"><Target className="h-5 w-5" /><h3 className="font-semibold">Rozsah</h3></div>
                <p className="text-sm text-muted-foreground">{project.scope}</p>
              </div>
              <div className="glass rounded-2xl p-6 bg-[var(--gradient-brand)]/10 border-brand/30">
                <h3 className="font-semibold mb-2">Výsledok</h3>
                <p className="text-sm text-muted-foreground">{project.result}</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-16">
            <h2 className="text-3xl font-bold mb-6">Galéria</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {project.gallery.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden glass aspect-[4/3] group">
                  <img src={src} alt={`${project.title} ${i + 1}`} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-20">
            <h2 className="text-3xl font-bold mb-6">Ďalšie realizácie</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {others.map((p) => (
                <Link key={p.slug} to="/realizacie/$slug" params={{ slug: p.slug }} className="group block rounded-2xl overflow-hidden glass hover:-translate-y-1 transition-all duration-500 hover:shadow-glow">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={p.cover} alt={p.title} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.short}</p>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}