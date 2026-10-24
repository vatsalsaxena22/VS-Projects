
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturedProjects from "../components/FeaturedProjects";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* HERO SECTION */}
      <Hero />

      {/* STATS SECTION */}
      <section className="relative">
        <Stats />
      </section>

      {/* FEATURED PROJECTS */}
      <section className="relative">
        <FeaturedProjects />
      </section>
    </div>
  );
}
