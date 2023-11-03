import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
// import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/background-image.png';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
// import testimonialImage from '../images/testimonial.webp';
import {
  About,
  // ContactSection,
  // ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  //SkillGroup,
  Social,
  // TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Portfolio',
  description: "Portfolio Website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  // Contact: 'contact',
  Projects: 'Projects',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  //Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage ,
  name: `I'm Rafey Ahmed.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">A Self taught Full-Stack Developer</strong>, currently working
        on <strong className="text-stone-100">Freelance Projects</strong>, contributing to Open-Source, and looking out for a job in Full-Stack Developer/Backend Developer.   
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training in <strong className="text-stone-100">MMA</strong>,
        watching <strong className="text-stone-100">F1 races</strong>, or exploring / traveling {' '}
        <strong className="text-stone-100">The World</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg"><strong className="text-stone-100">Feel free</strong> to reachout to me for an Interview(syedrafey448@gmail.com) and please guage how my skillset could be valuable for your Org. </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">One Fine day I will go from <strong className="text-stone-100">Looking for Job</strong> to <strong className="text-stone-100">Currently working</strong> to <strong className="text-stone-100">Currently hiring</strong>😃🤞🏻</p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com/file/d/19vepNI_8_rWizTwQSSZj76Z4pziX8614/view?usp=sharing',
      text: 'Resume / CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    /*{
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },*/
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `A freelance backend developer with half a year of experience, with a strong
  proficiency in the MERN Stack. Successfully delivered backend software solutions
  to clients using a tech stack that includes JavaScript, TypeScript, Node.js, Nest.js,
  Postgres, RabbitMQ, and Docker. Proficient in building RESTful microservice
  architectures and eager to adapt and learn new technologies as per the specific
  needs of each company.`,
  aboutItems: [
    {label: 'Location', text: 'Hyderabad, India', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'F1, MMA', Icon: SparklesIcon},
    {label: 'Study', text: 'Osmania University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Looking out for jobs as a Full-Stack Developer/Backend Developer', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */

<p>Javascript, Python, Cpp, Java, C, Django
MongoDB, SQL, MySQL, Hadoop, HIve, HDFS
Linux, Git, GitHub, Docker
AWS, GCP
Languages and Framework :
ML and DL Libraries :
Pytorch, Tensorflow, OpenCV, Pandas, NumPy
NLP Libraries and Visulatation :
Matplotlib, Seaborn, Power Bi, Tableau
Database and Big Data :
Cloud:
Others:</p>
/* export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'German',
        level: 1,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
]; */

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // {
  //   title: 'Project title 1',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage1,
  // },
  // {
  //   title: 'Project title 2',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage2,
  // },
  // {
  //   title: 'Project title 4',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage4,
  // },
  // {
  //   title: 'Project title 5',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage5,
  // },
  {
    title: 'Supply Chain Management',
    description: 'Observer Design Pattern was applied in the development of the supply chain management.',
    url: 'https://github.com/rafey1104/Supply_Chain_Management',
    image: porfolioImage3,
  },
  {
    title: 'Real-time Analytics Dashboard ',
    description: 'Created a real-time analytics dashboard that allows businesses to monitor and visualize key performancemetrics in real-time, enabling data-driven decisionmaking.',
    url: '',
    image: porfolioImage6,
  },
  {
    title: 'Safe Search Detection',
    description: 'Used Google Cloud Vision API which provides safe search detection for explicit content in images returning likelihood scores for each category',
    url: 'https://github.com/rafey1104/Career-Guidance-System-ML',
    image: porfolioImage7,
  },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'Aug 2019 - Aug 2023',
    location: 'Hyderabad, India',
    University: 'Osmania University',
    title: 'Bachelors Of Engineering(IT) - Osmania University',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  // {
  //   date: 'March 2003',
  //   location: 'School of Business',
  //   title: 'What did you study 101',
  //   content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  // },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2023 - Present',
    location: 'Hyderabad, India',
    University: ' ',
    title: 'Freelance Software Developer',
    content: (
      <p>
        Created different microservices as per the project requiremnt for one of the freelance project.
        Currently developing a software solution for a hardware service center.
      </p>
    ),
  },
  {
    date: 'April 2023 - Present',
    location: 'Remote',
    University: '',
    title: 'Open-Source Contributor',
    content: (
      <p>
       I am a part time open source contributor. I have contributed python code in Open source Organizations Like Unify-ivy, Mozilla Firefox. Fixed documentation of the open source projects that i am involved with.
      </p>
    ),
  },
];

// /**
//  * Testimonial section
//  */
// export const testimonial: TestimonialSection = {
//   imageSrc: testimonialImage,
//   testimonials: [
//     {
//       name: 'John Doe',
//       text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
//     },
//     {
//       name: 'Jane Doe',
//       text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
//     },
//     {
//       name: 'Someone else',
//       text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
//       image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
//     },
//   ],
// };

// /**
//  * Contact section
//  */

// export const contact: ContactSection = {
//   headerText: 'Get in touch.',
//   description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
//   items: [
//     {
//       type: ContactType.Email,
//       text: 'reachout@timbaker.me',
//       href: 'mailto:reachout@timbaker.me',
//     },
//     {
//       type: ContactType.Location,
//       text: 'Victoria BC, Canada',
//       href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
//     },
//     {
//       type: ContactType.Instagram,
//       text: '@tbakerx',
//       href: 'https://www.instagram.com/tbakerx/',
//     },
//     {
//       type: ContactType.Github,
//       text: 'tbakerx',
//       href: 'https://github.com/tbakerx',
//     },
//   ],
// };

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/rafey1104'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/17449395/rafe'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/rafey-ahmed-2b958b195/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/Rafey1104'},
];
