import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

export interface Project {
  slug: string;
  title: string;
  short: string;
  cover: string;
  gallery: string[];
  description: string;
  technologies: string[];
  scope: string;
  result: string;
}

export const projects: Project[] = [
  {
    slug: "kamerovy-system-administrativna-budova",
    title: "Kamerový systém — administratívna budova",
    short: "Komplexná inštalácia IP CCTV pre 5-podlažnú administratívnu budovu v Žiline.",
    cover: project1,
    gallery: [project1, project3, project2],
    description:
      "Návrh a realizácia kompletného kamerového systému s 24 IP kamerami, NVR záznamovým zariadením a vzdialeným prístupom pre bezpečnostnú službu. Riešenie pokrýva všetky vstupy, parkovisko aj spoločné priestory.",
    technologies: ["Hikvision IP kamery 4K", "NVR s RAID 5", "PoE switch Ubiquiti", "Mobilná aplikácia Hik-Connect"],
    scope: "24 kamier · 1 200 m kabeláže · 5 podlaží · 30-dňový archív",
    result: "Plné pokrytie objektu, zníženie poistného a 0 incidentov od spustenia.",
  },
  {
    slug: "eps-hsp-vyrobna-hala",
    title: "EPS a HSP — výrobná hala",
    short: "Elektrická požiarna signalizácia a hlasová evakuácia pre výrobný areál.",
    cover: project2,
    gallery: [project2, project1, project3],
    description:
      "Návrh a montáž systému EPS podľa platných noriem STN EN 54, vrátane prepojenia na HSP pre rýchlu evakuáciu zamestnancov. Projekt prešiel revíziou aj kolaudáciou bez výhrad.",
    technologies: ["Ústredňa Schrack Integral IP", "Adresovateľné hlásiče", "HSP Bosch Praesensa", "Grafická nadstavba"],
    scope: "180 hlásičov · 12 zón · 2 400 m² · certifikovaná realizácia",
    result: "Splnené všetky požiarne predpisy, plynulá prevádzka výroby bez prerušenia.",
  },
  {
    slug: "inteligentna-budova-rezidencia",
    title: "Inteligentná budova — rezidencia",
    short: "Smart home + slaboprúdové rozvody a dátová sieť pre prémiovú rezidenciu.",
    cover: project3,
    gallery: [project3, project1, project2],
    description:
      "Kompletné slaboprúdové riešenie: štruktúrovaná kabeláž CAT6A, KNX automatizácia osvetlenia a tienenia, videovrátnik, alarm s GSM komunikátorom a centrálne ovládanie cez tablet.",
    technologies: ["KNX zbernica", "Štruktúrovaná kabeláž CAT6A", "Videovrátnik 2N", "Jablotron 100+"],
    scope: "320 m² · 4 podlažia · 48 portov · integrovaný systém",
    result: "Jedno ovládanie pre celý dom, úspora energie cca 30 % a maximálny komfort.",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);