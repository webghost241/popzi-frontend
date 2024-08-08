import { motion, AnimatePresence } from 'framer-motion';
import { drawerVariants, sidebarVariants } from '@/utilies/data';
import SidebarItem from '../sideitem';

type SidebarType = {
  isOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar = ({ isOpen, toggleSidebar }: SidebarType) => {


  return (
    <div className="relative">
      <motion.div
        className="fixed top-0 left-0 h-full p-3 bg-bg2 shadow-sm hidden lg:flex flex-col justify-between"
        variants={sidebarVariants}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
      >
        <SidebarItem isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </motion.div>

      {/* Drawer visible only on small screens */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-bg2 bg-opacity-50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleSidebar}
            />
            <motion.div
              className="fixed top-0 left-0 h-full flex flex-col justify-between bg-bg2 z-50 lg:hidden"
              variants={drawerVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
        <SidebarItem isOpen={isOpen} toggleSidebar={toggleSidebar} />
            
            </motion.div>
          </>
        )}
      </AnimatePresence>



    </div>
  );
};

export default Sidebar;

