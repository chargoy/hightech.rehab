import Image from 'next/image'

import Illustration from '@/public/images/hero-illustration.svg'
import ScrollButton from "./scroll-button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Bg gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Illustration */}
      <div
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none -z-10"
        aria-hidden="true"
      >
        <Image
          src={Illustration}
          className="max-w-none"
          priority
          alt="Hero Illustration"
        />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-xl mx-auto md:max-w-[640px] md:mx-0 text-center md:text-left">
            <div data-aos="zoom-out">
              <div className="relative text-sm text-gray-300 bg-gray-800 rounded-full inline-block px-4 py-1 mb-6 before:content-[''] before:absolute before:-z-10 before:inset-0 before:-m-0.5 before:bg-linear-to-t before:from-gray-800 before:to-gray-800 before:via-gray-600 before:rounded-full">
                <div className="text-gray-400">
                  Plataformas y equipos de análisis especializados.{" "}
                  <ScrollButton
                    className="font-medium text-blue-500 inline-flex items-center transition duration-150 ease-in-out group"
                    targetId="plataformas-equipo-analisis-esp"
                    fathomEvent="Hero Section: Plataformas y equipos de análisis especializados"
                  >
                    Conoce Más{" "}
                    <span className="tracking-normal group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </ScrollButton>
                </div>
              </div>
            </div>
            <h1
              className="h1 font-uncut-sans mb-6"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              Rehabilitación Física y Medicina Deportiva
            </h1>
            <p
              className="text-xl text-gray-400 mb-10"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              Clínica alta especialidad en rehabilitación física y medicina
              deportiva.
            </p>
            <div
              className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
              data-aos="zoom-out"
              data-aos-delay="300"
            >
              <div>
                <ScrollButton
                  targetId="equipos-alta-tecnologia"
                  className="btn text-white bg-linear-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full shadow-lg group"
                  fathomEvent="Hero Section: Equipos de Alta Tecnología"
                >
                  Equipos de Alta Tecnología{" "}
                  <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                    -&gt;
                  </span>
                </ScrollButton>
              </div>
              <div>
                <ScrollButton
                  fathomEvent="Hero Section: Equipos Clásicos"
                  className="btn text-gray-300 bg-linear-to-t from-gray-800 to-gray-700 hover:to-gray-800 w-full shadow-lg cursor-pointer"
                  targetId="equipos-clasicos"
                >
                  Equipos Clásicos
                </ScrollButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}