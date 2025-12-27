import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-purple-500/20 text-white">
      <Container>
        <div className="py-4  text-black font-bold text-2xl flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src="https://car-cleanify.vercel.app/assets/logo-BpOrj-RN.png"
              alt="Logo"
              width={60}
              height={60}
              className="h-[60px] w-[60px]"
            />
          </Link>
          <ul className="font-semibold text-[18px] flex gap-2 items-center text-white">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/aboutUs">About Us</Link>
            <Link href="/adminRoute">Admin</Link>
            <Link href="/userRoute">User</Link>
          </ul>

       
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
