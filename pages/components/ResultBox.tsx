import React from "react";

type Props = {
  results: any[];
};

function ResultBox(props: Props) {
  return (
    <>
      <div className="border-white border-[2px] w-full p-[15px] h-max-[500px]">
        {props.results.map((item, index) => {
          return (
            <div key="index">
              <div className="flex flex-col items-start">
                <div className="flex flex-row items-center">
                  <p className="app-link w-auto font-semibold text-[18px]">
                    {item.name}
                  </p>
                  <i className="bi bi-shield-check text-[#63D277] ml-[5px]"></i>
                </div>
                <p className="text-[#A2A2A2] text-[14px]">{item.size}</p>
                <p className="text-[#A2A2A2] text-[14px]">{item.calorie}</p>
              </div>
              <hr className="my-[15px] mx-[auto] w-[100%] bg-white"></hr>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ResultBox;
