import React, { useCallback, useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../sidebar";
import Header from "../header";
import { useWindowSize } from "react-use";

type LayoutWrapperType = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: LayoutWrapperType) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { width } = useWindowSize();

  const handleToggleSidebar = useCallback(() => {
    setIsSidebarOpen(!isSidebarOpen);
  }, [isSidebarOpen]);

  // Determine marginLeft for content area based on screen width and sidebar state
  const getContentMarginLeft = () => {
    if (width > 1024) {
      // Large screens (Desktop)
      return isSidebarOpen ? "16rem" : "6rem"; // Sidebar open or closed
    } else {
      // Small screens (Mobile)
      return "0rem"; // Always at the left edge
    }
  };

  return (
    <div className="flex flex-col lg:flex-row bg-bg1">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={handleToggleSidebar} />

      {/* Content Area */}
      <div className="flex-1">
        <Header
          toggleDrawer={handleToggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
        <motion.div
          className="pt-16"
          animate={{ marginLeft: getContentMarginLeft() }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default LayoutWrapper;
