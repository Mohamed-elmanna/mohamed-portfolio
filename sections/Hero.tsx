import Image from "next/image";
import Button from "@/components/Button";
import Tag from "@/components/Tag";
import { profile } from "@/data/profile";

const HIGHLIGHT_TAGS = [
  "Deep Learning",
  "Computer Vision",
  "Computer-aided Diagnosis",
  "Digital Pathology",
  "Domain Generalization",
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side */}
          <div>

            <h1 className="mt-4 text-2xl font-bold text-slate-800">
              {"Mohamed Elmanna"}
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-slate-700">
              Medical AI Researcher | Ph.D. Candidate | Lecturer of Biomedical Engineering
            </h2>

            <p className="mt-2 text-slate-500">{profile.location}</p>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Developing trustworthy AI systems for medical imaging using
              deep learning, computer vision, domain generalization,
              and explainable artificial intelligence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/portfolio-assets/Latest CV.pdf" download>
                Download CV
              </Button>

              <Button href="#projects" variant="secondary">
                View Projects
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {HIGHLIGHT_TAGS.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center -mt-90">
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-8 border-white bg-slate-200 shadow-2xl">
              <Image
                src="/portfolio-assets/A professional photo.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="320px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
