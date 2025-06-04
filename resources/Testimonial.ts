import { StaticImageData } from "next/image";

export interface Testimonial {
  image: StaticImageData;
  text: string;
  name: string;
  company?: string;
}
