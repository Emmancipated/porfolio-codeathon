"use client"
import Image from "next/image";
import logo from "@/public/images/logo.svg"
import hero from "@/public/images/hero.svg"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavBar from "./components/NavBar";
import { BigTitle } from "./components/BigTitle";
import { TitleShort } from "./components/TitleShort";
import { WorkText } from "./components/WorkText";
import { Magicpen, Message2, Mobile, Monitor, Shop, Location } from "iconsax-react";
import { ProgressBar } from "./components/ProgressBar";
import gallery from "@/public/images/galleryOne.svg"
import dropDown from "@/public/images/dropDown.svg"


const tabArray = [
  'All',
  'Web',
  'Komponenty',
  'Animace',
  'Mockups'
]
export default function Home() {
  const activeSection = useRef<HTMLDivElement>(null)
  const [activePath, setActivePath] = useState('')
  const [tabState, setTabState] = useState('All')
  const [openDropdown, setOpenDropdown] = useState(false);
  const [openDropdownValue, setOpenDropdownValue] = useState('');

  const scrollIntoView = () => {
    if (activeSection.current !== null) {
      activeSection.current.scrollIntoView({ behavior: 'smooth' });
    }

  }

  const targetSection = (section: string) => {
    setActivePath(section)
  }

  useEffect(() => {
    scrollIntoView()
  }, [activePath])

  return (
    <>
      <NavBar pathNameProp={activePath} action={targetSection} />

      <main className="">
        <div className="">

          <section className=" md:flex justify-center items-center gap-x-8 flex-1 scroll-mt-[521px] md:scroll-mt-[111px]" ref={activePath === 'Home' ? activeSection : null}>
            <div>
              <Image src={hero} alt="logo" className=" md:min-w-[250px] lg:min-w-[350px]" />
            </div>
            <div>
              <div>
                <h3 className="text-[12px]  md:text-[24px] font-normal text-center md:text-left">Full Stack Developer</h3>

                <h2 className="text-[35px] font-bold md:text-[70px] text-center text-white md:text-left">DevRos</h2>

                <p className="text-[14px] md:text-[20px] font-normal text-white px-4">Potřebujete vytvořit webové stránky ? Při tvorbě webových stránek zajišťuji celkový design od návrhu až po realizaci. Perfektní technickou stránku zajistišťuji též, aby všechno běželo přesně jak má. Kdyby by Vás mé portofilo přípradně zkušenosti zaujaly - napište mi !
                </p>

                <div className=" flex gap-x-2 justify-center my-4">
                  <button className=" text-[20px] text-white font-normal bg-[#333333] rounded-[30px] border-[#007CED] border-[3px] py-[8px] px-[30px]">Portfolio</button>
                  <button className=" text-[20px] text-white font-normal bg-[#333333] rounded-[30px] border-white border-[3px] py-[8px] px-[30px]">Kontakt</button>
                </div>
              </div>
            </div>
          </section>

          <section ref={activePath === 'Front-end skills' ? activeSection : null} className="scroll-mt-[152px] md:scroll-mt-[111px]">
            <BigTitle header="Front-end skills" />

            <div className=" px-8 md:px-[50px] lg:px-[81px] md:grid grid-cols-2 gap-x-8">
              <div className="mb-8 md:mb-0">
                <TitleShort title="Co dělám ?" />
                <WorkText icon={<Magicpen size="32" color="#007CED" />} title="UI / UX Design" text="Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou" />

                <WorkText icon={<Monitor size="32" color="#007CED" />} title="HTML, CSS, JavaScript" text="Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou" />

                <WorkText icon={<Shop size="32" color="#007CED" />} title="Sass, Green Sock, React" text="Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou" />
              </div>

              <div>
                <TitleShort title="Coding Skills" />
                <ProgressBar title="HTML" percentage="100%" />
                <ProgressBar title="CSS" percentage="80%" />
                <ProgressBar title="JavaScript" percentage="60%" />
                <ProgressBar title="React" percentage="35%" />
                <ProgressBar title="Sass" percentage="30%" />
                <ProgressBar title="GreenShock" percentage="20%" />

              </div>
            </div>
          </section>


          <section ref={activePath === 'Back-end skills' ? activeSection : null} className="scroll-mt-[152px] md:scroll-mt-[111px]">
            <BigTitle header="Back-end skills" />

            <div className=" px-8 md:px-[50px] lg:px-[81px] md:grid grid-cols-2 gap-x-8">
              <div className="mb-8 md:mb-0">
                <TitleShort title="Co dělám ?" />
                <WorkText icon={<Magicpen size="32" color="#007CED" />} title="PHP" text="Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou" />

                <WorkText icon={<Monitor size="32" color="#007CED" />} title="Database" text="Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou" />
              </div>

              <div>
                <TitleShort title="Coding Skills" />
                <ProgressBar title="PHP" percentage="10%" />
                <ProgressBar title="MySQL" percentage="10%" />

              </div>
            </div>
          </section>



          <section ref={activePath === 'Portfolio' ? activeSection : null} className="scroll-mt-[152px] md:scroll-mt-[111px]">
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


          <section ref={activePath === 'Kontakt' ? activeSection : null} className="scroll-mt-[152px] md:scroll-mt-[111px]">
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
        </div>
      </main>
    </>
  );
}
