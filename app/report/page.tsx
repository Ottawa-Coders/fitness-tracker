import React from "react";
import Image from "next/image";
import NavHeader from '../components/NavHeader/NavHeader'
import { REPORT_SECONDARY_TABS } from "../constants";

export default function Home() {
  return (
  <>
    <NavHeader 
      primary='/report'
      secondary='/report'
      secondaryTabs={REPORT_SECONDARY_TABS}
    />
    <main>
      
    </main>
  </>
  );
}