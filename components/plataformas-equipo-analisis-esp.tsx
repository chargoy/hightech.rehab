import Image from 'next/image'
import Illustration from "@/public/images/features-illustration.svg";

const imageGroups = [
  [
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748826720/WhatsApp_Image_2025-05-18_at_18.39.20_1_riqbta.jpg",
      height: "h-[24rem]",
    },
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748826763/WhatsApp_Image_2025-05-18_at_18.39.20_3_ambcsm.jpg",
      height: "h-[18rem]",
    },
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748826763/WhatsApp_Image_2025-05-18_at_18.39.21_3_nf9opi.jpg",
      height: "h-[15rem]",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748826763/WhatsApp_Image_2025-05-18_at_18.39.17_2_a5kwgf.jpg",
      height: "h-[14rem]",
    },
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748826762/WhatsApp_Image_2025-05-18_at_18.39.17_1_akyrsl.jpg",
      height: "h-[15rem]",
    },
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748826763/WhatsApp_Image_2025-05-18_at_18.39.20_5_bn7oqv.jpg",
      height: "h-[28rem]",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748826763/WhatsApp_Image_2025-05-18_at_18.39.21_4_ip79qy.jpg",
      height: "h-[22rem]",
    },
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748828646/WhatsApp_Image_2025-05-18_at_18.39.17_3_aajvjp.jpg",
      height: "h-[22rem]",
    },
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748828646/WhatsApp_Image_2025-05-18_at_18.39.22_2_pf0vir.jpg",
      height: "h-[13em]",
    },
  ],
  [
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748874316/10_yvrh4m.jpg",
      height: "h-[24rem]",
    },
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748874316/12_kfxhjf.jpg",
      height: "h-[14rem]",
    },
    {
      src: "https://res.cloudinary.com/hitechrehab/image/upload/v1748874316/11_che6ve.jpg",
      height: "h-[19rem]",
    },
  ],
];

export default function PlataformasEquiposAnalisisEsp() {
  return (
    <section className="relative" id="plataformas-equipo-analisis-esp">
      {/* Bg gradient */}
      <div
        className="absolute top-0 left-0 right-0 bg-linear-to-b from-gray-800 to-gray-900 opacity-60 h-[10rem] pointer-events-none -z-10"
        aria-hidden="true"
      />
      {/* Bg illustration */}
      <div
        className="absolute top-0 left-1/2 -z-10 ml-[390px]"
        aria-hidden="true"
      >
        <Image src={Illustration} className="max-w-none" alt="Illustration" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">
              Plataformas y Equipos de Análisis Especializados
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">
                Plataformas y equipos de análisis cuantitativos y cualitativos
                para evaluación de avance en nuestros clientes
              </p>
            </div>
          </div>
          {/* Section content */}
          <div className="max-w-xl mx-auto md:max-w-none grid grid-cols-2 md:grid-cols-4 gap-4">
            {imageGroups.map((group, groupIndex) => (
              <div key={groupIndex} className="grid gap-4">
                {group.map((img, imgIndex) => (
                  <div
                    key={img.src}
                    data-aos="fade-up"
                    data-aos-delay={100 * (groupIndex * 3 + imgIndex)}
                  >
                    <img
                      src={img.src}
                      className={`${img.height} max-w-full rounded-lg object-cover`}
                      alt=""
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}