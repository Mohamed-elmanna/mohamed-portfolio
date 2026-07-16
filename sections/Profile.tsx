import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import Tag from "@/components/Tag";
import { profile } from "@/data/profile";

export default function Profile() {
  return (
    <Section id="about" maxWidth="5xl" className="bg-white py-24">
      <SectionTitle
        title="About Me"
        subtitle="Research, engineering, and teaching experience."
      />

      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
        <p className="text-lg leading-8 text-slate-600">{profile.summary}</p>

        <div className="mt-10">
          <h3 className="text-xl font-bold text-slate-900">
            Research Interests
          </h3>

          <div className="mt-4 flex flex-wrap gap-2">
            {profile.researchInterests.map((item) => (
              <Tag key={item} tone="white">
                {item}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
