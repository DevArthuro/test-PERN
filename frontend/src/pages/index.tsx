import Image from "next/image";
import { Inter } from "next/font/google";
import CardComponent from "@/components/cardComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <CardComponent name="sobelo" id={1} email="sobelo" />;
}
