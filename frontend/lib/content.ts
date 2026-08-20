import type {
  Client,
  ProcessStep,
  Profile,
  Project,
  Service,
  Stat,
} from "@/types";

export const profile: Profile = {
  name: "MALTA ",
  role: "COLOMBIA",
  eyebrow: "PORTFOLIO 2026 · Direction & Production",
  tagline:"VIDEO | POST | AV | BROADCAST" ,
  presentedBy: "MALTA",
  email: "dilanviersack@gmail.com",
  phone: "+356 99727079",
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/dylanmoren0?igsh=bzA2dXF4MzZuMTZm" },
      { label: "WhatsApp", href: "https://wa.link/ogknc7" },
  ],
};

export const heroImage = "https://res.cloudinary.com/ujht2bsz/video/upload/v1787253972/copy_70187F36-A565-461B-B47B-B23B25834C01.mov"

export const heroVideoPublicId = "copy_70187F36-A565-461B-B47B-B23B25834C01"




export const aboutImage =
  "https://res.cloudinary.com/ujht2bsz/image/upload/v1787254421/C71CAB1C-3FC6-4596-9677-1786200A74CA.jpg";

export const aboutBio =
  "I am an audivisual media profesional with experiences across production, post-production, broadcast workflows and operational cordination.\n\n" +
    "My profesional background includes working with audivisual content throughout different stages of the production process, from footage collection ande media ingest to post-production coordination, mastering and delivery. \n\n" +
    "I worked alongside production, editing, mastering and sound teams, coordinating audivisual assets and supporting the workflows required to keep projects moving efficiently. \n\n  ";

export const clients: Client[] = [
  { name: "WOM", kind: "campaign" },
  { name: "DR.JUICE", kind: "advertising" },
  { name: "VIDEO", kind: "advertising" },
  { name: "AV", kind: "music video" },
  { name: "FOX TELECOLOMBIA", kind: "video editor " },
];

export const stats: Stat[] = [
  { value: "120+", label: "Projects delivered" },
  { value: "35", label: "Recurring clients" },
  { value: "4", label: "Years of experience" },
];

export const services: Service[] = [
  {
    id: "1",
    number: "01",
    title: "Direction",
    description: "Concept, script and on-set direction",
  },
  {
    id: "2",
    number: "02",
    title: "Production",
    description: "Logistics, locations and crew",
  },
  {
    id: "3",
    number: "03",
    title: "Editing & Color",
    description: "Montage, grading and sound",
  },
  {
    id: "4",
    number: "04",
    title: "AV / TECH",
    description: "Equipment logistics, technical coordination",
  },

];

export const projects: Project[] = [
  {
    id: "1",
    slug: "new-era",
    title: "NEW ERA",
    category: "Advertising",
    client: "DR. JUICE",
    year: 2026,
    imageUrl:
      "https://res.cloudinary.com/ujht2bsz/video/upload/v1787251359/copy_714ED858-DA47-4AAB-A2B7-11484F82E19C.mov",
    videoPublicId: "copy_714ED858-DA47-4AAB-A2B7-11484F82E19C",
  },
  {
    id: "2",
    slug: "manifesto",
    title: "THE ART OF HANDS ",
    category: "Campaign",
    client: "WORD OF MOUTH",
    year: 2026,
    imageUrl: "https://res.cloudinary.com/ujht2bsz/video/upload/v1787251204/1779463379067.mov",
    videoPublicId: "1779463379067",
  },
  {
    id: "3",
    slug: "NEW LIFE",
    title: "NEW LIFE",
    category: "Documentary",
    client: "CONGO FILMS",
    year: 2021,
    imageUrl: "https://res.cloudinary.com/ujht2bsz/video/upload/v1787252624/copy_34AA5F02-079E-46C7-A7F7-7369FBD1D289.mov",
    publicId: "main-sample",
    videoPublicId: "copy_34AA5F02-079E-46C7-A7F7-7369FBD1D289"
  },
  {
    id: "4",
    slug: "desde tus ojos",
    title: "Desde tus ojos",
    category: "Music Video",
    client: "Short series",
    year: 2021,
    imageUrl: "https://res.cloudinary.com/ujht2bsz/video/upload/v1787252733/copy_98A0F5C1-4BD9-4D0D-BC2D-1B190E0608DD.mov",
    videoPublicId: "copy_98A0F5C1-4BD9-4D0D-BC2D-1B190E0608DD"
  },

  {
    id: "5",
    slug: "hidden gen",
    title: "hidden gen",
    category: "vlog",
    client: "Short series",
    year: 2022,
    imageUrl: "https://res.cloudinary.com/ujht2bsz/video/upload/v1787255141/1776670564136.mov",
    videoPublicId: "1776670564136"
  },
  {
    id: "6",
    slug: "black pirates",
    title: "Black pirates",
    category: "Comercial",
    client: "Short series",
    year: 2022,
    imageUrl: "https://res.cloudinary.com/ujht2bsz/video/upload/v1787254770/copy_420A496F-2B27-4723-B02B-50DFB84D7B57.mov",
    videoPublicId: "copy_420A496F-2B27-4723-B02B-50DFB84D7B57"
  },

];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Concept",
    description: "We define the story, tone and visual references together with the client.",
  },
  {
    number: "02",
    title: "Pre-production",
    description: "Casting, locations, storyboard and shooting plan.",
  },
  {
    number: "03",
    title: "Shooting",
    description: "On-set direction with a technical and cinematography crew.",
  },
  {
    number: "04",
    title: "Post-production",
    description: "Editing, color, sound and delivery in the required formats.",
  },
];
