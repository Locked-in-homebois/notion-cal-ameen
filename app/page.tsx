import Comp1b3s from "./components/comp1b3s";
import Comp1b2s from "./components/Comp1b2s";
import Comptres from "./components/Comptres";
import Vid from "./components/vid";
import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Comp2 from "./components/comp2";
export default function Home() {
  return (
    <main className="flex flex-col text-center items-center justify-center mt-32">
      < Hero />
      <Vid />
      <Comp2 />
      <Comptres />
      <Comp1b2s />
      <Comp1b3s />
    </main >
  );
}
