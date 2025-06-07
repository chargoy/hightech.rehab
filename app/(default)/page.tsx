import Hero from "@/components/hero";
import PressLogos from "@/components/press-logos";
import EquiposAltaTech from "@/components/equipos-atla-tech";
import PlataformasEquiposAnalisisEsp from "@/components/plataformas-equipo-analisis-esp";
import Testimonials from "@/components/testimonials";
import Videos from "@/components/videos";
import Cta from "@/components/cta";
import EquiposClasicos from "@/components/equipos-clasicos";

export const metadata = {
  title: "Rehabilitación Física y Medicina Deportiva | Hi-Tech Rehab & Sports",
  description:
    "Clínica de alta especialidad en rehabilitación física y medicina deportiva.",
  openGraph: {
    title:
      "Rehabilitación Física y Medicina Deportiva | Hi-Tech Rehab & Sports",
    description:
      "Clínica de alta especialidad en rehabilitación física y medicina deportiva.",
    url: "https://hightech.rehab",
    siteName: "Hi-Tech Rehab & Sports",
    images: [
      {
        url: "https://res.cloudinary.com/hitechrehab/image/upload/v1749254173/logo_3-min_vpunzy.png",
        width: 1200,
        height: 630,
        alt: "Hi-Tech Rehab & Sports",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Rehabilitación Física y Medicina Deportiva | Hi-Tech Rehab & Sports",
    description:
      "Clínica de alta especialidad en rehabilitación física y medicina deportiva.",
    images: [
      "https://res.cloudinary.com/hitechrehab/image/upload/v1749254173/logo_3-min_vpunzy.png",
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <PressLogos />
      <EquiposAltaTech />
      <PlataformasEquiposAnalisisEsp />
      <EquiposClasicos />
      <Videos />
      <Testimonials />
      <Cta />
    </>
  );
}
