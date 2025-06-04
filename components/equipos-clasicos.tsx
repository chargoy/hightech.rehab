import Image from "next/image";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
  CheckIcon,
} from "@heroicons/react/20/solid";
const features = [
  {
    name: "Caminadora.",
    description: "Mejora la movilidad, resistencia y la marcha funcional.",
    icon: CheckIcon,
  },
  {
    name: "Pistola de Masaje por Percusión.",
    description: "Alivia tensiones musculares y mejora la recuperación.",
    icon: CheckIcon,
  },
  {
    name: "Bicicleta Fija.",
    description:
      "Favorece la movilidad articular y la condición cardiovascular.",
    icon: CheckIcon,
  },
  {
    name: "Pelotas Suizas.",
    description:
      "Estimulan el equilibrio, la estabilidad y el control postural.",
    icon: CheckIcon,
  },
  {
    name: "Manivelas Miembros Superiores.",
    description: "Entrenan fuerza y movilidad de brazos y hombros.",
    icon: CheckIcon,
  },
  {
    name: "Pesos Libres.",
    description: "Fortalecen músculos específicos y mejoran la coordinación.",
    icon: CheckIcon,
  },
  {
    name: "Tablas de Freeman.",
    description:
      "Desarrollan equilibrio y propiocepción en tobillos y rodillas.",
    icon: CheckIcon,
  },
  {
    name: "Barras Suecas.",
    description:
      "Favorecen estiramientos, tracción y ejercicios de suspensión.",
    icon: CheckIcon,
  },
  {
    name: "Tinas de Hidroterapia.",
    description:
      "Usan el agua como medio terapéutico para rehabilitación y relajación.",
    icon: CheckIcon,
  },
];

export default function EquiposClasicos() {
  return (
    <section className="relative" id="equipos-clasicos">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">Equipos Clásicos</h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">
                También contamos con equipos clásicos
              </p>
            </div>
          </div>
          {/* Content */}
          <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-white">
                    <feature.icon
                      aria-hidden="true"
                      className="absolute top-1 left-1 size-5 text-sky-500"
                    />
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
