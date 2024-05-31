
"use client"
import logo from "@/public/images/logo.svg"
import hero from "@/public/images/hero.svg"
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';


const NavLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Front-end skills', path: '/frontend' },
  { id: 3, name: 'Back-end skills', path: '/backend' },
  { id: 4, name: 'Portfolio', path: '/portfolio' },
  { id: 5, name: 'Kontakt', path: '/contact' },
];
export default function NavBar({ pathNameProp, action }: { pathNameProp: string, action: (elem: string) => void }) {
  // const pathname = usePathname();
  // const isActive = (path: string) => path === pathname;

  const pathname = pathNameProp;
  const isActive = (path: string) => path === pathname;
  console.log(pathNameProp);

  return (
    <div className=" py-4 md:py-[28px] flex justify-between px-4 md:px-[30px] lg:px-[61px] sticky top-0 bg-[#222222]">
      <div>
        <Image src={logo} alt="logo" className="min-w-[112px]" />
      </div>
      <ul className=" md:flex gap-x-4 items-center">
        {NavLinks.map((link) => {
          return (
            <li key={link.id}
              className={isActive(link.name) ? 'active md:text-lg font-normal text-[#FFFFFF] cursor-pointer' : 'md:text-lg font-normal text-[#FFFFFF80] cursor-pointer'}
              onClick={() => action(link.name)}>
              {/* <Link
                href={link.path}
                className={isActive(link.path) ? 'active md:text-lg font-normal text-[#FFFFFF]' : 'md:text-lg font-normal text-[#FFFFFF80]'}
              >
                {link.name}
              </Link> */}
              {link.name}
            </li>
          );
        })}
      </ul>
    </div>
  )
}