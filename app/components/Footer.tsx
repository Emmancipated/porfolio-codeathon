export default function Footer() {
  return (
    <div className=" flex justify-between items-center py-4 mt-auto px-4  md:px-[30px] lg:px-[61px] border-solid border-t border-t-[#333333]">
      <div className=" md:flex gap-x-1 md:gap-x-4 text-xs md:text-base">
        <span className="py-1 md:py-0 inline-block">Facebook</span>
        <span className="py-1 md:py-0 inline-block">Instagram</span>
        <span className="py-1 md:py-0 inline-block">Youtube</span>
      </div>
      <p className=" text-xs md:text-base">© 2022 Všechna práva vyhrazena.</p>
    </div>
  );
}
