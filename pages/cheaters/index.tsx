import { Players } from "@/components";
import { subhumans } from "@/constants/players";
import React from "react";

const Cheaters = () => {
  return (
    <section>
      <head>
        <title>ABRANKS - Cheaters</title>
      </head>

      <Players players={[...subhumans]}/>
    </section>
  );
};

export default Cheaters;
