import React from "react";
import Image from "next/image";
import NavHeader from "../../pages/components/NavHeader/NavHeader";

export default function Home() {
  return (
    <>
      <NavHeader primary="exercise" secondary="overview" />
      <main></main>
    </>
  );
}
