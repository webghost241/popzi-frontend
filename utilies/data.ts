export const menuItems = [
    { name: 'Home', icon: "/home.png", link: '/', iconActive: "/homeactive.png" },
    { name: 'Prizes', icon: "/prizes.png", iconActive:"/prizes.png", link: '/prizes' },
    { name: 'Bin', icon: "/bin.png", link: '/bin' },
  ];

 export const sidebarVariants = {
    open: { width: '16rem', transition: { type: 'spring', stiffness: 200, damping: 20 } },
    closed: { width: '6rem', transition: { type: 'spring', stiffness: 200, damping: 20 } },
  };

 export const drawerVariants = {
    open: { x: 0, transition: { type: 'spring', stiffness: 200, damping: 20 } },
    closed: { x: '-100%', transition: { type: 'spring', stiffness: 200, damping: 20 } },
  };
