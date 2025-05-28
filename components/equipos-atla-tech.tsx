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
    description: "Generador eletromagnético de alta intensidad de hasta 2.5 teslas que ayuda tanto a los tejidos musculares como el sistema nervioso",
    Icon: Btl,
    colorClass: "fill-sky-500",
  },
  {
    title: "Láser de Alta Potencia",
    description: "Equipo de luz láser de NdYAG que acelera los procesos metabólicos que favorecen la cicatrización de tejidos así como el control del dolor",
    Icon: Btl,
    colorClass: "fill-sky-500",
  },
  {
    title: "Tercaterapia Capacitiva y Resistiva",
    description: "Equipo que mediante radiofrecuencia logra un calor más profundo en los tejios acelerando la respuesta metabólica y favoreciendo la recuperación",
    Icon: Btl,
    colorClass: "fill-sky-500",
  },
  {
    title: "Ondas de Presión (Choque) Radiales",
    description: "ondas sonoras de alta energia que tienen como fin estimular la liberación de factores de crecimiento esenciales para la recuperación de tejidos lesionados, especialmente tendones, musculos, fascias",
    Icon: Btl,
    colorClass: "fill-sky-500",
  },
  {
    title: "Ondas de Choque Focales",
    description: "ondas sonoras de alta energia que tienen como fin estimular la liberación de factores de crecimiento esenciales para la recuperación de tejidos lesionados, especialmente tendones y hueso, asi como para el tratamiento de calcificaciones",
    Icon: Btl,
    colorClass: "fill-sky-500",
  },
  {
    title: "Deep Osilation",
    description: "equipo que utiliza impulsos electrostaticos sobre los tejidos para mejora la cicatrizacion y favorecer la recuperacion a diferentes profundidades, ayudante tambien al control de dolor",
    Icon: Physiomed,
    colorClass: "fill-sky-500",
    customSize: "w-64 h-20",
  },
  {
    title: "MAD UP Pro",
    description: "equipo que utiliza impulsos electrostaticos sobre los tejidos para mejora la cicatrizacion y favorecer la recuperacion a diferentes profundidades, ayudante tambien al control de dolor",
  },
  {
    title: "Blaze Pod",
    description: "sistema de entrenamiento de reacción coordinacion y agilidad mediante estimulos visuales",
  },
  {
    title: "Handy Gym",
    description: "un sistema de entrenamiento de fuerza isoinicercial que permite que los musculos trabajen de manera efectiva en todo el rango de movimiento",
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