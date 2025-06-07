import Image from "next/image";
import testimonials from "@/resources/testimonios";

export default function Testimonials() {
  return (
    <section className="relative">
      {/* Bg gradient: top */}
      <div
        className="absolute top-0 left-0 right-0 bg-linear-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Bg gradient: bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-gray-900/50 to-transparent h-[15rem] pointer-events-none z-10"
        aria-hidden="true"
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans">
              ¿Suena bien? Descubre qué es lo que nuestros clientes dicen de
              nosotros
            </h2>
          </div>
          {/* Testimonials container */}
          <div
            className="max-w-sm mx-auto sm:max-w-none grid gap-12 sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 sm:gap-y-8 items-start"
            data-aos-id-testimonials
          >
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="h-full flex flex-col bg-gray-800 p-6"
                data-aos="fade"
                data-aos-anchor="[data-aos-id-testimonials]"
                data-aos-delay={index * 100}
              >
                <header className="mb-4">
                  <Image
                    className="rounded-full size-14 object-cover"
                    src={testimonial.image}
                    alt={`Testimonial ${index + 1}`}
                  />
                </header>
                <div className="grow mb-3">
                  <p className="text-gray-400">{testimonial.text}</p>
                </div>
                <footer className="text-sm text-gray-400">
                  <span className="text-gray-300">{testimonial.name}</span>{" "}
                  {testimonial.company && (
                    <>
                      {" "}
                      -{" "}
                      <a
                        className="font-medium text-blue-500 hover:text-blue-400 transition duration-150 ease-in-out"
                        href="#0"
                      >
                        {testimonial.company}
                      </a>
                    </>
                  )}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
