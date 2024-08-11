"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import NavHeader from "../../pages/components/NavHeader/NavHeader";
import { HOME_SECONDARY_TABS } from "../constants";

import { fetchUser, updateUser } from "@/pages/utils/userAPI";

import ProgressBar from "@/pages/components/ProgressBar";

export default function Home() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      const result = await fetchUser(8);

      const userInfo = result.data[0];

      setUserData(userInfo);
      console.log(userInfo);
    };

    getUserData();
  }, []);

  return (
    <>
      <NavHeader
        primary="/home"
        secondary="/home"
        secondaryTabs={HOME_SECONDARY_TABS}
      />
      <main>
        {/* home page container */}
        <div className="w-full">
          <div className="mx-[15%] mt-[50px] flex flex-col gap-[20px]">
            {/* daily summary */}
            <section className="bg-[grey] min-w-[500px] min-h-[200px]">
              {/* section title */}
              <div className="bg-sky-300 w-full px-[15px] py-[10px] justify-between text-white flex">
                <h2 className="h-auto my-auto font-semibold">
                  Your Daily Summary
                </h2>
                <div className="items-center flex">
                  <h2 className="text-[45px] mr-[10px]">1</h2>
                  <div className="flex items-start flex-col">
                    <p className="text-[14px]">Day</p>
                    <p className="text-[14px]">Streak</p>
                  </div>
                </div>
              </div>

              {/* section body */}
              <div className="px-[15px] py-[70px] flex justify-between w-full">
                {/* left column */}
                <div className="w-[30%]">
                  <div className="bg-slate-700 w-full h-[100px]"></div>
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <div className="flex items-baseline">
                        <p className="text-[#78CD87] text-[20px] font-semibold mr-1">
                          0
                        </p>
                        <p>lbs</p>
                      </div>
                      <p>Lost</p>
                    </div>
                    <div>
                      <i className="bi bi-clipboard2-plus-fill text-[40px] "></i>
                    </div>
                  </div>
                </div>

                {/* right column */}
                <div className="w-[65%] flex flex-col">
                  <div>
                    Calories Remaining <a href="">Change</a>
                  </div>
                  <div className="flex items-center justify-between">
                    <h1 className="text-[#75D386] text-[50px] font-bold">
                      2560
                    </h1>
                    <div>
                      <button className="btn btn-outline-secondary bg-white mr-[20px]">
                        Add Exercise
                      </button>
                      <button className="btn btn-outline-secondary bg-white">
                        Add Food
                      </button>
                    </div>
                  </div>

                  <hr className="mt-[10px] mb-[5px]"></hr>

                  <div className="flex justify-between items-center w-[75%] mb-[10px]">
                    <div className="flex flex-col">
                      <h1 className="text-[25px] font-bold">2560</h1>
                      <p className="text-[14px] font-semibold">GOAL</p>
                    </div>

                    <div className="border-r-2 border-gray-50 h-[25px]"></div>

                    <div className="flex flex-col">
                      <h1 className="text-[25px] font-bold">0</h1>
                      <p className="text-[14px] font-semibold">FOOD</p>
                    </div>

                    <div className="text-[14px] font-semibold">-</div>

                    <div className="flex flex-col">
                      <h1 className="text-[25px] font-bold">0</h1>
                      <p className="text-[14px] font-semibold">EXERCISE</p>
                    </div>

                    <div className="text-[14px] font-semibold">=</div>

                    <div className="flex flex-col">
                      <h1 className="text-[25px] font-bold">0</h1>
                      <p className="text-[14px] font-semibold">NET</p>
                    </div>
                  </div>

                  <ProgressBar value={25} max={100} />
                </div>
              </div>
            </section>

            <div className="flex w-full justify-between gap-[20px]">
              {/* recent forum */}
              <section className="bg-[grey] w-[40%] min-h-[200px]"></section>

              {/* blog */}
              <section className="bg-[grey] w-[60%] min-h-[200px]"></section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
