import { createFileRoute } from "@tanstack/react-router";
import { AuroraBackground } from "@/components/fx/AuroraBackground";
import { CustomCursor } from "@/components/fx/CustomCursor";
import { ScrollProgress } from "@/components/fx/ScrollProgress";
import { SmoothScroll } from "@/components/fx/SmoothScroll";
import { PageLoader } from "@/components/fx/PageLoader";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Education } from "@/components/site/Education";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Adnala Praveen — Finance Analyst & Accountant";
const description =
  "MBA (Finance) graduate and accountant specialising in financial analysis, Tally Prime, GST documentation and Excel-driven reporting. View projects, experience and education.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <PageLoader />
      <SmoothScroll />
      <CustomCursor />
      <ScrollProgress />
      <AuroraBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
