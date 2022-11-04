import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Card from "./components/card";

export default function App() {
  return (
    //<Hero />
    <div>
      <Navbar />
      <Card
        img="zeferes.png"
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Playing on the beach with me."
        price={136}
      />
    </div>
  );
}
