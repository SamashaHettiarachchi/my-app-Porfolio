import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";

// Technology specific icons
import java_icon from "./java.png";
import javascript_icon from "./java_script.png";
import php_icon from "./PHP.png";
import c_icon from "./C_lan.png";
import html_icon from "./HTML (2).png";
import css_icon from "./CSS_icon.png";
import react_icon from "./react.png";
import nodejs_icon from "./node.js.png";
import nextjs_icon from "./next.js-48.png";
import express_icon from "./icons8-express-js-50.png";
import react_native_icon from "./react _native.png";
import expo_icon from "./expo-icon.png";
import mysql_icon from "./mySql.png";
import mssql_icon from "./sql-server_icon.png";
import mongo_dp_icon from "./mongo_dp.png";
import aws_icon from "./aws.png";
import android_studio_icon from "./android-studio-48.png";
import jwt_icon from "./JWT_token_icon.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  // Technology specific icons
  java_icon,
  javascript_icon,
  php_icon,
  c_icon,
  html_icon,
  css_icon,
  react_icon,
  nodejs_icon,
  nextjs_icon,
  express_icon,
  react_native_icon,
  expo_icon,
  mysql_icon,
  mssql_icon,
  mongo_dp_icon,
  aws_icon,
  android_studio_icon,
  jwt_icon,
};

export const workData = [
  {
    title: "Frontend project",
    description: "Web Design",
    bgImage: "/work-1.png",
  },
  {
    title: "Geo based app",
    description: "Mobile App",
    bgImage: "/work-2.png",
  },
  {
    title: "Photography site",
    description: "Web Design",
    bgImage: "/work-3.png",
  },
  {
    title: "UI/UX designing",
    description: "UI/UX Design",
    bgImage: "/work-4.png",
  },
];

export const skillsData = [
  {
    icon: assets.code_icon,
    title: "Programming Languages",
    level: "Advanced",
    technologies: [
      { icon: assets.java_icon, name: "Java" },
      { icon: assets.javascript_icon, name: "JavaScript" },
      { icon: assets.php_icon, name: "PHP" },
      { icon: assets.c_icon, name: "C" },
    ],
  },
  {
    icon: assets.web_icon,
    title: "Frameworks & Libraries",
    level: "Advanced",
    technologies: [
      { icon: assets.html_icon, name: "HTML" },
      { icon: assets.css_icon, name: "CSS" },
      { icon: assets.react_icon, name: "React.js" },
      { icon: assets.nextjs_icon, name: "Next.js" },
      { icon: assets.nodejs_icon, name: "Node.js" },
      { icon: assets.express_icon, name: "Express.js" },
      { icon: assets.react_native_icon, name: "React Native" },
      { icon: assets.expo_icon, name: "Expo" },
    ],
  },
  {
    icon: assets.mongodb,
    title: "Databases",
    level: "Intermediate",
    technologies: [
      { icon: assets.mysql_icon, name: "MySQL" },
      { icon: assets.mssql_icon, name: "MSSQL" },
      { icon: assets.mongodb, name: "MongoDB" },
    ],
  },
  {
    icon: assets.git,
    title: "Tools & Platforms",
    level: "Advanced",
    technologies: [
      { icon: assets.git, name: "Git" },
      { icon: assets.aws_icon, name: "AWS" },
      { icon: assets.firebase, name: "Firebase" },
      { icon: assets.vscode, name: "VS Code" },
      { icon: assets.android_studio_icon, name: "Android Studio" },
      { icon: assets.figma, name: "Figma" },
    ],
  },
  {
    icon: assets.ui_icon,
    title: "Soft Skills",
    level: "Advanced",
    technologies: [
      { icon: assets.ui_icon, name: "Problem-solving" },
      { icon: assets.ui_icon, name: "Team Work" },
      { icon: assets.ui_icon, name: "Adaptability" },
      { icon: assets.ui_icon, name: "Communication" },
    ],
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: "Web design",
    description: "Web development is the process of building, programming...",
    link: "",
  },
  {
    icon: assets.mobile_icon,
    title: "Mobile app",
    description:
      "Mobile app development involves creating software for mobile devices...",
    link: "",
  },
  {
    icon: assets.ui_icon,
    title: "UI/UX design",
    description:
      "UI/UX design focuses on creating a seamless user experience...",
    link: "",
  },
  {
    icon: assets.graphics_icon,
    title: "Graphics design",
    description: "Creative design solutions to enhance visual communication...",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Personal Values",
    description:
      "✨ Curious, adaptable, and driven to solve real-world problems through collaboration and continuous growth.",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "🎓University of Moratuwa Faculty of Information Technology",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Creative Side",
    description:
      "🎧🖌️✍️ Creative at heart — I love music, fashion design, hand-drawn art, and writing that fuels my thinking beyond code.",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
