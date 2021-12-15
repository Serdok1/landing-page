import Head from "next/head"
import Image from "next/image"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Button,
  IconButton,
} from "@chakra-ui/react"
import { ChevronDownIcon,HamburgerIcon,AddIcon,ExternalLinkIcon,RepeatIcon,EditIcon } from "@chakra-ui/icons"
import logo from '/public/Logo.png'

export default function Home() {
  return (
    <div>
    <div className="flex flex-row sm:mx-min lg:mx-sm mt-min justify-between">
     <div><Image src={logo} width="78px" height="28px"/></div>
     <div className="hidden lg:flex flex-row w-links h-links justify-between">
     <p className="font-sans text-s">Home</p>
     <p className="font-sans text-s">Features</p>
     <p className="font-sans text-s">Pricing</p>
     <p className="font-sans text-s">Blog</p>
     <p className="font-sans text-s">Contact</p>
     </div>
     <div className="hidden flex-row justify-between w-buttons h-buttons lg:flex">
     <button className="rounded-md border-indigo-500 border-2 w-butlog h-butlog">
     <p className="font-sans text-bodysm text-indigo-500">Log in</p>
     </button>
     <button className="rounded-md w-butreg h-butreg bg-indigo-500">
     <p className="font-sans text-bodysm text-white">Register</p>
     </button>
    </div>
      
    <div className="inline lg:hidden">
<Menu>
  <MenuButton
    as={IconButton}
    aria-label="Options"
    icon={<HamburgerIcon />}
    variant="outline"
  />
  <MenuList>
    <MenuItem icon={<AddIcon />} command="⌘T">
      New Tab
    </MenuItem>
    <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
      New Window
    </MenuItem>
    <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
      Open Closed Tab
    </MenuItem>
    <MenuItem icon={<EditIcon />} command="⌘O">
      Open File...
    </MenuItem>
  </MenuList>
</Menu>

    </div>

    </div>

    <div className="flex sm:flex-col lg:flex-row xl:min-w-hero xl:h-hero md:min-w-herotablet md:h-herotablet sm:min-w-heromobile sm:h-heromobile items-center md:mt-min lg:mt-px xl:mt-lg sm:mx-mobile sm:mt-md lg:mx-min xl:mx-md 2xl:mx-xl justify-between">
    <div className="flex flex-col justify-between lg:w-herocont lg:h-herocont md:w-herotablet md:h-herotabletcont sm:w-heromobile sm:h-herocontmobile  ">
    <h1 className=" sm:text-H1M md:text-H1D">Let&apos;s get fusely together</h1>
    <p className="text-bodylarge text-gray-400 ">Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.</p>
    <button className="rounded-md bg-indigo-500 w-butreg h-butreg"><p className="text-white">Get Started</p></button>
    </div>
    <div><Image src="/../public/Hero image.svg" width="642px" height="559px"/></div>
    </div>

    <div className="flex flex-col sm:mx-mobile md:mx-min lg:mx-min xl:mx-md 2xl:mx-xl  mt-sm justify-between">
    <div className="flex items-center sm:flex-col lg:flex-row-reverse mt-sm sm:min-w-heromobile sm:h-sectionmobile md:min-w-herotablet md:h-sectiontablet xl:min-w-section xl:h-section justify-between">
    <div className="flex flex-col justify-between mt-sm sm:w-heromobile sm:h-sectioncontmobile md:w-herotablet md:h-sectionconttablet xl:w-sectioncont xl:h-sectioncont">
    <p className=" sm:text-H2M md:text-H2D ">Detailed Examination</p>
    <p className="text-bodylg text-gray-400 ">A daily dataset to keep you up to date on subscription market trends and what&apos;s happening in your vertical.</p>
    <button className="rounded-md bg-indigo-500 w-butreg h-butreg"><p className="text-white font-sans text-s">Learn more</p></button>
    </div>
    <div><Image src="/../public/Section image.svg" width="600px" height="442px"/></div>
    </div>

    <div className="flex items-center lg:flex-row sm:flex-col mt-lg sm:min-w-heromobile sm:h-sectionmobile md:min-w-herotablet md:h-sectiontablet xl:min-w-section xl:h-section justify-between">
    <div className="flex flex-col justify-between mt-sm sm:w-heromobile sm:h-sectioncontmobile md:w-herotablet md:h-sectionconttablet xl:w-sectioncont xl:h-sectioncont">
    <p className=" sm:text-H2M md:text-H2D ">Creative Solutions</p>
    <p className="text-bodylg text-gray-400 ">Creativity is our second name. We&apos;re full of inventive ideas and we&apos;re happy to present them to you.</p>
    <button className="rounded-md bg-indigo-500 w-butreg h-butreg"><p className="text-white font-sans text-s">Learn more</p></button>
    </div>
   <div><Image src="/../public/Section image2.svg" width="600px" height="497px"/></div>
    </div>

    <div className="flex items-center lg:flex-row-reverse sm:flex-col sm:min-w-heromobile sm:h-sectionmobile mt-lg md:min-w-herotablet md:h-sectiontablet xl:min-w-section xl:h-section justify-between">
    <div className="flex flex-col justify-between mt-sm rd:w-herotablet sm:w-heromobile sm:h-sectioncontmobile md:w-herotablet md:h-sectionconttablet xl:w-sectioncont xl:h-sectioncont">
    <p className=" sm:text-H2M md:text-H2D ">Proffesional Team</p>
    <p className="text-bodylg text-gray-400">Well&sbquo; obviously&sbquo; we&apos;re professionals. Don&apos;t hesitate - get to know us better.</p>
    <button className="rounded-md bg-indigo-500 w-36 w-butreg h-butreg"><p className="text-white font-sans text-s">Learn more</p></button>
    </div>
    <Image src="/../public/Section image3.svg" width="600px" height="406px"/>
    </div>

    </div>

    <div className="bg-purple-100 xl:min-w-footer h-footer mt-xl flex flex-col justify-center items-center">
     <div className="flex sm:flex-col md:flex-row justify-between sm:w-heromobile md:w-herotablet w-footercont h-footercont">
      <div className="sm:hidden md:flex flex-col justify-between h-44">
       <p className="font-sans text-s mb-9">Product</p>
       <p className="font-sans text-xs text-gray-500">How it works</p>
       <p className="font-sans text-xs text-gray-500">Features</p>
       <p className="font-sans text-xs text-gray-500">Pricing</p>
       <p className="font-sans text-xs text-gray-500">FAQ</p>
       <p className="font-sans text-xs text-gray-500">Download</p>
      </div>

      <div className="sm:hidden md:flex flex-col justify-between h-44">
       <p className="font-sans text-s mb-9">Company</p>
       <p className="font-sans text-xs text-gray-500">About</p>
       <p className="font-sans text-xs text-gray-500">Blog</p>
       <p className="font-sans text-xs text-gray-500">Partnership</p>
       <p className="font-sans text-xs text-gray-500">Terms of use</p>
       <p className="font-sans text-xs text-gray-500">Privacy policy</p>
      </div>
 
    <div className="md:hidden sm:flex sm:flex-row mb-min justify-between">
          <div className="flex flex-col justify-between h-44">
       <p className="font-sans text-s mb-9">Product</p>
       <p className="font-sans text-xs text-gray-500">How it works</p>
       <p className="font-sans text-xs text-gray-500">Features</p>
       <p className="font-sans text-xs text-gray-500">Pricing</p>
       <p className="font-sans text-xs text-gray-500">FAQ</p>
       <p className="font-sans text-xs text-gray-500">Download</p>
      </div>

      <div className="flex flex-col justify-between h-44">
       <p className="font-sans text-s mb-9">Company</p>
       <p className="font-sans text-xs text-gray-500">About</p>
       <p className="font-sans text-xs text-gray-500">Blog</p>
       <p className="font-sans text-xs text-gray-500">Partnership</p>
       <p className="font-sans text-xs text-gray-500">Terms of use</p>
       <p className="font-sans text-xs text-gray-500">Privacy policy</p>
      </div>

    </div>

      <div className="flex flex-col justify-between mb-sm">
       <p className="font-sans text-s mb-9">Support</p>
       <p className="font-sans text-xs text-gray-500">Help center</p>
       <p className="font-sans text-xs text-gray-500">Contact us</p>
      </div>


     </div>
    
    <p className="font-sans text-xs text-gray-500 mt-sm">@Sina Eren-Front End Developer</p>
    
    </div>
    
    </div>
  )
}
