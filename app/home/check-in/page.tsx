"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavHeader from "../../../pages/components/NavHeader/NavHeader";
import { HOME_SECONDARY_TABS } from "@/app/constants";

const fetchUser = async (id: number) => {
  try {
    const response = await fetch(`/api/user/routes?id=${id}`);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return { data: null };
  }
};

export default function Check_In() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const result = await fetchUser(8);
      setUserData(result.data);
      console.log(result);
    };

    getUserData();
  }, []);

  return (
    <>
      <NavHeader
        primary="/home"
        secondary="/home/check-in"
        secondaryTabs={HOME_SECONDARY_TABS}
      />
      <main>
        {/* check in page container */}
        <div className="w-full inline-block">
          <div className="w-[50%] ml-[15%] flex flex-col mb-[80px]">
            <h1 className="font-bold text-[25px]">Check-In</h1>

            <div className="my-[30px]">
              <h2 className="font-semibold text-[20px] mb-[8px]">
                Enter today&apos;s weight:
              </h2>
              <div className="input-group w-[20%]">
                <input
                  type="number"
                  className="form-control"
                  aria-label="Amount (to the nearest pound)"
                ></input>
                <div className="input-group-append">
                  <span className="input-group-text">lbs</span>
                </div>
              </div>
            </div>

            <p className="text-[14px] text-[#B7B7B7] font-medium mb-[20px]">
              Last recorded weight: 190 lbs on 5/8/2023
            </p>

            {/* grid section */}
            <div className="flex flex-col w-full font-medium">
              <div className="flex-row-global w-full bg-[#005DFF] text-white text-center py-[15px]">
                <div className="w-[33%]">
                  <p>Other Measurements</p>
                </div>
                <div className="w-[33%]">
                  <p>Last Entry</p>
                </div>
                <div className="w-[33%]">
                  <p>Today&apos;s Entry</p>
                </div>
              </div>
              <div className="flex-row-global w-full bg-white text-black text-center py-[10px] border-x-[1px] border-b-[1px] border-[#E7E7E7]">
                <div className="w-[33%]">
                  <p>Neck</p>
                </div>
                <div className="w-[33%]">
                  <p>None</p>
                </div>
                <div className="w-[33%] inline-block">
                  <input
                    type="number"
                    className="form-control w-[50%] mx-auto"
                    aria-label="Amount (to the nearest pound)"
                  ></input>
                </div>
              </div>
              <div className="flex-row-global w-full bg-white text-black text-center py-[10px] border-x-[1px] border-b-[1px] border-[#E7E7E7]">
                <div className="w-[33%]">
                  <p>Waist</p>
                </div>
                <div className="w-[33%]">
                  <p>None</p>
                </div>
                <div className="w-[33%] inline-block">
                  <input
                    type="number"
                    className="form-control w-[50%] mx-auto"
                    aria-label="Amount (to the nearest pound)"
                  ></input>
                </div>
              </div>
              <div className="flex-row-global w-full bg-white text-black text-center py-[10px] border-x-[1px] border-b-[1px] border-[#E7E7E7]">
                <div className="w-[33%]">
                  <p>Hips</p>
                </div>
                <div className="w-[33%]">
                  <p>None</p>
                </div>
                <div className="w-[33%] inline-block">
                  <input
                    type="number"
                    className="form-control w-[50%] mx-auto"
                    aria-label="Amount (to the nearest pound)"
                  ></input>
                </div>
              </div>
            </div>

            {/* link section */}
            <div className="flex mx-auto mt-[30px]">
              <h2 className="app-link">Track Additional Measurements</h2>
              <div className="mx-[5px]">|</div>
              <h2 className="app-link">Edit Previous Entries</h2>
            </div>

            {/* save button */}
            <button
              type="button"
              className="btn btn-primary w-auto mx-auto px-[30px] py-[8px] my-[20px]"
            >
              Save
            </button>

            {/* check in section */}
            <div>
              <h1 className="font-semibold text-[18px]">Check In</h1>
              <p className="mt-[5px] mb-[10px] text-[14px]">
                To help track your progress, you should record your weight
                periodically. We suggest once a week because your weight
                fluctuates daily due to uncontrollable factors like water. Try
                to always weigh yourself at the same time of day - we suggest
                early in the morning before breakfast.
              </p>
              <p className="text-[14px]">
                Taking your measurements can be an even better gauge of your
                progress because when you burn fat and build heavier muscle,
                your weight may not change or even increase even though your
                body is tighter and smaller. We suggest taking your measurements
                every 2-4 weeks.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
