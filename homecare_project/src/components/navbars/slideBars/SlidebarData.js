import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SlidebarData = [
  {
    title: "Overview",
    path: "",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowDownFill />,
    subNav: [
      { title: "Users", path: "/overview/users", icon: <IoIcons.IoIosPaper /> },
      {
        title: "Revenue",
        path: "",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "About",
    path: "",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowDownFill />,
    subNav: [
      {
        title: "Signin",
        path: "",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "upDown",
        path: "",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "Overview",
    path: "",
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: "About",
    path: "",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowDownFill />,
    subNav: [
      {
        title: "Signin",
        path: "",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "upDown",
        path: "",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
