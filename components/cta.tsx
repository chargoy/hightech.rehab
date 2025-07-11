import Image from 'next/image'
import Illustration from '@/public/images/cta-illustration.svg'
import TrackedLink from "./tracked-link";

export default function Cta() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-36">
        {/* CTA box */}
        <div
          className="relative bg-linear-to-tr from-blue-600 to-purple-500 rounded-sm py-10 px-8 md:py-16 md:px-12 overflow-hidden"
          data-aos="zoom-out"
        >
          {/* Bg illustration */}
          <div
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 mt-8 -z-10"
            aria-hidden="true"
          >
            <Image
              src={Illustration}
              className="max-w-none"
              alt="Illustration"
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center">
            {/* CTA content */}
            <div className="mb-6 lg:mr-16 lg:mb-0 text-center lg:text-left">
              <h3 className="text-4xl font-bold font-uncut-sans mb-2">
                Recupera tu movilidad con tecnología de punta
              </h3>
              <p className="text-blue-200">
                Agenda tu primera sesión de valoración y descubre cómo podemos
                ayudarte a sentirte mejor.
              </p>
            </div>
            {/* CTA button */}
            <div className="shrink-0">
              <TrackedLink
                className="btn-sm text-white bg-linear-to-t from-blue-600 to-blue-400 hover:to-blue-500 w-full group shadow-lg"
                href="https://wa.me/525560688843?text=Hola%2C%20vi%20su%20p%C3%A1gina%20y%20quiero%20m%C3%A1s%20detalles%20sobre%20los%20servicios%20de%20rehabilitaci%C3%B3n."
                target="_blanc"
                eventName="Contacto por Whatsapp"
              >
                Escríbenos por WhatsApp{" "}
                <span className="tracking-normal text-blue-200 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </TrackedLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}