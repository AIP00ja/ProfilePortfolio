// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
//import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
//import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
//import gsapLogo from './assets/tech_logo/gsap.png';
//import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
//import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
//import mongodbLogo from './assets/tech_logo/mongodb.png';
//import firebaseLogo from './assets/tech_logo/firebase.png';
//import cLogo from './assets/tech_logo/c.png';
//import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
//import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
//import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
//import mcLogo from './assets/tech_logo/mc.png';
//import figmaLogo from './assets/tech_logo/figma.png';
//import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import hfile from './assets/company_logo/health_files_logo.jpg';
import spine from './assets/company_logo/spine-payroll.png';
import mobilestyx from './assets/company_logo/mobilestyx.png';

// Education Section Logo's
import college from './assets/education_logo/college.png';
import school from './assets/education_logo/MSBSHSE_logo.png';


// Project Section Logo's
//import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
//import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      //  { name: 'GSAP', logo: gsapLogo },
      //  { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      //  { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      // { name: 'MongoDB', logo: mongodbLogo },
      //{ name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      //{ name: 'C', logo: cLogo },
      //{ name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      //{ name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      // { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      //{ name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      //{ name: 'Netlify', logo: netlifyLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: hfile,
    role: "Full Stack Developer(Next.js + .Net)",
    company: "Hfiles",
    date: "June 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Next Js",
      "TypeScript",
      "Tailwind CSS",
      "MySql",
      "Redux",
      "AWS",
      "Docker",
      "Asp.net code web API ",


    ],
  },
  {
    id: 1,
    img: mobilestyx,
    role: "Dot Net Developer Intern",
    company: "Mobilestyx Consulting and Solutions",
    date: "Oct 2024 – April 2025",
    desc: "Worked on an internal newsletter campaign system for employee communication using ASP.NET Web Forms and SQL Server. Integrated Google BigQuery to fetch filtered employee data based on region, department, and course completion. Developed a robust admin panel to manage email templates and campaign workflows. Implemented functionality to send emails with unique tracking IDs and monitor their status in real time. Enabled reply tracking and developed a system for responding directly through the platform. Designed an efficient database schema to handle campaign states like Draft, Sent, and Replied. Automated email lifecycle events through CRON jobs and added notification alerts for admin actions. Worked closely with the UI team to build responsive designs using HTML, CSS, JavaScript, and Bootstrap. Collaborated in an Agile environment to deploy new features and improve system performance.",
    skills: [
      "ReactJS",
      "Redux",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    id: 2,
    img: spine,
    role: "Software Support Engineer",
    company: "Spine Technologies India Pvt. Ltd",
    date: "Oct 2022 – Aug 2024",
    desc: "Provided software support and technical assistance for enterprise-level payroll and HRMS applications. Wrote and optimized complex SQL queries to support data-driven features and generate detailed reports. Ensured the proper functioning of backend workflows and frontend templates built with HTML, CSS, and JavaScript. Configured and maintained IIS Server for deploying .NET-based web applications and troubleshooting issues. Resolved user-reported bugs by performing system diagnostics, code fixes, and patch rollouts. Collaborated with cross-functional teams to document standard operating procedures and update software documentation. Monitored server uptime and performance to reduce system downtime and improve reliability. Delivered voice/email-based client support to resolve technical issues related to software and servers. Played a key role in testing, validating, and rolling out software updates and patches securely.",
    skills: [
      "SQL Server",
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "IIS",
      "Troubleshooting",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: college,
    school: "Shailendra Education Society, Mumbai",
    date: "Sept 2022 - July 2024",
    grade: "7.77 CGPA",
    desc: "Completed M.Sc. IT from Shailendra Education Society (Mumbai University), studying Cyber Forensics, Deep Learning, Blockchain, Machine Learning, Cloud Computing, Big Data Analytics, and other advanced IT subjects. The four-semester program combined theory, practicals, and project work, building strong technical expertise.",
    degree: "Master of Science in Information Technology - M.Sc.IT",
  },
  {
    id: 1,
    img: college,
    school: "Shailendra Education Society, Mumbai",
    date: "Sept 2017 - Aug 2020",
    grade: "7.12 CGPA",
    desc: "Completed B.Sc. IT from Shailendra Education Society, covering subjects such as Programming, Data Structures, Databases, Core Java, AI, Advanced Web Programming, Enterprise Java, Business Intelligence, Cyber Laws, and Security in Computing. The six-semester program blended theory, practicals, and projects, building a strong foundation in software development and computing.",
    degree: "Bachelor of Science in Information Technology - B.Sc.IT",
  },
  {
    id: 2,
    img: school,
    school: "Mtruchhaya College of Commerce and Science, Mumbai",
    date: "Apr 2015 - March 2017",
    grade: "69.23%",
    desc: "Completed Class 12 (HSC – IT with Commerce, Maharashtra Board) from Mtruchhaya College of Commerce and Science, with a focus on Mathematics and Information Technology.",
    degree: "HSC(XII) - SYJC with IT Commerce",
  },
  {
    id: 3,
    img: school,
    school: "Swami Vivekanand School",
    date: "Apr 2014 - March 2015",
    grade: "73.20%",
    desc: "Completed Class 10 (SSC, Maharashtra Board) from Swami Vivekanand School with 73.20%, focusing on Science and Computer studies.",
    degree: "SSC(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Training Newsletter System",
    description: "Internal training email campaign system using ASP.NET Web Forms and SQL Server. Included filters, BigQuery integration, status tracking, and CRON automation.",
    // image: githubdetLogo,
    tags: ["ASP.NET Web Forms", "SQL Server", "C#", "BigQuery", "CRON", "HTML", "CSS"],
    // github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
    webapp: "https://githubprofiledetective.netlify.app/",
  },
  {
    id: 1,
    title: "Driver Sleep Detection System",
    description:
      "Arduino-based hardware project to detect drowsiness and shut engine after 2+ seconds of no response using Eye Blink Sensor.",
    image: csprepLogo,
    tags: ["Arduino", "Eye Blink Sensor", "Relay", "Motor", "Buzzer"],
    // github: "https://github.com/codingmastr/CSPrep",
    webapp: "https://csprep.netlify.app/",
  },
  {
    id: 2,
    title: "Online Doctor Appointment System",
    description:
      "Web-based app for managing doctor-patient appointments using ASP.NET Web Forms and SQL Server.",
    image: movierecLogo,
    tags: ["ASP.NET Web Forms", "SQL Server", "HTML", "CSS", "JavaScript"],
    // github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 3,
    title: "TCP Client-Server Communication",
    description:
      "Built in .NET Console using C# with support for encryption, dynamic IP/port config, and multiple connections.",
    //image: npmLogo,
    tags: [".NET", "C#", "Socket Programming", "Encryption"],
    //  github: "https://github.com/codingmastr/cmtk-email-validator",
    webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Hotel Management System",
    description:
      "Desktop-based Java Swing application to manage hotel room bookings, customers, staff with MySQL backend.",
    image: taskremLogo,
    tags: ["Java", "Swing", "AWT", "MySQL"],
    //  github: "https://github.com/codingmastr/Task-Reminder-Tool",
    webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Snake Game (Java)",
    description:
      "Classic snake game built using Java Swing with scoring, collision detection, and executable JAR packaging.",
    image: webverLogo,
    tags: ["Java", "Swing", "AWT"],
    // github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Coding Master",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    //github: "https://codingmasterweb.in/",
    webapp: "https://codingmasterweb.in/",
  },
  {
    id: 7,
    title: "Image Search App",
    description:
      "Image Search App is a responsive web application built using HTML, CSS, and JavaScript. It allows users to search for high-quality images in real time using the Unsplash API.Users can enter a keyword to view related images and click “Show More” to load additional results.The app is simple, fast, and deployed online via GitHub Pages.",
    image: imagesearchLogo,
    tags: ["HTML", "API", "Search Feature", "CSS", "Javascript"],
    github: "https://github.com/AIP00ja/Image-Search-App.git",
    webapp: "https://aip00ja.github.io/Image-Search-App/",
  },
  {
    id: 8,
    title: "Image Background Remover",
    description:
      "Image Background Remover is a responsive web application built using HTML, CSS, and JavaScript with API integration. Users can easily upload any image, remove its background automatically, and download the resulting transparent image for personal or professional use. The app features a clean UI with a galaxy-themed animated background for an engaging user experience.",
    image: removebgLogo,
    tags: ["HTML", "CSS", "JavaScript", "API Integration", "Image Processing", "Web App"],
    github: "https://github.com/AIP00ja/ImageBackgroundRemover.git",
    webapp: "https://aip00ja.github.io/ImageBackgroundRemover/",
  }
];  