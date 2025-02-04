import logoImg from "./assets/logo/logo.png";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";

// all services
import { ReactComponent as allServiceIcon1 } from "./assets/svgs/services/App Development.svg";
import { ReactComponent as allServiceIcon2 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as allServiceIcon3 } from "./assets/svgs/services/Machine Learning Solutions.svg";
import { ReactComponent as allServiceIcon4 } from "./assets/svgs/services/Game Development.svg";
import { ReactComponent as allServiceIcon5 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as allServiceIcon6 } from "./assets/svgs/services/Blockchain.svg";

// app development services
import { ReactComponent as appServiceIcon1 } from "./assets/svgs/services/iOS App Development.svg";
import { ReactComponent as appServiceIcon2 } from "./assets/svgs/services/Android.svg";
import { ReactComponent as appServiceIcon3 } from "./assets/svgs/services/Flutter.svg";
import { ReactComponent as appServiceIcon4 } from "./assets/svgs/services/Hybrid App Development.svg";

// web development services
import { ReactComponent as webServiceIcon1 } from "./assets/svgs/services/E-Commerce Development.svg";
import { ReactComponent as webServiceIcon2 } from "./assets/svgs/services/Social Media Websites.svg";
import { ReactComponent as webServiceIcon3 } from "./assets/svgs/services/Web Development.svg";
import { ReactComponent as webServiceIcon4 } from "./assets/svgs/services/UIUX Design.svg";

export { logoImg };

export const companyDetails = {
  phone: "+91-8950122527",
  address: "Chandigarh, India",
  email: "hello@bitwrap.tech",
  linkedin: "",
  instagram: "",
  twitter: "",
};

export const routes = [
  {
    path: "/",
    name: "Home",
    element: <Home />,
  },
  {
    path: "/about-us",
    name: "About Us",
    element: <AboutUs />,
  },
  {
    path: "/services",
    name: "Services",
    element: <Services />,
  },
  {
    path: "/blogs",
    name: "Blogs",
    element: <Blogs />,
  },
  {
    path: "/contact-us",
    name: "Contact Us",
    element: <ContactUs />,
  },
  {
    path: "/blogs/:id",
    name: "Blog Details",
    element: <BlogDetails />,
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    icon: webServiceIcon1,
    description:
      "Transforming your online business with customized e-commerce solutions. Our platforms enhance customer interaction, optimize operations, and accelerate revenue growth.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    icon: webServiceIcon2,
    description:
      "Create dynamic social media websites that captivate and engage users, fostering brand growth and loyalty effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    icon: webServiceIcon3,
    description:
      "Designing high-conversion landing pages that attract attention and drive action. Crafted with tailored designs to showcase your brand’s message and maximize results.",
  },
  {
    id: 4,
    title: "Custom Websites",
    icon: webServiceIcon4,
    description:
      "Building custom websites that are perfectly aligned with your business needs. Our solutions combine creativity and functionality to deliver an exceptional user experience.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    icon: appServiceIcon1,
    description:
      "Our expert developers leverage Swift and Objective-C to craft high-performance, responsive iOS apps. We focus on optimizing speed, efficiency, and user experience.",
  },
  {
    id: 2,
    title: "Android App Development",
    icon: appServiceIcon2,
    description:
      "We design and build custom Android apps that align perfectly with your vision and business goals. Using Java and Kotlin, we ensure your apps are robust and efficient.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    icon: appServiceIcon3,
    description:
      "Flutter enables the creation of apps for both iOS and Android with a single codebase. We overcome Flutter's web app architecture challenges using innovative strategies to ensure high-quality app performance.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    icon: appServiceIcon4,
    description:
      "We specialize in developing hybrid apps that combine the best of both worlds. Our apps offer smooth functionality across iOS and Android devices, providing a unified experience.",
  },
];

// testimonials
export const testimonials = [
  {
    id: 1,
    name: "Samiksha Sharma",
    position: "Operations Manager at EcoFlow Systems",
    img: require("./assets/images/testimonial3.png"),
    desc: "“Bitwrap’s web development services are outstanding. They delivered a responsive and user-friendly site that perfectly captures our brand essence. Excellent work!”",
  },
  {
    id: 2,
    name: "Anubhav J.",
    position: "Marketing Director at PlayForge Studios",
    img: require("./assets/images/testimonial1.png"),
    desc: "“The AI solutions from Bitwrap have been game-changing for our business. Their app development team went above and beyond. Highly recommended!”",
  },
  {
    id: 3,
    name: "Emily T",
    position: "Operations Manager at Health Innovations Group",
    img: require("./assets/images/testimonial2.png"),
    desc: "“Bitwrap’s AI-driven solutions have transformed our operations. Their expertise and consistent support have made them a valuable strategic partner.”",
  },
  {
    id: 4,
    name: "Aarav Kapoor",
    position: "Product Manager at Nexus Tech",
    img: require("./assets/images/testimonial4.jpg"),
    desc: "“Bitwrap’s app development team delivered a seamless, feature-rich application, on time and within our budget. A fantastic experience from start to finish!”",
  },
  {
    id: 5,
    name: "Jessica M",
    position: "COO at Creative Solutions",
    img: require("./assets/images/testimonial5.jpg"),
    desc: "“Bitwrap impressed us with their creativity in app development. They flawlessly turned our vision into reality. Exceptional service all around!”",
  },
];

// all services
export const allServices = [
  {
    id: 1,
    title: "App Development",
    link: "/app-development",
    description:
      "Develop robust, user-friendly mobile apps for iOS and Android platforms that meet your business needs.",
    icon: allServiceIcon1,
    detailHeading:
      "App Development: Powerful Mobile Solutions for Modern Businesses",
    detailContent: `<p>In a mobile-first world, having a well-designed app can set your business apart. At Bitwrap, we specialize in creating custom mobile applications that are user-friendly, feature-rich, and tailored to your specific goals. Our app development services cover everything from concept to deployment:</p>
      <br/>
      <ol>
        <li><b>iOS and Android Apps:</b><br/>Whether you’re targeting iPhone users or Android fans, we develop native apps for both platforms to ensure optimal performance and user experience.</li>
        <br/>
        <li><b>Cross-Platform Solutions:</b> <br/> Need to reach a wider audience with one codebase? We develop cross-platform apps that work seamlessly on both iOS and Android, reducing development time and cost without compromising quality.</li>
        <br/>
        <li><b>Feature Integration:</b><br/>  From in-app purchases to push notifications and social media integration, we ensure your app has all the features it needs to engage users and drive results.</li>
      </ol>
      <br/>
      <br/>
      <p>We’re not just about writing code—we're about building apps that solve real business problems and provide exceptional user experiences.</p>`,
  },
  {
    id: 2,
    title: "Web Development",
    link: "/web-development",
    description:
      "Design and develop responsive, SEO-friendly websites that effectively represent your brand and engage your audience.",
    icon: allServiceIcon2,
    detailHeading: "Web Development: Tailored Websites that Deliver Results",
    detailContent: `<p>At Bitwrap, we build more than just websites—we create digital experiences that are crafted to perform. Whether you're a small business looking to establish an online presence or a larger company needing a full-featured, scalable platform, our web development services are designed to meet your specific needs. Our team of developers, designers, and strategists work together to:</p>
    <br/>
    <ol>
      <li><b>Develop Custom Websites:</b><br/> No cookie-cutter solutions here. We build each site from the ground up, ensuring it aligns with your brand and business goals.</li>
      <br/>
      <li><b>Optimize for Speed and Security:</b> <br/> Performance matters. We ensure your website loads fast and is equipped with the latest security features to protect your data and users.</li>
      <br/>
      <li><b>Ensure Scalability:</b><br/>  As your business grows, your website should too. Our websites are built to handle increased traffic and scale with your success.</li>
    </ol>
    <br/>
    <br/>
    <p>Whether you need an e-commerce platform, a corporate site, or a portfolio, our custom web development services deliver results that enhance your online visibility and user engagement.</p>`,
  },
  {
    id: 3,
    title: "AI Development Solutions",
    description:
      "Harness the power of AI to innovate and automate processes, driving efficiency and intelligent decision-making.",
    icon: allServiceIcon3,
    detailHeading:
      "AI Development Solutions: Empowering Innovation with Artificial Intelligence",
    detailContent: `<p>In the age of artificial intelligence (AI), leveraging AI technologies can revolutionize your business operations. At Bitwrap, we specialize in developing AI solutions that help businesses innovate, automate, and make intelligent decisions. Our AI services include:</p>
    <br/>
    <ol>
      <li><b>Intelligent Automation:</b><br/> Harness the power of AI to streamline workflows, reduce manual effort, and improve operational efficiency through intelligent process automation.</li>
      <br/>
      <li><b>Predictive Insights:</b> <br/> Use advanced AI models to uncover patterns, predict outcomes, and drive data-informed decisions with greater accuracy.</li>
      <br/>
      <li><b>Personalized Experiences:</b><br/> Enhance user engagement and satisfaction by delivering AI-driven personalized experiences tailored to individual needs and preferences.</li>
    </ol>
    <br/>
    <br/>
    <p>Our AI development solutions are designed to transform data into actionable insights, foster innovation, and enable sustainable business growth.</p>`,
  },
  {
    id: 4,
    title: "Game Development",
    description:
      "Creating immersive and engaging gaming experiences through advanced design, development, and technology for various platforms and audiences.",
    icon: allServiceIcon4,
    detailHeading:
      "Game Development: Bringing Your Ideas to Life with Interactive Experiences",
    detailContent: `<p>Whether you're an indie developer with a fresh idea or a large studio looking to expand your portfolio, we offer comprehensive game development services to bring your vision to life. At Bitwrap, we specialize in creating immersive, engaging games for mobile, console, and PC platforms. Our game development services include:</p>
    <br/>
    <ol>
      <li><b>Concept and Story Development:</b><br/>We work with you to develop compelling narratives, unique characters, and engaging gameplay mechanics that keep players coming back.</li>
      <br/>
      <li><b>Multi-Platform Development:</b> <br/> Whether it’s Unity or Unreal Engine, we use the latest tools and technologies to ensure your game runs smoothly on all platforms, including iOS, Android, PC, and consoles.</li>
      <br/>
      <li><b>2D/3D Design and Animation:</b><br/> Our artists and animators create stunning graphics and immersive environments that enhance the gameplay experience.</li>
    </ol>
    <br/>
    <br/>
    <p>From mobile games to AAA titles, we are committed to delivering high-quality games that resonate with players and stand out in the market.</p>`,
  },
  {
    id: 5,
    title: "Custom Software Development",
    description:
      "Build custom software solutions that address your unique business challenges, enhance productivity, and streamline operations.",
    icon: allServiceIcon5,
    detailHeading:
      "Custom Software Development: Tailored Solutions for Your Business",
    detailContent: `<p>At Bitwrap, we offer custom software development services that create tailored solutions to meet your specific business needs. From desktop applications to complex enterprise systems, we build software that helps streamline operations, boost productivity, and drive business success. Our custom software development services include:</p>
    <br/>
    <ol>
      <li><b>Enterprise Solutions:</b><br/>We develop scalable, secure software to automate processes, improve collaboration, and optimize workflows for enterprises of all sizes.</li>
      <br/>
      <li><b>Desktop Applications:</b> <br/> Whether you need a standalone app or an integrated solution, we develop desktop software that enhances functionality and performance.</li>
      <br/>
      <li><b>Cloud-Based Software:</b><br/> We build cloud-based applications that offer flexibility, scalability, and cost-efficiency for businesses looking to embrace digital transformation.</li>
    </ol>
    <br/>
    <br/>
    <p>Our custom software development services empower businesses to enhance operational efficiency and gain a competitive edge in the marketplace.</p>`,
  },
  {
    id: 6,
    title: "Blockchain Development",
    description:
      "Leverage the power of blockchain technology to build decentralized applications, smart contracts, and secure, transparent systems.",
    icon: allServiceIcon6, // You can replace this with an actual icon for blockchain if available
    detailHeading:
      "Blockchain Development: Unlocking the Future with Decentralized Technology",
    detailContent: `<p>Blockchain technology is transforming industries by offering decentralized, secure, and transparent solutions for various applications. At Bitwrap, we specialize in developing blockchain-based solutions that help businesses achieve enhanced security, transparency, and efficiency. Our blockchain services include:</p>
    <br/>
    <ol>
      <li><b>Decentralized Applications (DApps):</b><br/> We design and develop DApps that operate on blockchain networks, offering secure, peer-to-peer solutions without relying on centralized servers.</li>
      <br/>
      <li><b>Smart Contract Development:</b> <br/> Our team creates smart contracts that automate processes, reduce human error, and ensure compliance in a secure, transparent manner.</li>
      <br/>
      <li><b>Blockchain Consulting:</b><br/> We guide businesses through the adoption of blockchain technology, from evaluating potential use cases to selecting the right platform and integrating blockchain solutions into their systems.</li>
    </ol>
    <br/>
    <br/>
    <p>Our blockchain development services empower businesses to stay ahead of the curve, offering innovative solutions that foster trust, security, and operational efficiency.</p>`,
  },
];

// portfolio images (web development)
export const webPortfolio = [
  {
    id: 1,
    img: require("./assets/images/website projects/5ghomes.webp"),
    title: "5g Homes",
  },
  {
    id: 2,
    img: require("./assets/images/website projects/bayut.webp"),
    title: "Bayut",
  },
  {
    id: 3,
    img: require("./assets/images/website projects/cold creekcap.webp"),
    title: "Cold Creekcap",
  },
  {
    id: 4,
    img: require("./assets/images/website projects/emergency music .webp"),
    title: "Emergency Music",
  },
  {
    id: 5,
    img: require("./assets/images/website projects/flatiorn.webp"),
    title: "Flatiorn",
  },
  {
    id: 6,
    img: require("./assets/images/website projects/maven.webp"),
    title: "Maven",
  },
  {
    id: 7,
    img: require("./assets/images/website projects/menissa caterings.webp"),
    title: "Menissa Caterings",
  },
  {
    id: 8,
    img: require("./assets/images/website projects/methodist.webp"),
    title: "Methodist",
  },
  {
    id: 9,
    img: require("./assets/images/website projects/think reality.webp"),
    title: "Think Reality",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: require("./assets/images/app projects/dubai travel guide.webp"),
    title: "Dubai Travel Guide",
  },
  {
    id: 2,
    img: require("./assets/images/app projects/elora hair palour.webp"),
    title: "Elora Hair Palour",
  },
  {
    id: 3,
    img: require("./assets/images/app projects/evans francis.webp"),
    title: "Evans Francis",
  },
  {
    id: 4,
    img: require("./assets/images/app projects/house of deliverence.webp"),
    title: "House of Deliverance",
  },
  {
    id: 5,
    img: require("./assets/images/app projects/mybitsshop.webp"),
    title: "Mybits Shop",
  },
  {
    id: 6,
    img: require("./assets/images/app projects/namaz.webp"),
    title: "Namaz",
  },
  {
    id: 7,
    img: require("./assets/images/app projects/potea.webp"),
    title: "Potea",
  },
  {
    id: 8,
    img: require("./assets/images/app projects/rentop bike and car.webp"),
    title: "Rentop Bike and Car",
  },
];
