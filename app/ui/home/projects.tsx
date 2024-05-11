import Link from "next/link";
import ProjectCard from "./projectCard";
import ProjectGrid from "./projectGrid";
import { notoSansMono } from "@/app/fonts";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className={notoSansMono.className}>Projects</h2>
      <ProjectGrid>
        <ProjectCard
          title="CoverDB"
          description="Simple service to track code coverage"
          sourceUrl="https://github.com/raian621/coverdb"
          tech={["react", "go", "sqlite"]}
        />
        <ProjectCard
          title="Transcribro"
          description="Web app for generating transcripts using OpenAI's Whisper AI"
          projectUrl="https://transcribro.com"
          sourceUrl="https://github.com/nomaddevs1/Captioning"
          tech={["react", "python"]}
        />
        <ProjectCard
          title="rand-um"
          description="Random social preview service"
          projectUrl="https://rand-um.com"
          sourceUrl="https://github.com/raian621/rand-um"
          tech={["react", "go"]}
        />
        <ProjectCard
          title="Grocery Price Predictor"
          description="Utilized a variety of machine learning models to predict the price of grocery items"
          projectUrl="https://www.kaggle.com/code/ryanbell62101/walmart-product-price-predictor"
        />
      </ProjectGrid>
      <Link href="/projects">See all</Link>
    </section>
  );
}
