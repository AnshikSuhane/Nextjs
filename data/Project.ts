import { StaticImageData } from "next/image";
import RealState from "@/public/RealEstate.png";
import ecommerce from "@/public/ecommerce.png";
import portfolio from "@/public/Portfolio.png";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  liveUrl?: string;
  image: string | StaticImageData;
  code: string;
  tags: string[];
  delay?: number;
}

interface Testimonial {
  name: string;
  role: string;
  image: string;
  content: string;
}

interface SkillSet {
  name: string;
  img: string;
  borderColor: string;
  delay?: number;
}

export const featuredProjects: Project[] = [
  {
    title: "Real Estate Management ",
    description:
      "A full-stack RealEstate solution with payment integration and admin dashboard.",
    longDescription:
      "This comprehensive e-commerce platform features user authentication, product catalog with filtering and search, shopping cart functionality, secure checkout with Stripe integration, order management, and an admin dashboard for inventory control.",
    image: RealState,
    liveUrl: "https://thriving-dodol-5e0eb7.netlify.app/",
    code: "https://github.com/AnshikSuhane/RealEstate.git",
    tags: ["React", "Clerk"],
  },
  {
    title: "ShopHub – Full-Stack E-commerce Platform",
    description:
      "A robust e-commerce web application with secure authentication and payment integration.",
    longDescription:
      "ShopHub is a full-featured e-commerce platform that includes user authentication, dynamic product listings with search and filters, a shopping cart with real-time updates, secure checkout with integrated payment gateway, and an admin dashboard for managing inventory, orders, and users.",
    image: ecommerce,
    liveUrl: "https://thriving-dodol-5e0eb7.netlify.app/",
    code: "https://github.com/AnshikSuhane/RealEstate.git",
    tags: ["React", "shadcnUi"],
  },

  {
    title: "Portfolio Website",
    description:
      "A modern portfolio site built with Next.js and Framer Motion animations.",
    longDescription:
      "This portfolio website showcases professional work with smooth animations and transitions. Features include project galleries, skill visualization, contact forms, and responsive design for all devices.",
    liveUrl: "https://final-portfolio-anshik.netlify.app",
    code: "https://github.com/AnshikSuhane/AnshikSuhane.git",
    image: portfolio,
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
];

export const skillSet: SkillSet[] = [
  {
    name: "HTML",
    img: "https://cdn-icons-png.flaticon.com/256/174/174854.png",
    borderColor: "rgb(255, 87, 34)",
    delay: 0.1,
  },
  {
    name: "CSS",
    img: "https:87//cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png",
    borderColor: "rgb(33, 150, 243)",
    delay: 0.15,
  },
  {
    name: "JavaScript",
    img: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png",
    borderColor: "rgb(255, 193, 7)",
    delay: 0.2,
  },
  {
    name: "React JS",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp&w=256",
    borderColor: "rgb(76, 175, 80)",
    delay: 0.25,
  },
  {
    name: "Redux",
    img: "https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png",
    borderColor: "rgb(244, 67, 54)",
    delay: 0.3,
  },
  {
    name: "Tailwind CSS",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-tailwindcss-3521829-2945278.png",
    borderColor: "rgb(56, 189, 248)",
    delay: 0.32,
  },
  {
    name: "Chakra UI",
    img: "https://img.icons8.com/?size=512&id=r9QJ0VFFrn7T&format=png",
    borderColor: "rgb(103, 58, 183)",
    delay: 0.35,
  },
  {
    name: "Mongo DB",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png",
    borderColor: "rgb(76, 175, 80)",
    delay: 0.46,
  },
  {
    name: "TypeScript",
    img: "https://cdn-icons-png.flaticon.com/512/919/919832.png",
    borderColor: "rgb(0, 122, 204)",
    delay: 0.4,
  },

  {
    name: "Next JS",
    img: "https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format%2Ccompress&fit=max&w=3840",
    borderColor: "rgb(75, 192, 192)",
    delay: 0.55,
  },
];

export const tools: SkillSet[] = [
  {
    name: "VS Code",
    img: "https://code.visualstudio.com/assets/images/code-stable.png",
    borderColor: "rgb(63, 81, 181)",
    delay: 0.1,
  },
  {
    name: "GitHub",
    img: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    borderColor: "rgb(33, 150, 243)",
    delay: 0.4,
  },
  {
    name: "Netlify",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-netlify-3628945-3029193.png",
    borderColor: "rgb(0, 200, 83)",
    delay: 0.2,
  },
  {
    name: "Postman",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png",
    borderColor: "rgb(255, 87, 34)",
    delay: 0.2,
  },
  {
    name: "Firebase",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
    borderColor: "rgb(255, 193, 7)",
    delay: 0.15,
  },
  {
    name: "MySQL",
    img: "https://cdn.iconscout.com/icon/free/png-256/free-mysql-3521596-2945040.png",
    borderColor: "rgb(0, 121, 191)",
    delay: 0.25,
  },
  {
    name: "Slack",
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968871.png",
    borderColor: "rgb(74, 20, 140)",
    delay: 0.5,
  },
  {
    name: "Material UI",
    img: "https://tse1.mm.bing.net/th?id=OIP.aCK3HUSs4N8YGw_9x7vWQAAAAA&pid=Api&P=0&h=220",
    borderColor: "rgb(63, 81, 181)",
    delay: 0.35,
  },
  {
    name: "Shadcn UI",
    img: "https://raw.githubusercontent.com/radix-vue/shadcn-vue/dev/apps/www/src/public/android-chrome-192x192.png",
    borderColor: "rgb(63, 81, 181)",
    delay: 0.45,
  },
];
