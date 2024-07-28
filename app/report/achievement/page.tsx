import React from "react";
import Image from "next/image";
import NavHeader from "../../../pages/components/NavHeader/NavHeader";
import { REPORT_SECONDARY_TABS } from "@/app/constants";

export default function Home() {
  return (
    <>
      <NavHeader
        primary="/report"
        secondary="/report/achievement"
        secondaryTabs={REPORT_SECONDARY_TABS}
      />
      <main></main>
    </>
  );
}
