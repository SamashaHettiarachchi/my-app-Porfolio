// Assets using public folder paths for better deployment compatibility
export const assets = {
  user_image: "/user-image.png",
  code_icon: "/code-icon.png",
  code_icon_dark: "/code-icon-dark.png",
  edu_icon: "/edu-icon.png",
  edu_icon_dark: "/edu-icon-dark.png",
  project_icon: "/project-icon.png",
  project_icon_dark: "/project-icon-dark.png",
  vscode: "/vscode.png",
  firebase: "/firebase.png",
  figma: "/figma.png",
  git: "/git.png",
  mongodb: "/mongodb.png",
  right_arrow_white: "/right-arrow-white.png",
  logo: "/logo.png",
  logo_dark: "/logo_dark.png",
  mail_icon: "/mail_icon.png",
  mail_icon_dark: "/mail_icon_dark.png",
  profile_img: "/profile-img.png",
  download_icon: "/download-icon.png",
  hand_icon: "/hand-icon.png",
  header_bg_color: "/header-bg-color.png",
  moon_icon: "/moon_icon.png",
  sun_icon: "/sun_icon.png",
  arrow_icon: "/arrow-icon.png",
  arrow_icon_dark: "/arrow-icon-dark.png",
  menu_black: "/menu-black.png",
  menu_white: "/menu-white.png",
  close_black: "/close-black.png",
  close_white: "/close-white.png",
  web_icon: "/web-icon.png",
  mobile_icon: "/mobile-icon.png",
  ui_icon: "/ui-icon.png",
  graphics_icon: "/graphics-icon.png",
  right_arrow: "/right-arrow.png",
  send_icon: "/send-icon.png",
  right_arrow_bold: "/right-arrow-bold.png",
  right_arrow_bold_dark: "/right-arrow-bold-dark.png",
  // Technology specific icons
  java_icon: "/java.png",
  javascript_icon: "/java_script.png",
  php_icon: "/PHP.png",
  c_icon: "/C_lan.png",
  html_icon: "/HTML (2).png",
  css_icon: "/CSS_icon.png",
  react_icon: "/react.png",
  nodejs_icon: "/node.js.png",
  nextjs_icon: "/next.js-48.png",
  express_icon: "/icons8-express-js-50.png",
  react_native_icon: "/react _native.png",
  expo_icon: "/expo-icon.png",
  mysql_icon: "/mySql.png",
  mssql_icon: "/sql-server_icon.png",
  mongo_dp_icon: "/mongo_dp.png",
  aws_icon: "/aws.png",
  android_studio_icon: "/android-studio-48.png",
  jwt_icon: "/JWT_token_icon.png",
  // Social Media Icons
  linkedin_icon: "/icons8-linkedin-50.png",
  github_icon: "/icons8-github-50.png",
  facebook_icon: "/icons8-facebook-50.png",
  medium_icon: "/icons8-medium-50.png",
  // Skills category icons
  coding_icon: "/coding.png",
  framework_icon: "/framework.png",
  database_icon: "/database.png",
  skill_icon: "/skill.png",
  // Soft skills icons
  problemsolving_icon: "/problemsolving.png",
  teamwork_icon: "/teamwork.png",
  adapt_icon: "/adapt.png",
  communication_icon: "/communication.png",
  critical_thinking_icon: "/critical_thinking.png",
  support_icon: "/support.png",
  leadership_icon: "/leadership.png",
};

export const workData = [
  {
    title: "ATG Healthcare Care Plan Manager",
    description: "Mobile & Web Application",
    type: "Second-Year Software Project",
    duration: "Dec 2024 – Present",
    bgImage: "/ATG-Healthcare.jpg",
    fullDescription:
      "Developed a cross-platform healthcare solution to streamline care coordination between patients, care navigators, and administrators. Key features include personalized care plan tracking, medication and appointment scheduling with reminders, readiness-based consultation booking, secure document sharing, real-time chat, and Google Calendar integration.",
    technologies: [
      "React Native",
      "Expo Go",
      "AWS RDS",
      "AWS S3",
      "AWS Amplify",
      "AWS Cognito",
      "AWS Lambda",
      "Firebase",
      "Calendly",
      "Node.js",
      "Python",
      "API Gateway",
      "React.js",
      "Express.js",
      "MongoDB",
    ],
    category: "Healthcare Tech",
    demoUrl: "#", // Add your live demo URL here
    githubUrl:
      "https://github.com/AymanTechGlobal/atg-healthcare-careplan-manager", // Add your GitHub repository URL here
    detailsUrl: "#", // Add your project details URL here
  },
  {
    title: "Full-Stack User Management System",
    description: "MERN Stack Application",
    type: "Web Development Project",
    duration: "May – July 2025",
    bgImage: "/UserManagement_system.jpg",
    fullDescription:
      "Built a responsive user management app with user authentication, role-based access (admin/user), and full CRUD operations using MongoDB, Express.js, React, and Node.js. Deployed frontend on Vercel and backend on Railway, with a cloud-hosted MongoDB Atlas database.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "bcrypt",
      "Vercel",
      "Railway",
      "MongoDB Atlas",
    ],
    category: "Full-Stack Web",
    demoUrl: "https://my-full-stack-one.vercel.app/", // Add your live demo URL here
    githubUrl: "https://github.com/SamashaHettiarachchi/my_full_stack", // Add your GitHub repository URL here
    detailsUrl: "#", // Add your project details URL here
  },
  {
    title: "Snake Game",
    description: "Java Desktop Application",
    type: "Desktop Game Development",
    duration: "Sep – Oct 2024",
    bgImage: "/Snakegame.jpg",
    fullDescription:
      "Developed a classic Snake game using Java Swing, implementing game loops, collision detection, and keyboard event handling. The project demonstrates strong object-oriented design and GUI programming.",
    technologies: [
      "Java",
      "Java Swing",
      "OOP",
      "Event Handling",
      "GUI Programming",
    ],
    category: "Game Development",
    githubUrl: "https://github.com/SamashaHettiarachchi/Snake_game", // Add your GitHub repository URL here
    detailsUrl:
      "https://www.linkedin.com/posts/samasha-hettiarachchi-635a79270_javadevelopment-snakegame-oop-activity-7251095673662537728-wdcd?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJdr0kBlVHSPHx0XepYKWJpHie8IXnz2wc", // Add your project details URL here
  },
  {
    title: "Drive Assistance System",
    description: "Hardware Project",
    type: "Embedded Systems Project",
    duration: "Sep 2023 – April 2024",
    bgImage: "/Drive_assistem_system.jpg",
    fullDescription:
      "Built an embedded vehicle safety system with adaptive headlights, fog light automation, and lane departure alerts using ESP32, C++, and real-time sensor input. Enabled Bluetooth-based remote control via mobile app.",
    technologies: [
      "ESP32",
      "C++",
      "Bluetooth",
      "Real-time Sensors",
      "Embedded Systems",
    ],
    category: "IoT & Hardware",
    githubUrl:
      "https://github.com/SamashaHettiarachchi/Level1_hardware_project", // Add your GitHub repository URL here
    detailsUrl:
      "https://www.linkedin.com/posts/samasha-hettiarachchi-635a79270_driveassistance-automotivesafety-engineering-activity-7241085944873844736-u-Nq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJdr0kBlVHSPHx0XepYKWJpHie8IXnz2wc", // Add your project details URL here
  },
];

export const skillsData = [
  {
    icon: assets.coding_icon,
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
    icon: assets.framework_icon,
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
    icon: assets.database_icon,
    title: "Databases",
    level: "Intermediate",
    technologies: [
      { icon: assets.mysql_icon, name: "MySQL" },
      { icon: assets.mssql_icon, name: "MSSQL" },
      { icon: assets.mongodb, name: "MongoDB" },
    ],
  },
  {
    icon: assets.support_icon,
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
    icon: assets.skill_icon,
    title: "Soft Skills",
    level: "Advanced",
    technologies: [
      { icon: assets.problemsolving_icon, name: "Problem-solving" },
      { icon: assets.teamwork_icon, name: "Team Work" },
      { icon: assets.adapt_icon, name: "Adaptability" },
      { icon: assets.communication_icon, name: "Communication" },
      { icon: assets.critical_thinking_icon, name: "Critical Thinking" },
      { icon: assets.leadership_icon, name: "Leadership" },
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

export const highlightsData = [
  {
    type: "blog",
    title:
      "How to Build a Document Management System on AWS: S3, RDS, Lambda, and API Gateway from Scratch (Postman Tested)",
    description:
      "Comprehensive guide to building a document management system on AWS using S3, RDS, Lambda, API Gateway, and Postman for testing.",
    date: "Jul 2025",
    tags: ["AWS", "S3", "RDS", "Lambda", "API Gateway", "Postman"],
    link: "https://medium.com/@sashinisamasha/how-to-build-a-document-management-system-on-aws-s3-rds-lambda-and-api-gateway-from-scratch-2b1499cf61c3",
    image: "/aws.jpg",
  },
  {
    type: "blog",
    title: "Why I Wrote This Article: The Simplest MERN Project",
    description:
      "An insightful article about the motivation behind creating beginner-friendly MERN stack tutorials. Sharing the journey of simplifying full-stack development concepts for new developers entering the field.",
    date: "Aug 2025",
    tags: ["MERN", "React", "MongoDB", "Tutorial", "Beginner"],
    link: "https://medium.com/@sashinisamasha/1-why-i-wrote-this-article-the-simplest-mern-project-3026d623889f",
    image: "/mern.jpg",
  },
  {
    type: "achievement",
    title: "Top 10 – Innovate with Ballerina (2024)",
    description:
      "Recognized among the most popular innovations in the prestigious Innovate with Ballerina competition. Organized by IEEE Student Branch at University of Moratuwa in collaboration with WSO2, showcasing cutting-edge development skills.",
    date: "2024",
    tags: ["Innovation", "Ballerina", "IEEE", "WSO2", "University"],
    link: "https://www.linkedin.com/posts/samasha-hettiarachchi-635a79270_innovatewithballerina-ballerinalang-wso2-activity-7260923467951153153-KG7R?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJdr0kBlVHSPHx0XepYKWJpHie8IXnz2wc",
    image: "/ballerina.jpg",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git,
];
