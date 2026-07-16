import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { education } from "@/data/education";

export default function Education() {
  return (
    <Section id="education" maxWidth="4xl" className="bg-white py-24">
      <SectionTitle
        title="Education"
        subtitle="Academic background in biomedical engineering."
      />

      <div className="space-y-6">
        {education.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h3 className="text-xl font-bold text-slate-900">
                {item.degree}
              </h3>

              <span className="text-sm text-slate-500">{item.period}</span>
            </div>

            <p className="mt-2 font-medium text-blue-600">
              {item.institution}, {item.location}
            </p>

            {item.gpa && (
              <p className="mt-1 text-sm text-slate-500">GPA: {item.gpa}</p>
            )}

            {item.details && (
              <p className="mt-4 text-slate-600">{item.details}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
