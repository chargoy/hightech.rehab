import Baiobit from "./logo/baiobit";
import Btl from "./logo/btl";
import EleveHealth from "./logo/eleve-health";
import Kinvent from "./logo/kinvent";
import Physiomed from "./logo/physiomed";

export default function PressLogos() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-6 border-b border-gray-800">
          {/* Items */}
          <div className="max-w-sm md:max-w-5xl mx-auto grid gap-2 grid-cols-4 md:grid-cols-5">
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out">
              <Baiobit className="size-36 fill-gray-500" />
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out" data-aos-delay="100">
              <Btl className="size-36 fill-gray-500" /> 
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out" data-aos-delay="200">
              <EleveHealth className="size-36 fill-gray-500" />
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto" data-aos="zoom-out" data-aos-delay="300">
              <Kinvent className="size-36 fill-gray-500" />
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto col-start-2" data-aos="zoom-out" data-aos-delay="400">
              <Physiomed className="size-36 fill-gray-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}