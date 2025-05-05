import { Ovo, Outfit } from "next/font/google";

export const ovo = Ovo({
  variable: "--font-Ovo",
  subsets: ["latin"],
  weight: ["400"],
});

export const outfit = Outfit({
  variable: "--font-Outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
