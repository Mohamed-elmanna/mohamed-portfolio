import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Graph-Based Hierarchical Multi-Stain CycleGAN (GHMS-CycleGAN)",
    category: "Digital Pathology",
    description:
      "Designed a novel CycleGAN model integrating hierarchical, graph-based, and auxiliary classification losses for stain normalization and image classification in digital pathology.",
    technologies: ["Python", "PyTorch", "TensorFlow", "OpenCV", "Scikit-learn"],
    status: "Published",
    paper: "https://doi.org/10.1007/s10278-026-01854-x",
  },
  {
    id: 2,
    title: "Deep Learning Segmentation and Classification of RBCs",
    category: "Medical Imaging",
    description:
      "Built CNN-based models using a multi-scanner red blood cell dataset (100K+ cells), achieving domain-generalized performance for diagnostic workflows.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Scikit-learn"],
    status: "Research",
    paper:
      "/portfolio-assets/Publication PDFs/Deep Learning Segmentation and Classification of Red Blood Cells.pdf",
  },
  {
    id: 3,
    title: "Computer-Aided Diagnosis System for Digital Mammography",
    category: "Medical AI",
    description:
      "Developed a CAD system for screening mammography to classify suspicious regions as mass or normal, reaching 96% accuracy.",
    technologies: ["MATLAB"],
    status: "Completed",
    paper: "https://doi.org/10.1109/ICCNEEE.2015.7381387",
  },
  {
    id: 4,
    title: "Medical Image Reconstruction",
    category: "Medical Imaging",
    description:
      "Theoretical and practical implementation work on medical image reconstruction for CT, MRI, and Ultrasound modalities.",
    technologies: ["MATLAB"],
    status: "Academic Project",
  },
];
