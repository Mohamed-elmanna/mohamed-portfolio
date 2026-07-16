import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Button from "@/components/Button";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <Section id="contact" maxWidth="4xl" className="bg-slate-900 py-24 text-white">
      <div className="text-center">
        <SectionTitle
          title="Get In Touch"
          subtitle="Open to Machine Learning Engineer, AI Research, and teaching opportunities."
        />

        <div className="mt-10 rounded-3xl bg-slate-800 p-10">
          <p className="text-xl font-semibold">{profile.name}</p>

          <p className="mt-3 text-slate-300">
            Machine Learning Engineer • Medical AI Researcher
          </p>

          <p className="mt-1 text-slate-400">{profile.location}</p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button href={`mailto:${profile.email}`}>Email Me</Button>

            <Button
              href={profile.social.linkedin}
              target="_blank"
              variant="outline-dark"
            >
              LinkedIn
            </Button>

            <Button
              href={profile.social.scholar}
              target="_blank"
              variant="outline-dark"
            >
              Google Scholar
            </Button>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            © 2026 {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </Section>
  );
}
