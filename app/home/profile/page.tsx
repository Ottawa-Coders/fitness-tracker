import React from "react";
import Image from "next/image";
import NavHeader from "../../../pages/components/NavHeader/NavHeader";
import { HOME_SECONDARY_TABS } from "@/app/constants";

export default function Home() {
  return (
    <>
      <NavHeader
        primary="/home"
        secondary="/home/profile"
        secondaryTabs={HOME_SECONDARY_TABS}
      />
      <main>
        <div className="w-full inline-block">
          <div className="ml-[15%] w-[60%]">
            {/* name title */}
            <h1 className="text-[20px] font-semibold mb-[20px]">
              danielymchen&apos;s profile
            </h1>

            {/* profile photo section */}
            <div className="px-[20px] pb-[20px] pt-[30px] bg-slate-300 justify-between flex text-black">
              <div className="w-auto">
                <div className="w-[250px] h-[250px] bg-gray-500"></div>
              </div>
              <div className="w-[65%] flex flex-col  gap-[8px]">
                <h2 className="text-[17px] font-semibold">danielymchen</h2>
                <p>19 years old</p>
                <p>Male</p>
                <p>Member since May 8, 2023</p>

                <button
                  className="btn btn-primary w-auto mr-auto "
                  type="button"
                >
                  EDIT PROFILE
                </button>
                <button
                  className="btn btn-primary w-auto mr-auto"
                  type="button"
                >
                  EDIT PHOTOS
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
