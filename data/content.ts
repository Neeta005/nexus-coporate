import { SiteContent } from "../types";

export const content: SiteContent = {
  company: {
    name: "Nexus Corporate",
    tagline: "Strategic Solutions for Modern Business",
    email: "contact@nexuscorporate.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Blvd, Tech District, San Francisco, CA 94103",
    social: {
      linkedin: "#",
      twitter: "#",
      facebook: "#",
    },
  },
  navigation: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
  ],
  home: {
    hero: {
      headline: "Elevate Your Business Potential",
      subheadline:
        "We provide world-class strategic consulting and digital transformation services designed to accelerate growth and operational efficiency.",
      ctaText: "Get Started Today",
      heroImage: "https://picsum.photos/1920/1080?grayscale",
    },
    aboutSnippet: {
      title: "Who We Are",
      content:
        "Nexus Corporate is a leading consultancy firm dedicated to helping businesses navigate the complexities of the digital age. With a team of seasoned experts, we deliver tailored strategies that drive measurable results.",
    },
    stats: [
      { label: "Years of Experience", value: "15+" },
      { label: "Projects Delivered", value: "350+" },
      { label: "Client Satisfaction", value: "98%" },
      { label: "Global Partners", value: "40+" },
    ],
  },
  about: {
    title: "About Nexus",
    intro:
      "Founded in 2010, Nexus Corporate has grown from a boutique agency into a global powerhouse in business strategy and digital innovation.",
    mission:
      "To empower organizations with the insights and technology they need to thrive in an ever-evolving marketplace.",
    vision:
      "A world where business operations are seamless, sustainable, and scalable through intelligent design.",
    values: [
      { title: "Integrity", description: "We uphold the highest standards of honesty and transparency in all our dealings." },
      { title: "Innovation", description: "We constantly challenge the status quo to find better, smarter solutions." },
      { title: "Excellence", description: "We are committed to delivering superior quality in every project we undertake." },
    ],
    team: [
      {
        id: "t1",
        name: "Sarah Jenkins",
        role: "CEO & Founder",
        bio: "Sarah brings over 20 years of executive leadership experience in Fortune 500 companies.",
        imageUrl: "https://picsum.photos/400/400?random=10",
      },
      {
        id: "t2",
        name: "David Chen",
        role: "Chief Strategy Officer",
        bio: "An expert in operational efficiency and market expansion strategies.",
        imageUrl: "https://picsum.photos/400/400?random=11",
      },
      {
        id: "t3",
        name: "Elena Rodriguez",
        role: "Head of Digital",
        bio: "Elena leads our digital transformation initiatives with a focus on user-centric design.",
        imageUrl: "https://picsum.photos/400/400?random=12",
      },
    ],
  },
  services: {
    title: "Our Expertise",
    intro: "Comprehensive solutions tailored to your unique business challenges.",
    items: [
      {
        id: "s1",
        title: "Strategic Consulting",
        description: "Data-driven strategies to optimize your business model and market positioning.",
        iconName: "BarChart",
        details: ["Market Analysis", "Competitive Intelligence", "Growth Strategy"],
      },
      {
        id: "s2",
        title: "Digital Transformation",
        description: "Modernizing your legacy systems to improve agility and customer experience.",
        iconName: "Globe",
        details: ["Cloud Migration", "Process Automation", "Digital Workflow"],
      },
      {
        id: "s3",
        title: "Cybersecurity Audit",
        description: "Protecting your most valuable assets with rigorous security protocols.",
        iconName: "Shield",
        details: ["Vulnerability Assessment", "Compliance", "Risk Management"],
      },
      {
        id: "s4",
        title: "Team Augmentation",
        description: "Scaling your workforce with top-tier talent on demand.",
        iconName: "Users",
        details: ["Talent Sourcing", "Onboarding", "Skill Gap Analysis"],
      },
      {
        id: "s5",
        title: "Process Optimization",
        description: "Streamlining operations to reduce waste and increase throughput.",
        iconName: "Zap",
        details: ["Lean Six Sigma", "Workflow Design", "Performance Metrics"],
      },
      {
        id: "s6",
        title: "Corporate Training",
        description: "Upskilling your workforce to meet the demands of tomorrow.",
        iconName: "Briefcase",
        details: ["Leadership Workshops", "Technical Training", "Change Management"],
      },
    ],
  },
  portfolio: {
    title: "Our Work",
    intro: "A showcase of our recent partnerships and successful outcomes.",
    items: [
      {
        id: "p1",
        title: "Global FinTech Expansion",
        category: "Strategy",
        imageUrl: "https://picsum.photos/800/600?random=20",
        description: "Facilitated the entry of a major fintech player into the Southeast Asian market.",
      },
      {
        id: "p2",
        title: "Eco-Friendly Logistics",
        category: "Operations",
        imageUrl: "https://picsum.photos/800/600?random=21",
        description: "Optimized supply chain routes to reduce carbon footprint by 40%.",
      },
      {
        id: "p3",
        title: "Healthcare Digital Portal",
        category: "Development",
        imageUrl: "https://picsum.photos/800/600?random=22",
        description: "Built a secure, patient-first portal for a national healthcare provider.",
      },
      {
        id: "p4",
        title: "Retail Analytics Dashboard",
        category: "Data",
        imageUrl: "https://picsum.photos/800/600?random=23",
        description: "Developed a real-time analytics engine for a retail giant.",
      },
       {
        id: "p5",
        title: "Energy Sector Rebrand",
        category: "Branding",
        imageUrl: "https://picsum.photos/800/600?random=24",
        description: "Complete corporate rebranding for a renewable energy startup.",
      },
      {
        id: "p6",
        title: "Smart City Infrastructure",
        category: "IoT",
        imageUrl: "https://picsum.photos/800/600?random=25",
        description: "Consulted on the IoT implementation for a smart city pilot program.",
      },
    ],
  },
  contact: {
    title: "Get in Touch",
    intro: "Ready to transform your business? Contact us today for a consultation.",
  },
};