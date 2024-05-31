"use client"
import { useState } from "react";
import { BigTitle } from "../components/BigTitle";
import { TitleShort } from "../components/TitleShort";
import Image from "next/image";
import gallery from "@/public/images/galleryOne.svg"

const tabArray = [
  'All',
  'Web',
  'Komponenty',
  'Animace',
  'Mockups'
]

export default function PortFolio() {
  const [tabState, setTabState] = useState('All')
  return (
    <>
      <section>
        <BigTitle header="Portfolio" />

        <div className=" px-8 md:px-[50px] lg:px-[81px]">
          <div className="">
            <TitleShort title="Klienti" />
            <div className=" md:flex justify-center my-8">
              <div className=" md:flex gap-x-4 items-center">
                <div className=" font-bold text-base md:text-[20px] text-[#FFFFFF80]">Dev<span className=" font-normal">Ros</span></div>
                <div className=" font-bold text-base md:text-[20px] text-[#FFFFFF80]">Cukrárna <span className=" font-normal">Merkur</span></div>
                <div className=" font-bold text-base md:text-[20px] text-[#FFFFFF80]">Pekárna <span className=" font-normal">Merkur</span></div>
                <div className=" font-bold text-base md:text-[20px] text-[#FFFFFF80]">Dev<span className=" font-normal">Ros</span></div>
                <div className=" font-bold text-base md:text-[20px] text-[#FFFFFF80]">Místo pro <span className=" font-normal">tvoji firmu</span></div>
              </div>
            </div>

            <TitleShort title="Galerie" />
            <div className=" flex items-center gap-x-4 my-4">
              {tabArray.map((tab) => (
                <div className={` font-normal  text-sm md:text-[18px] cursor-pointer ${tab === tabState ? 'text-[#FFFFFF]' : 'text-[#FFFFFF80]'}`} key={tab} onClick={() => setTabState(tab)}>{tab}</div>
              ))}
            </div>

            <Image src={gallery} alt="logo" className="min-w-[112px] my-2" />
          </div>
        </div>
      </section>
    </>
  )
}