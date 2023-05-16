/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Gidraf Orenja - Portfolio",
  description:
    "Experienced software engineer, with over 5 years of practical hands-on in various technology industries, including FinTech, E-Commerce, Ride-Hailing Apps, and Bots, I have a proven track record of quickly embedding in client teams, gathering requirements, and designing top-performing applications. ",
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
    "Experienced software engineer, with over 5 years of practical hand-on in various technology industries, including FinTech, E-Commerce, Ride-Hailing Apps, and Bots, I have a proven track record of quickly embedding in client teams, gathering requirements, and designing top-performing applications. ",
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
      title: "Mobile Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Skilled mobile developer for iOS and Android, creating top-notch apps tailored to each platform's unique features.",
        "⚡ Experienced iOS and Android developer, building visually appealing and robust applications for diverse devices using hybrid solution like React Native or Flutter",
        "⚡ Versatile mobile developer excelling in iOS and Android development, delivering seamless cross-platform solutions",
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
      title: "Frontend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing progress web app using gastby, Nextjs and Angular",
        "⚡ Build Frontend Applications with Vue, Jquery and Vanillajs",
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
      title: "Backend and Devops",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
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
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
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
    "I pursuit my passion as a self taught develoepr, along the way I have sharpened my skills through training and working in Andela",
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
          duration: "Oct 2018 - October 2017",
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
    link: "https://tobechangedlater",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Nairobi, Kenya",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://tobechangedlater",
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
