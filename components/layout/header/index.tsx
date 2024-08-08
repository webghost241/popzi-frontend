import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import SearchInput from "@/components/utitlies/custominput";

type HeaderProps = {
  toggleDrawer: () => void;
  isSidebarOpen: boolean;
};

const Header = ({ toggleDrawer, isSidebarOpen }: HeaderProps) => {
  const { width } = useWindowSize();

  // Determine the x position based on screen width and sidebar state
  const getHeaderPosition = () => {
    if (width > 1024) {
      // Large screens (Desktop)
      return isSidebarOpen ? "16rem" : "6rem"; // Sidebar open or closed
    } else {
      // Small screens (Mobile)
      return "0rem"; // Always at the left edge
    }
  };

  return (
    <motion.header
      className="fixed top-0 w-full h-16 bg-bg2 text-white flex items-center  px-4 z-30"
      initial={{ x: "-100%" }}
      animate={{ x: getHeaderPosition() }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      <div
        className={`${
          isSidebarOpen ? "md:w-[82%]" : "md:w-[93%]"
        } w-full flex justify-between items-center`}
      >
        <div className="font-bold text-xl leading-5 font-circular text-black">
          Good morning,{" "}
          <span className="font-medium text-lightgreen">John 👋</span>
        </div>

        <SearchInput value="" onChange={() => {}} />
      </div>
    </motion.header>
  );
};

export default Header;
