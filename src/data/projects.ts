import { ProjectItem } from '../types';
import lupaiImage from '../imports/lupai.png';
import aurekaImage from '../imports/research-assistant.webp';
import fit4klimaImage from '../imports/fit4klima.png';
import slidesyncImage from '../imports/slidesync.png';
import oralHistoryImage from '../imports/oral-history.png';

export const projects: ProjectItem[] = [
  {
    id: 1,
    title: 'lupai.de',
    description:
      'Developed a customizable chatbot platform designed to answer questions using public information or an organization\'s internal data. Lupai is multilingual, privacy-focused, and generates answers based only on selected sources.',
    role: 'Front-End Development',
    technologies: ['REACT', 'TYPESCRIPT', 'AI', 'CHATBOT', 'UX/UI'],
    category: 'AI Chatbot Platform',
    imageUrl: lupaiImage
  },
  {
    id: 2,
    title: 'aureka.ai',
    description:
      'Built a web application designed to support research and innovation workflows. The platform includes automatic transcription, AI-powered search, user access management, and the flexibility to add custom functionality tailored to specific project needs.',
    role: 'Front-End Development',
    technologies: ['REACT', 'TYPESCRIPT', 'AI SEARCH', 'TRANSCRIPTION', 'USER MANAGEMENT'],
    category: 'AI Research Assistant',
    imageUrl: aurekaImage,
    imagePosition: 'center 18%'
  },
  {
    id: 3,
    title: 'fit4klima.app',
    description:
      'Developed a mobile app that helps users track the carbon emissions they save through sustainable actions and climate-related challenges. Built with React, Capacitor, and Wavetale, the app focuses on making personal environmental impact visible and measurable.',
    role: 'Mobile & Front-End Development',
    technologies: ['REACT', 'CAPACITOR', 'MOBILE APP', 'WAVETALE', 'SUSTAINABILITY'],
    category: 'Carbon Saving Challenge App',
    imageUrl: fit4klimaImage,
    imagePosition: 'center 16%'
  },
  {
    id: 4,
    title: 'SlideSync',
    description:
      'Worked on an enterprise webcast platform for livestream, online, hybrid, and on-site events. SlideSync enables professional multi-camera productions, quick webcam-based livestreams, audience interaction, access protection, and custom designs aligned with corporate identities.',
    role: 'Front-End Development',
    technologies: ['REACT', 'TYPESCRIPT', 'LIVESTREAMING', 'WEBCAST', 'ENTERPRISE PLATFORM'],
    category: 'Enterprise Webcast Platform',
    imageUrl: slidesyncImage
  },
  {
    id: 5,
    title: 'Oral-History.Digital',
    description:
      'Maintained, redesigned, and extended a curation and research platform for audio and video interviews with witnesses of the past. The work included UI/UX improvements, ongoing page maintenance, and the implementation of new features to improve content access, exploration, and usability.',
    role: 'Front-End Development / UI Maintenance',
    technologies: ['REACT', 'UI/UX', 'ACCESSIBILITY', 'DIGITAL ARCHIVE', 'RESEARCH PLATFORM'],
    category: 'Curation & Research Platform',
    imageUrl: oralHistoryImage
  }
];
