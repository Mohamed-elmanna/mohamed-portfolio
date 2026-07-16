import Button from "@/components/Button";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Publications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Mohamed Eltahir Elmanna
        </h1>

        <nav className="hidden md:flex gap-8 font-medium">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-blue-600">
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          href="/portfolio-assets/Latest CV.pdf"
          download
          className="!py-2"
        >
          Download CV
        </Button>
      </div>
    </header>
  );
}
