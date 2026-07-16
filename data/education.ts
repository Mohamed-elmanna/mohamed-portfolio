import type { Education } from "./types";

export const education: Education[] = [
  {
    id: "phd-cairo",
    degree: "Doctor of Philosophy (Ph.D.) in Systems and Biomedical Engineering",
    institution: "Cairo University",
    location: "Egypt",
    period: "Oct 2019 – Present",
    gpa: "3.8/4",
    details:
      "Selected courses: Artificial Intelligence in Biomedical Applications, Optimization, Ultrasonic Tissue Characterization, Advanced Computer-Assisted Diagnosis, Probability & Statistics, Hospital Information Systems.",
  },
  {
    id: "msc-cairo",
    degree: "Master of Science in Systems and Biomedical Engineering",
    institution: "Cairo University",
    location: "Egypt",
    period: "Oct 2011 – Jan 2014",
    gpa: "3.5/4",
    details:
      "Thesis: Computer-Aided Diagnosis System for Digital Mammography. Advisor: Prof. Yasser M. Kadah.",
  },
  {
    id: "bsc-sudan",
    degree: "Bachelor of Science in Biomedical Engineering",
    institution: "Sudan University of Science and Technology",
    location: "Sudan",
    period: "Oct 2004 – Oct 2009",
    gpa: "3.08/4 (Top of Class)",
    details: "Graduation project: Nurse Calling System.",
  },
];
