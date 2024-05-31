import { Magicpen, Monitor, Shop } from "iconsax-react";
import { BigTitle } from "../components/BigTitle";
import { TitleShort } from "../components/TitleShort";
import { WorkText } from "../components/WorkText";
import { ProgressBar } from "../components/ProgressBar";

export default function Frontend() {
  return (
    <>
      <section>
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
    </>
  )
}