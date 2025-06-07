export const metadata = {
  title: 'Home - Hi-Tech Rehab & Sport',
  description: 'Page description',
}

import Hero from '@/components/hero'
import PressLogos from '@/components/press-logos'
import EquiposAltaTech from '@/components/equipos-atla-tech'
import PlataformasEquiposAnalisisEsp from "@/components/plataformas-equipo-analisis-esp";
import Testimonials from '@/components/testimonials'
import Videos from "@/components/videos";
import Cta from '@/components/cta'
import EquiposClasicos from "@/components/equipos-clasicos";

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
