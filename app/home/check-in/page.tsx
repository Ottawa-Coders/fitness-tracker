import React from 'react'
import Image from "next/image";
import NavHeader from '../../components/NavHeader/NavHeader'
import { HOME_SECONDARY_TABS } from '@/app/constants';

export default function Home() {
  return (
  <>
    <NavHeader 
      primary='/home'
      secondary='/home/check-in'
      secondaryTabs={HOME_SECONDARY_TABS}
    />
    <main>
      
    </main>
  </>
  );
}
