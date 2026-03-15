"use client";

import Image from 'next/image'
import Alta1Image from '@/public/images/alta1.jpeg'
import Alta2Image from '@/public/images/alta2.jpeg'
import Alta3Image from '@/public/images/alta3.jpeg'
import Btl from './logo/btl'
import Physiomed from './logo/physiomed'
import { TechItem } from "./tech-item";
import MadUp from "./logo/mad-up";
import BlazePod from "./logo/blaze-pod";
import HandyGym from "./logo/handy-gym";
import { useLanguage } from "@/components/language-provider";
import type { ComponentType, SVGProps } from "react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { className?: string }>;

const itemIcons: { Icon: IconComponent; customSize?: string }[] = [
  { Icon: Btl },
  { Icon: Btl },
  { Icon: Btl },
  { Icon: Btl },
  { Icon: Btl },
  { Icon: Physiomed, customSize: "w-64 h-20" },
  { Icon: MadUp, customSize: "w-36 h-20" },
  { Icon: BlazePod, customSize: "w-32 h-20" },
  { Icon: HandyGym },
];

export default function EquiposAltaTech() {
  const { t } = useLanguage();
  const section = t.equiposAltaTech;

  return (
    <section id="equipos-alta-tecnologia">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 font-uncut-sans mb-4">
              {section.title}
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-xl text-gray-400">
                {section.description}
              </p>
            </div>
          </div>
          <div className="group flex flex-col md:flex-row justify-between gap-4 mb-24 items-center md:items-stretch">
            <Image
              className="object-cover rounded-xl shadow-lg w-[350px]"
              src={Alta1Image}
              alt="Header 01"
              priority
            />
            <Image
              className="object-cover rounded-xl shadow-lg w-[350px]"
              src={Alta2Image}
              alt="Header 02"
              priority
            />
            <Image
              className="object-cover rounded-xl shadow-lg w-[350px]"
              src={Alta3Image}
              alt="Header 03"
              priority
            />
          </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
            {section.items.map((item, index) => (
              <TechItem
                key={index}
                title={item.title}
                description={item.description}
                Icon={itemIcons[index].Icon}
                customSize={itemIcons[index].customSize}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
