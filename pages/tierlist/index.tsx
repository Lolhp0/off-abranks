import { Players } from "@/components";
import { t1Players, t2Players, t3Players, t4Players, t5Players } from "@/constants/players";
import React from "react";

const Tierlist = () => {
  return (
    <section>
      <head>
        <title>ABRANKS - Tierlist</title>
      </head>

      <Players players={[...t1Players, ...t2Players, ...t3Players, ...t4Players, ...t5Players]}/>

    </section>
  );
};

export default Tierlist;
