"use client"
import { Magicpen, Mobile, Location, Message2 } from "iconsax-react";
import { BigTitle } from "../components/BigTitle";
import { TitleShort } from "../components/TitleShort";
import { WorkText } from "../components/WorkText";
import { ProgressBar } from "../components/ProgressBar";
import Image from "next/image";
import dropDown from "@/public/images/dropDown.svg"
import { useState } from "react";

export default function Contact() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdownValue, setOpenDropdownValue] = useState('');
  return (

    <>
      <section>
        <BigTitle header="Kontakt" />

        <div className=" px-8 md:px-[50px] lg:px-[81px] py-4">
          <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d126865.53705532447!2d3.4308096!3d6.4520192!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1713827146763!5m2!1sen!2sng" width="100%" height="250" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className=" px-8 md:px-[50px] lg:px-[81px] md:grid grid-cols-[35%_auto] gap-x-8">
          <div className="mb-8 md:mb-0">

            <WorkText icon={<Mobile size="32" color="#007CED" />} title="720 244 551 -2" text="Fahradit klasický smysluplný text vhodnou bezvýznamovo" />
            <WorkText icon={<Location size="32" color="#007CED" />} title="Česká Republika" text="Fahradit klasický smysluplný text vhodnou bezvýznamovo" />
            <WorkText icon={<Message2 size="32" color="#007CED" />} title="fiktivni@gmail.com" text="Fahradit klasický smysluplný text vhodnou bezvýznamovo" />
          </div>

          <div>
            <TitleShort title="Kontaktuj mě !" />
            <div className=" md:grid grid-cols-2 gap-x-3">
              <div className="h-full flex flex-col justify-between">
                <input type="text" name="" id="" className="bg-transparent border-[2px] border-[#555555] rounded-[5px] p-2 w-full placeholder:text-[#FFFFFF80] text-sm my-2" placeholder="Jméno a přijmení" />
                <input type="text" name="" id="" className="bg-transparent border-[2px] border-[#555555] rounded-[5px] p-2 w-full placeholder:text-[#FFFFFF80] text-sm my-2" placeholder="Email" />
                <div className=" relative">
                  <input type="text" name="" id="" className="bg-transparent border-[2px] border-[#555555] rounded-[5px] p-2 w-full placeholder:text-[#FFFFFF80] text-sm my-2" placeholder="Spolupráce" value={openDropdownValue} />
                  <Image src={dropDown} alt="logo" className="my-2 absolute top-[15px] right-[15px] cursor-pointer" onClick={() => { setOpenDropdown(!openDropdown) }} />
                  {openDropdown && (
                    <div className=" absolute w-full z-10 border border-solid border-[#555555]">
                      <div className=" relative border-0 border-t z-10 border-t-[#555555]">
                        <div className="p-2 bg-[#222222] hover:bg-[#494c53] border-0 border-b border-x border-x-[#555555] border-b-[#555555] cursor-pointer" onClick={() => {
                          setOpenDropdownValue('Religion')
                          setOpenDropdown(!openDropdown)
                        }}>Religion</div>
                        <div className="p-2 bg-[#222222] hover:bg-[#494c53] border-0 border-b border-x border-x-[#555555] border-b-[#555555] cursor-pointer" onClick={() => {
                          setOpenDropdownValue('Party')
                          setOpenDropdown(!openDropdown)
                        }}>Party</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <textarea name="" id="" cols={30} rows={7} className=" bg-transparent border-[2px] border-[#555555] rounded-[5px] p-2 w-full placeholder:text-[#FFFFFF80] text-sm" placeholder="Jméno a přijmení"></textarea>
            </div>

            <button className=" text-[20px] text-white font-normal bg-[#333333] rounded-[30px] border-[#007CED] border-[3px] py-[8px] px-[30px] my-4">Odeslat</button>

          </div>
        </div>
      </section>
    </>
  )
}