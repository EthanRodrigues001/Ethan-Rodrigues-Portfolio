import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

const Navbar = () => {
  const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Stack", link: "#stack" },
    { name: "Contact", link: "#contact" },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
};

export default Navbar;
