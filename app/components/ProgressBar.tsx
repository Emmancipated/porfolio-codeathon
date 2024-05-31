export const ProgressBar = ({ title, percentage }: { title: string, percentage: string }) => {
  return (
    <div className=" my-4">
      <div className=" flex justify-between items-center">
        <h3 className=" text-white text-base md:text-[18px] font-bold">{title}</h3>
        <h3 className=" text-[#FFFFFFB2] text-xs md:text-sm font-normal">{percentage}</h3>
      </div>

      <div className=" h-[15px] border-solid border-[2px] border-[#444444] flex rounded-lg px-1">
        <div className={` h-[5px] bg-[#007CED] my-auto rounded-lg`} style={{ width: percentage }}></div>
      </div>
    </div>
  )
}