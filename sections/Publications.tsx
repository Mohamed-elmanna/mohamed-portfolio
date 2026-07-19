import Section from "@/components/Section";
import SectionTitle from "@/components/SectionTitle";
import { publications } from "@/data/publications";

export default function Publications() {
  return (
    <Section id="publications" maxWidth="6xl" className="bg-slate-50 py-24">
      <SectionTitle
        title="Publications"
        subtitle="Selected peer-reviewed and preprint research papers."
      />

      <div className="space-y-6">
        {publications.map((pub) => (
          <div
            key={pub.id}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {pub.status}
              </span>

              <span className="text-sm text-slate-500">{pub.year}</span>
            </div>

            <h3 className="mt-4 text-2xl font-bold text-slate-900">
              {pub.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500">{pub.authors}</p>

            <p className="mt-3 text-lg text-slate-600">{pub.journal}</p>

            <div className="mt-6 flex flex-wrap gap-6">
              {pub.doi && (
                <a
                  href={pub.doi}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  View DOI →
                </a>
              )}

              {pub.pdf && (
                <a
                  href={pub.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-slate-600 hover:underline"
                >
                  View PDF →
                </a>
              )}
              
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
