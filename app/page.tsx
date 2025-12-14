import Comptres from "./components/Comptres"
import Vid from "./components/vid";
import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Comp2 from "./components/comp2";
export default function Home() {
  return (
    <main className="flex flex-col text-center items-center justify-center mt-32">
      <Hero />
      <Vid />
      <Comp2 />
      <Comptres />
    </main>
  );
}
