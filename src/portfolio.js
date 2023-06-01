/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gidraf Orenja - Portfolio",
  description:
    "I am a passionate software developer and a mentor with over 7 years of experience. I started my career as a self-taught developer, and have I worked in reknown companies like Andela and Co-operative bank just to mention a few. I know the challenges that comes with learning to code on your own. I am committed to helping aspiring developers learn and grow. I believe that, with good guidance everyone has the potential to be a great software developer. I offer one-on-one mentoring. Contact me to learn more",
  og: {
    title: "Gidraf Orenja Portfolio",
    type: "website",
    url: "http://gidraf.com/",
  },
};

//Home Page
const greeting = {
  title: "Gidraf Orenja",
  logo_name: "GidrafOrenja",
  nickname: "Gidraf",
  subTitle:
    "I am a passionate software developer and a mentor with over 7 years of experience. I started my career as a self-taught developer, and have I worked in reknown companies like Andela and Co-operative bank. I know the challenges that comes with learning to code on your own. I am committed to helping aspiring developers learn and grow. I believe that, with good guidance everyone has the potential to be a great software developer. I offer one-on-one mentoring. Contact me to learn more",
  resumeLink:
    "https://docs.google.com/document/d/1JTquXpbkxRS0GW9Ruk_poAKpG7EXs-ukiUkyANBtFxg/edit?usp=sharing",
  portfolio_repository: "https://github.com/Gidraf/masterPortfolio",
  githubProfile: "https://github.com/gidraf",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/gidraf",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/gidraf-orenja-a2287917b/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCs2LyzVqJFD9t6Ql-HinnCQ",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:orenjagidraf@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/gidraforenja",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/gidraf.orenja/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/gidraforenja/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Mobile Development Mentorship",
      fileName: "DataScienceImg",
      skills: [
        "In Mobile Development mentorship, you will learn the top and cutting age technical skills in mobile development that will help secure a job, including:",
        "⚡ Basics of mobile development: Learn the fundamentals of mobile development, such as the different mobile platforms, programming languages, and frameworks.",
        "⚡ Network requests: Learn how to make network requests to fetch data from the internet.",
        "⚡ Websockets: Learn how to use websockets to create real-time applications.",
        "⚡ MVVM: Learn the Model-View-ViewModel design pattern for building clean and maintainable mobile apps.",
        "⚡ Testing: Learn how to write unit tests and integration tests to ensure that your code is reliable.",
        "⚡ Compose and SwiftUI: Learn the latest UI toolkits for building beautiful and performant mobile apps.",
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "material-symbols:android",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "IOS",
          fontAwesomeClassname: "mdi:apple-ios",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "React Native",
          fontAwesomeClassname: "tabler:brand-react-native",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "logos-flutter",
          // fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin-icon",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "Java Android",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
      ],
    },
    {
      title: "Frontend Development Mentorship",
      fileName: "FullStackImg",
      skills: [
        "In our Frontend Development Package, you will learn the top technical skills in frontend development that will help you secure a job, including:",
        "⚡ Basics of frontend development: Learn the fundamentals of web development, such as the different browsers and their rendering engines and their APIs.",
        "⚡ HTML/CSS/Javascript: Learn the basics of HTML/CSS/Javascript, the technology used for web pages.",
        "⚡ React/Angular/Vue/Jquery: Learn React, the popular JavaScript frameworks for building user interfaces.",
        "⚡ Chrome Dev Tools: Learn Angular, a popular JavaScript framework for building single-page applications.",
        "⚡ WebRTC: Learn WebRTC, a technology that allows web browsers to communicate with each other in real time.",
        "⚡ WebSockets: Learn WebSockets, a technology that allows web browsers to communicate with a server in real time.",
        "⚡ Debugging with Chrome DevTools: Learn how to use Chrome DevTools to debug JavaScript code.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Vue",
          fontAwesomeClassname: "simple-icons:vue",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Backend and Devops Mentorship",
      fileName: "CloudInfraImg",
      skills: [
        "In Backend Development mentorship, you will learn the top and cutting-edge technical skills in backend development that will help you secure a job, including:",
        "⚡ Basics of backend development: Learn the fundamentals of backend development, such as the different programming languages, frameworks, and technologies.",
        "⚡ Databases: Learn how to design and implement databases to store and retrieve data.",
        "⚡ APIs: Learn how to create and consume APIs to interact with other systems e.g. Restful API's",
        "⚡ Web services: Learn how to build web services to expose functionality to other applications.",
        "⚡ Microservices: Learn how to build microservices-based architectures to make applications more scalable and resilient.",
        "⚡ DevOps: Learn how to automate the development, deployment, and operations of backend applications.",
        "⚡ Security: Learn how to secure backend applications from attack.",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "In UI/UX Development mentorship, you will learn the top and cutting-edge skills in UI/UX development that will help you secure a job, including:",
        "⚡ User-centered design: Learn how to design products that are centered around the user's needs and wants.",
        "⚡ Information architecture: Learn how to organize and structure information in a way that is easy for users to find and understand.",
        "⚡ Visual design: Learn how to create visually appealing and engaging interfaces.",
        "⚡ Motion design: Learn how to use animation and motion to create a more dynamic and interactive user experience.",
        "⚡ Prototyping: Learn how to create prototypes of your designs to test and iterate on them before you build the final product.",
        "⚡ Testing: Learn how to test your designs with users to ensure that they are easy to use and meet their needs.",
        "⚡ Collaboration: Learn how to collaborate with other designers, developers, and stakeholders to create successful products.",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "KCA University",
      subtitle: "BSC Applied Computing",
      logo_path: "kca.png",
      alt_name: "IIITDM Kurnool",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have also received training on Cloud Computing and Full Stack Development through andela training program.",
      ],
      website_link: "https://www.kcau.ac.ke/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description:
    "I am a self-taught developer who is passionate about learning and sharing knowledge.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Senior Frontend Engineer",
          company: "Co-operative Bank",
          company_url: "https://www.co-opbank.co.ke/",
          logo_path: "co_op.jpeg",
          duration: "Sep 2021 - Present",
          location: "Nairobi Kenya",
          description:
            "Developed high-quality, scalable, and maintainable code using modern frontend technologies such as HTML5, CSS3, JavaScript, and frameworks like React or Angular.Utilized mobile development frameworks such as React Native or Flutter to build native-like mobile applications for iOS and Android platforms, ensuring consistent user experiences and performance.",
          color: "#0879bf",
        },
        {
          title: "Software Developer",
          company: "Tracom Services Ltd",
          company_url: "https://tracom.co.ke/",
          logo_path: "tracom.jpeg",
          duration: "October 2019 - May 2020",
          location: "Nairobi, Kenya",
          description:
            "Utilized back-end technologies such as Java, C#, or Python to develop the business logic and integrations required for seamless operation of the POS systems.Collaborated closely with cross-functional teams including product managers, designers, and quality assurance to gather requirements and translate them into robust and user-friendly POS software applications",
          color: "#9b1578",
        },
        {
          title: "Software Developer",
          company: "Andela",
          company_url: "https://andela.com/",
          logo_path: "andela.jpeg",
          duration: "Oct 2018 - Novemebr 2019",
          location: "Nairobi, Kenya",
          description:
            "Through our efforts, we were able to reduce the company's cost of operations significantly while delivering high-quality software that met our clients' needs. Served as a team captain, leading a group of junior developers in our software development efforts. In this role, I was responsible for ensuring that our team remained focused and motivated, and that our software development projects were completed on time and to the highest standards of quality.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships/Training",
      experiences: [
        {
          title: "Andela Training Program",
          company: "Andela",
          company_url: "andela.com",
          logo_path: "andela.jpeg",
          duration: "May 2022 - Aug 2022",
          location: "San Francisco, USA",
          description:
            "Underwent extensive training on software development and communication, letter on I was added to the apprenticeship program where we built software that was being outsourced by Andela's clients.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Author",
          company: "Andela",
          company_url: "https://andela.com/author/gidraf-orenja/",
          logo_path: "andela.jpeg",
          duration: "June 2019 - April 2020",
          location: "Hyderabad, Telangana",
          description: "Write articles on Andela blogs",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. I have followed best practises and industry standards like writing unit tests and automating the deployment status.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research ppublications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: ",sdfkhgjfsgh=",
      name: "Microservices",
      createdAt: "2023-01-07T16:26:54Z",
      description:
        "How to create a Microservice to send Email with Celery, Python, Flask & Redis using Gmail API.",
      url: "https://medium.com/p/224cc74ac7b3",
    },
    {
      id: "uerwfkjgkjsfj=",
      name: "Build with Termux",
      createdAt: "2020-01-25T16:26:54Z",
      description:
        "Build a simple text-to-speech web app with Python, Flask, and Termux.",
      url: "https://medium.com/p/a51701f1fea0",
    },
    {
      id: "kjfkjsdfjsdkgj=",
      name: "Build with Termux",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Create the simplest Django and React server on your phone",
      url: "https://medium.com/me/stats/post/fd53ea30c5e8",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "gidrafphoto.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Python, Java, Javascript, React, Android, IOS, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Mentorship",
    subtitle:
      "For individual fundamental empowerment, I offer mentoship program with one on one coaching program on Android, Frontend Web, Backend and Devops. Click the link to book a spot",
    link: "mailto:orenjagidraf@gmail.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Nairobi, Kenya",
    avatar_image_path: "address_image.svg",
    location_map_link: "mailto:orenjagidraf@gmail.com",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
