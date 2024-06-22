import React from "react";
import Image from "next/image";
import NavHeader from '../../components/NavHeader/NavHeader'
import { FOOD_SECONDARY_TAB } from "@/app/constants";

export default function Home() {
  return (
  <>
    <NavHeader 
      primary='/food'
      secondary='/food/personal'
      secondaryTabs={FOOD_SECONDARY_TAB}
    />
    <main>
      
    </main>
  </>
  );
}