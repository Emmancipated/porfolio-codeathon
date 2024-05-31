export const BigTitle = ({ header }: { header: string }) => {
  return (
    <div className="bg-[#252525] border-solid border-y border-y-[#333333] py-[33px] md:py-[43px] px-4 md:px-[30px] lg:px-[61px]">
      <h2 className=" text-white text-[30px] md:text-[50px] font-bold">{header}</h2>
    </div>
  )
}