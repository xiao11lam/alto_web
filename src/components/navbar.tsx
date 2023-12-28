import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
 
// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];
 
function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
 
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="Tania Andrew"
            className="border border-gray-300 p-0.5"
            src="https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
 
// account pages menu
// const accountItems = [
//   {
//     title: "About Us",
//     href: "/astro-launch-ui/login"
//   },
//   {
//     title: "Sign Up",
//     href: "/astro-launch-ui/signup"
//   }
// ];

function AccountListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = accountItems.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Account{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Account{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}

// nav list menu
const navListMenuItems = [
  {
    title: "Alto NLP",
    href: "/"
  },
  // {
  //   title: "Landing Page",
  //   href: "/astro-launch-ui/landing"
  // },
  // {
  //   title: "404",
  //   href: "/astro-launch-ui/404"
  // },
];
 
function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const triggers = {
    onMouseEnter: () => setIsMenuOpen(true),
    onMouseLeave: () => setIsMenuOpen(false),
  };
 
  const renderItems = navListMenuItems.map(({ title, href }) => (
    <a href={href} key={title}>
      <MenuItem>
        <Typography variant="paragraph" color="blue-gray" className="mb-1 font-normal">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));
 
  return (
    <React.Fragment>
      <Menu open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal outline-none focus:outline-none">
            <MenuItem
              {...triggers}
              className="hidden items-center gap-2 text-blue-gray-900 lg:flex lg:rounded-full"
            >
              <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Solutions{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList
          {...triggers}
          className="hidden grid-cols-7 gap-3 overflow-visible lg:grid"
        >
          <ul className="col-span-12 flex w-full flex-col gap-1 outline-none focus:outline-none">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px]" /> Pages{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden">
        {renderItems}
      </ul>
    </React.Fragment>
  );
}
 
// nav list component
const navListItems = [
  {
    label: "Research",
    icon: CodeBracketSquareIcon,
  },
];


const navAboutItems = [
  {
    label: "About",
    icon: LifebuoyIcon,
  },
];

function NavList() {
  return (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {/*<AccountListMenu />*/}

      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="/"
          variant="small"
          color="blue-gray"
          className="font-normal"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full">
            {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
            {label}
          </MenuItem>


        </Typography>



      ))}


      {navAboutItems.map(({ label, icon }, key) => (
          <Typography
              key={label}
              as="a"
              href="/about"
              variant="small"
              color="blue-gray"
              className="font-normal"
          >
            <MenuItem className="flex items-center gap-2 lg:rounded-full">
              {React.createElement(icon, { className: "h-[18px] w-[18px]" })}{" "}
              {label}
            </MenuItem>

          </Typography>

      ))}


    </ul>
  );
}




export default function ComplexNavbar() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [shouldShowBorder, setShouldShowBorder] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
 
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShouldShowBorder(true);
      } else {
        setShouldShowBorder(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);
 
  return (
    <Navbar
      className={`sticky inset-0 z-10 mx-auto max-w-screen-2xl p-2 lg:pl-6 mt-4 transition-shadow ${
        shouldShowBorder ? "border-b border-gray-300 shadow-none" : ""
      }`}
    >
      <div className="relative mx-auto flex items-center text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          <svg width="83" height="27" viewBox="0 0 83 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.788 26H0.576L9.9 0.799998H13.932L23.256 26H19.044L17.532 21.86H6.3L4.788 26ZM11.916 6.2L7.632 18.044H16.2L11.916 6.2ZM29.9559 26H25.9959V0.799998L29.9559 0.368V26ZM40.7368 26H36.7768V11.744H33.1408V8H36.7768V0.799998L40.7368 0.368V8H46.1368V11.744H40.7368V26ZM56.2185 26.216C50.8905 26.216 47.0025 22.256 47.0025 17C47.0025 11.744 50.8905 7.784 56.2185 7.784C61.5465 7.784 65.4345 11.744 65.4345 17C65.4345 22.256 61.5465 26.216 56.2185 26.216ZM56.2185 22.4C59.3145 22.4 61.4025 20.132 61.4025 17C61.4025 13.868 59.3145 11.6 56.2185 11.6C53.1225 11.6 51.0345 13.868 51.0345 17C51.0345 20.132 53.1225 22.4 56.2185 22.4Z" fill="#24335F"/>
            <path d="M80.1934 22.7073H78.0645V23.2889H80.1934V24.4998L82.9995 22.9966L80.1934 21.4963V22.7073Z" fill="#24335F"/>
            <path d="M73.3751 20.0498C71.9818 20.0498 70.8477 21.2667 70.8477 22.761C70.8477 24.2761 71.9818 25.5109 73.3751 25.5109C74.7489 25.5109 75.8663 24.2791 75.8663 22.761C75.8691 21.2667 74.7489 20.0498 73.3751 20.0498Z" fill="#24335F"/>
          </svg>
        </Typography>
        <div className="hidden lg:flex ml-auto">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>

        {/*<a href="https://discord.gg/WCvQWMwT" target="_blank">*/}
        {/*  <Button size="sm" color="dark" variant="text">*/}
        {/*    <i className="fab fa-discord text-lg leading-none" aria-hidden="true"></i>*/}
        {/*  </Button>*/}
        {/*</a>*/}
        {/*<a href="https://github.com/creativetimofficial/astro-launch-ui" target="_blank">*/}
        {/*  <Button size="sm" color="dark" variant="text">*/}
        {/*    <i className="fab fa-github text-xl leading-none" aria-hidden="true"></i>*/}
        {/*  </Button>*/}
        {/*</a>*/}
        <a href="/about">
          <Button color="dark">Request A Demo
            {/*<img*/}
            {/*    src={`iconsAlto/requestDemoIcon.svg`}*/}
            {/*    alt="logo"*/}
            {/*    className="w-20"*/}
            {/*/>*/}
          </Button>
        </a>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}