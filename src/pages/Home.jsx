import Hero from "../components/Hero";
import Stats from "../components/Stats";
import FeaturedProjects from "../components/FeaturedProjects";

const Home = () => {
  return (
    <main className="overflow-hidden">

      {/* HERO SECTION */}
      <Hero />

      {/* STATS SECTION */}
      <section className="position-relative">
        <Stats />
      </section>

      {/* FEATURED PROJECTS */}
      <section className="position-relative">
        <FeaturedProjects />
      </section>

    </main>
  );
};

export default Home;