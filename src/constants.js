// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
//import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
//import firebaseLogo from './assets/tech_logo/firebase.png';
import javaLogo from './assets/tech_logo/java.png';
//import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import VisualStudio from './assets/tech_logo/VisualStudio.png';
import aspnet from './assets/tech_logo/aspnetlogo.png';
//import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
//import postgreLogo from './assets/tech_logo/postgre.png';
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
import githubdetLogo from './assets/work_logo/github_detr.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
//import npmLogo from './assets/work_logo/npm.png';
import home from './assets/work_logo/homeapp.png';
import webverLogo from './assets/work_logo/web_dig.png';
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
      { name: 'Spring boot',logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
        { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
       { name: 'MongoDB', logo: mongodbLogo },
       { name: 'Asp.Net', logo: aspnet},
      //{ name: 'PostgreSQL', logo: postgreLogo },
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
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Visual Studio', logo: VisualStudio},
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
    desc: "Developed dynamic and scalable web applications using the MERN stack, managing both frontend and backend development. Collaborated with cross-functional teams to build responsive UIs and implement RESTful APIs. Focused on performance optimization and agile development for efficient project delivery.",
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
    desc: "Developed an internal newsletter campaign system for employee communication using ASP.NET Web Forms and SQL Server, integrated with Google BigQuery for dynamic employee filtering.Built a powerful admin panel to manage templates, workflows, and email tracking with real-time status and reply handling.Automated campaign processes with CRON jobs, added admin notifications, and collaborated with the UI team to deliver responsive designs in an Agile environment.",
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
    desc: "Provided software support and technical assistance for enterprise-level payroll and HRMS applications, ensuring smooth backend and frontend operations. Handled SQL optimization, IIS server configuration, and issue resolution through diagnostics, code fixes, and patch rollouts.Collaborated with teams to document procedures, monitor server performance, and deliver reliable client support for software and system issues.",
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
    desc: "Completed M.Sc. IT from Shailendra Education Society (Mumbai University), gaining expertise in Cyber Forensics, AI, Blockchain, Cloud Computing, and Big Data Analytics.",
    degree: "Master of Science in Information Technology - M.Sc.IT",
  },
  {
    id: 1,
    img: college,
    school: "Shailendra Education Society, Mumbai",
    date: "Sept 2017 - Aug 2020",
    grade: "7.12 CGPA",
    desc: "Completed B.Sc. IT from Shailendra Education Society, gaining a strong foundation in programming, databases, Java, C#, Python C, C++, and web development.",
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
    desc: "Completed Class 10 (SSC, Maharashtra Board) from Swami Vivekanand School with 73.20%. Focused on Science and Computer Studies, building a strong academic base.",
    degree: "SSC(X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Training Newsletter System",
    description: "Internal training email campaign system using ASP.NET Web Forms and SQL Server. Included filters, BigQuery integration, status tracking, and CRON automation.",
    image: githubdetLogo,
    tags: ["ASP.NET Web Forms", "SQL Server", "C#", "BigQuery", "CRON", "HTML", "CSS"],
    github: "https://github.com/AIP00ja/NewletterProject.git",
    webapp: "http://NewletterProject.somee.com",
  },
  {
    id: 1,
    title: "Home Appliances",
    description:
      "Arduino-based hardware project to detect drowsiness and shut engine after 2+ seconds of no response using Eye Blink Sensor.",
    image: home,
    tags: ["ASP.NET Web Forms", "html", "css", "javascript", "mssql","c#"],
    // github: "https://github.com/codingmastr/CSPrep",
    webapp: "http://homeappliances.somee.com/",
  },
  {
    id: 2,
    title: "Medical Record Dashboard",
    description:
      "Web-based app for managing doctor-patient appointments using ASP.NET Web Forms and SQL Server.",
    image: home,
    tags: ["ASP.NET core web api", "mysql", "HTML", "CSS", "JavaScript","tailwin","next.js"],
    github: "https://github.com/AIP00ja/MedicalRecordDashboard.git",
    webapp: "https://medical-record-dashboard.vercel.app/",
  },
  {
    id: 3,
    title: "TCP Client-Server Communication",
    description:
      "Built in .NET Console using C# with support for encryption, dynamic IP/port config, and multiple connections.",
    //image: npmLogo,
    tags: [".NET", "C#", "Socket Programming", "Encryption"],
    //  github: "https://github.com/codingmastr/cmtk-email-validator",
    //webapp: "https://www.npmjs.com/package/cmtk-email-validator",
  },
  {
    id: 4,
    title: "Hotel Management System",
    description:
      "Desktop-based Java Swing application to manage hotel room bookings, customers, staff with MySQL backend.",
    image: taskremLogo,
    tags: ["Java", "Swing", "AWT", "MySQL"],
    //  github: "https://github.com/codingmastr/Task-Reminder-Tool",
    //webapp: "chrome://extensions/?id=kngheeibjnnidhfoomkpnbeghackheci",
  },
  {
    id: 5,
    title: "Snake Game (Java)",
    description:
      "Classic snake game built using Java Swing with scoring, collision detection, and executable JAR packaging.",
    image: webverLogo,
    tags: ["Java", "Swing", "AWT"],
    // github: "https://github.com/codingmastr/Webverse-Digital",
   // webapp: "https://webversedigital.com/",
  },
  {
    id: 6,
    title: "Movie House",
    description:
      "Movie House is a React.js-based movie recommendation platform that allows users to explore, search, and filter movies by genre, popularity, and ratings. It uses The Movie Database (TMDb) API to fetch real-time movie data including posters, descriptions, and ratings. The app features an interactive UI with dynamic search functionality, transparent UI elements, and a cinematic background to enhance the user experience.",
    image: movierecLogo,
    tags: ["React JS", "API Integration", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/AIP00ja/Movie-Recommendation.git",
    webapp: "https://movie-house-weld.vercel.app/",
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