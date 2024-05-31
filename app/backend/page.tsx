import { Magicpen, Monitor, Shop } from "iconsax-react";
import { BigTitle } from "../components/BigTitle";
import { TitleShort } from "../components/TitleShort";
import { WorkText } from "../components/WorkText";
import { ProgressBar } from "../components/ProgressBar";

export default function Backend() {
  return (
    <>
      <section>
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
    </>
  )
}