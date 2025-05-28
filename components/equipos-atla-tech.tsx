import Image from 'next/image'
import FeaturesImage from '@/public/images/features.svg'
import Alta1Image from '@/public/images/alta1.jpeg'
import Alta2Image from '@/public/images/alta2.jpeg'
import Alta3Image from '@/public/images/alta3.jpeg'
import Btl from './logo/btl'
import Physiomed from './logo/physiomed'
import { TechItem } from './tech-item'

export const techItems = [
  {
    title: "Sistema Super Inductivo",
    description:
      "Generador electromagnético de hasta 2.5 teslas que ayuda a los tejidos musculares y el sistema nervioso.",
    Icon: Btl,
    colorClass: "fill-sky-500",
  },
  {
    title: "Láser de Alta Potencia",
    description:
      "Luz láser Nd:YAG que favorece la cicatrización y el control del dolor al acelerar procesos metabólicos.",
    Icon: Btl,
    colorClass: "fill-sky-500",
  },
  {
    title: "Tercaterapia Capacitiva y Resistiva",
    description:
      "Radiofrecuencia que genera calor profundo en los tejidos para acelerar el metabolismo y la recuperación.",
    Icon: Btl,
    colorClass: "fill-sky-500",
  },
  {
    title: "Ondas de Presión (Choque) Radiales",
    description:
      "Ondas sonoras de alta energía que estimulan la liberación de factores de crecimiento esenciales para sanar músculos, tendones y fascias.",
    Icon: Btl,
    colorClass: "fill-sky-500",
  },
  {
    title: "Ondas de Choque Focales",
    description:
      "Ondas sonoras de alta energía que estimulan la recuperación de tendones, hueso y ayudan en casos de calcificaciones.",
    Icon: Btl,
    colorClass: "fill-sky-500",
  },
  {
    title: "Deep Osilation",
    description:
      "Impulsos electrostáticos que favorecen la cicatrización y el alivio del dolor en capas profundas.",
    Icon: Physiomed,
    colorClass: "fill-sky-500",
    customSize: "w-64 h-20",
  },
  {
    title: "MAD UP Pro",
    description:
      "Sistema de entrenamiento y monitoreo que utiliza restricción de flujo sanguíneo para potenciar la fuerza y el desarrollo muscular con menor carga física, generando estrés metabólico controlado",
  },
  {
    title: "Blaze Pod",
    description:
      "Sistema de entrenamiento visual que mejora la reacción, coordinación y agilidad mediante estímulos de luz.",
  },
  {
    title: "Handy Gym",
    description:
      "Dispositivo de fuerza isoinercial que trabaja el músculo eficazmente durante todo el rango de movimiento.",
  },
];

export default function EquiposAltaTech() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">
              Equipos de Alta Tecnología
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">
                Las diversas tecnologías con las que contamos en nuestro equipo aceleran de forma eficaz los procesos de recuperación de nuestros pacientes, acortando de manera significativa los tiempos de tratamiento.
              </p>
            </div>
          </div>
          <div className="group flex justify-between gap-4 mb-24">
            <Image
              className="object-cover rounded-xl shadow-lg"
              src={Alta1Image}
              width={300}
              alt="Header 01"
              priority
            />
            <Image
              className="object-cover rounded-xl shadow-lg"
              src={Alta2Image}
              width={300}
              alt="Header 02"
              priority
            />
            <Image
              className="object-cover rounded-xl shadow-lg"
              src={Alta3Image}
              width={300}
              alt="Header 03"
              priority
            />
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">

            {techItems.map((item, index) => (
              <TechItem
                key={index}
                title={item.title}
                description={item.description}
                Icon={item.Icon}
                colorClass={item.colorClass}
                customSize={item.customSize}
                delay={index * 200}
              />
            ))}

          </div>
        </div>
      </div>
    </section>
  )
}