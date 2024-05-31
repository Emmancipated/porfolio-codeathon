export const TitleShort = ({ title }: { title: string }) => {
  return (
    <div className=" w-fit my-4">
      <h3 className=" text-white text-xl md:text-2xl font-bold">{title}</h3>
      <div className=" h-[2px] w-[70%] bg-[#353535]">
        <div className=" h-[2px] w-[40%] bg-[#007CED]"></div>
      </div>
    </div>
  )
}