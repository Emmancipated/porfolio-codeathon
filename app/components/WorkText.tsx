export const WorkText = ({ icon, title, text }: { icon: any, title: string, text: string }) => {
  return (
    <div className=" grid grid-cols-[auto_1fr] gap-x-3 my-4">
      {icon}
      <div>
        <h3 className=" font-bold text-base md:text-lg text-white">{title}</h3>
        <p className=" font-normal text-[#FFFFFFB2]">{text}</p>
      </div>
    </div>
  )
}