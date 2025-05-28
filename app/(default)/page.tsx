export const metadata = {
  title: 'Home - Hi-Tech Rehab & Sport',
  description: 'Page description',
}

import Hero from '@/components/hero'
import PressLogos from '@/components/press-logos'
import EquiposAltaTech from '@/components/equipos-atla-tech'
import PlataformasEquiposAnalisisEsp from '@/components/plataformas-equipo-analisis-esp'
import Pricing from '@/components/pricing'
import Testimonials from '@/components/testimonials'
import Resources from '@/components/resources'
import Cta from '@/components/cta'

export default function Home() {
  return (
    <>
      <Hero />
      <PressLogos />
      <EquiposAltaTech />
      <PlataformasEquiposAnalisisEsp />
      {/* <Pricing /> */}
      <Testimonials />
      <Resources />
      <Cta />
    </>
  )
}
