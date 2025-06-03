import React from "react";
import { TbMedicalCross } from "react-icons/tb";
import { CiMedicalCross } from "react-icons/ci";

export type TechItemProps = {
  title: string;
  description: string;
  Icon?: React.ComponentType<{ className?: string }>;
  colorClass?: string;
  customSize?: string;
  delay?: number;
};

export const TechItem: React.FC<TechItemProps> = ({
  title,
  description,
  Icon = CiMedicalCross,
  colorClass = "fill-sky-500",
  customSize = "size-20",
  delay = 0,
}) => (
  <div
    className="flex flex-col items-center"
    data-aos="zoom-out"
    data-aos-delay={delay}
  >
    <div className="mb-4">
      {Icon && <Icon className={`${customSize} ${colorClass}`} />}
    </div>
    <h4 className="h4 text-gray-200 text-center mb-2">{title}</h4>
    <p className="text-lg text-gray-400 text-center">{description}</p>
  </div>
);