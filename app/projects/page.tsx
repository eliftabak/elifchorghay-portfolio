import Projects from "../components/Projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Elif Chorghay &mdash; Web Developer based in Karlsruhe, Germany.',
  description: 'Projects I have built as a web developer.',
}

const ProjectsPage = () => {
  return (
    <section className="contain mt-14">
      <h2 className="text-2xl md:text-4xl mb-8">Some Things I've Built</h2>
      <Projects />
    </section>
  );
}

export default ProjectsPage;