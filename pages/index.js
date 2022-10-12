import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
import PizzaList from "../components/PizzaList";
import Slider from "../components/Slider";

export default function Home() {
  const [nav, setNav] = useState(false);

  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Brunei</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <Navbar nav={nav} setNav={setNav} />
      <Slider nav={nav} />
      <PizzaList />
    </div>
  );
}
