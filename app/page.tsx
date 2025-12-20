import Navbar from "./components/navbar";
import Comp2buttons from "./components/comp2buttons";
import Comp6s from "./components/comp6s";
import Comp1b3s from "./components/comp1b3s";
import Comp1b2s from "./components/Comp1b2s";
import Comptres from "./components/Comptres";
import Vid from "./components/vid";
import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";
import Comp2 from "./components/comp2";
import Navbarsecond from "./components/navbarsecond";
export default function Home() {
  return (
    <main>
      <Navbarsecond />
      < Hero />
      <Vid />
      <Comp2 />
      <Comptres />
      <Comp1b2s />
      <Comp1b3s />
      <Comp6s />
      <Comp2buttons />
    </main>
  );
}

