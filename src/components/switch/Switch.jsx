import React from "react";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import dropimg from "../../assets/icons/drop.svg";
import pickimg from "../../assets/icons/pick.svg";

function Switch() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
      {/* PICK UP */}
      <div className="bg-white px-[48px] py-[24px]">
        <div className="mb-[16px] flex gap-3">
          <img src={pickimg} alt="" />
          Pick up
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <p className="font-bold">Locations</p>
            <select className="text-[12px]">
              <option value="">Select your city</option>
            </select>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Date</p>
            <select className="text-[12px]">
              <option className="bg-black" value="">Select your date</option>
            </select>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Time</p>
            <select className="text-[12px]">
              <option value="">select your time</option>
            </select>
          </div>
        </div>
      </div>
      {/* CHANGE */}
      <div className="bg-primary p-[18px] text-2xl rounded-md text-white">
        <CgArrowsExchangeAltV />
      </div>
      {/* DROP OFF */}
      <div className="bg-white px-[48px] py-[24px]">
        <div className="mb-[16px] flex gap-3">
          <img src={dropimg} alt="" />
          Drop off
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <p className="font-bold">Locations</p>
            <select className="text-[12px]">
              <option value="">Select your city</option>
            </select>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Date</p>
            <select className="text-[12px]">
              <option value="">Select your date</option>
            </select>
          </div>
          <div className="flex flex-col">
            <p className="text-[12px]">Time</p>
            <select className="font-bold">
              <option value="">select your time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Switch;
