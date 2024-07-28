import React from "react";
import Image from "next/image";
import NavHeader from "../pages/components/NavHeader/NavHeader";
import { HOME_SECONDARY_TABS } from "./constants";

export default function Home() {
  return (
    <>
      <NavHeader
        primary="/home"
        secondary="/home/overview"
        secondaryTabs={HOME_SECONDARY_TABS}
      />
      <main></main>
    </>
  );
}
