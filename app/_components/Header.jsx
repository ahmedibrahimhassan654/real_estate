"use client";

import { Button } from "@/components/ui/button";
import { KeyRound, Plus } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function Header() {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="p-6 px-10 flex items-center justify-between shadow-sm fixed top-0 right-0 left-0 w-full z-10 bg-white">
      <div className="flex gap-10 items-center justify-start ">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="مكتب ام القرى logo"
            width={100}
            height={100}
          />
        </Link>
        <ul className="hidden md:flex gap-10 justify-self-end items-center">
          <li className="font-bold hover:text-secondary cursor-pointer">
            للبيع
          </li>
          <li className="font-bold hover:text-secondary cursor-pointer">
            للايجار
          </li>
          <li className="font-bold hover:text-secondary cursor-pointer">
            وكلاؤنا
          </li>
          <li className="font-bold hover:text-secondary cursor-pointer">
            من نحن
          </li>
          <li className="font-bold hover:text-secondary cursor-pointer">
            اتصل بنا
          </li>
        </ul>
      </div>

      <div className="flex gap-10">
        <Button className="flex gap-2  bg-primary hover:bg-secondary">
          اضف اعلانك
          <Plus />
        </Button>
        <Button className="flex gap-2  bg-primary hover:bg-secondary">
          سجل دخولك <KeyRound />
        </Button>
      </div>
    </div>
  );
}

export default Header;
