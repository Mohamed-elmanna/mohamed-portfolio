import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Graph-Based Hierarchical Multi-Stain CycleGAN (GHMS-CycleGAN)",
    category: "Digital Pathology",
    description:
      "Designed a novel CycleGAN model integrating hierarchical, graph-based, and auxiliary classification losses for stain normalization and image classification in digital pathology.",
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Scikit-learn"],
    status: "Part of PhD research, Published",
    paper: "https://doi.org/10.1007/s10278-026-01854-x",
    github:"",
  },
  {
    id: 2,
    title: "Deep Learning Segmentation and Classification of RBCs",
    category: "Digital Pathology",
    description:
      "Built CNN-based models using a multi-scanner red blood cell dataset (100K+ cells), achieving domain-generalized performance for diagnostic workflows.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn"],
    status: "Preprint",
    paper:
      "/portfolio-assets/Publication PDFs/Deep Learning Segmentation and Classification of Red Blood Cells.pdf",
    github:"https://github.com/Mohamed-elmanna/Segmentation-and-Classification-of-Red-Blood-Cells.git",
  },
  {
    id: 3,
    title: "Computer-Aided Diagnosis System for Digital Mammography",
    category: "Medical Imaging",
    description:
      "Developed a CAD system for screening mammography to classify suspicious regions as mass or normal, reaching 96% accuracy.",
    technologies: ["MATLAB"],
    status: "Conference Paper",
    paper: "https://doi.org/10.1109/ICCNEEE.2015.7381387",
    github:"",

  },
  {
    id: 4,
    title: "Medical Image Reconstruction",
    category: "Medical Imaging",
    description:
      "Theoretical and practical implementation work on medical image reconstruction for CT, MRI, and Ultrasound modalities.",
    technologies: ["MATLAB"],
    status: "Academic Projects",
    github:"",
  },
];
