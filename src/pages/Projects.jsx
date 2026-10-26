import { useMemo, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faXmark,
  faArrowDownWideShort,
  faArrowUpWideShort,
  faFolderOpen,
  faGamepad,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import mobileAppIllustration from "../assets/svg/mobile-app.svg";

const ALL = "All";

/*
  Optional fields read from each project in ../data/projects:
    category     -> "Self", "Side", "Learning" ... (drives the filter chips)
    tags | tech | stack | technologies -> string[] (used for search + tech count)
  If a project has none of these, the page still works: the chips and
  tech stat simply stay hidden.
*/
const asText = (value) => (typeof value === "string" ? value.trim() : "");

const techOf = (project) => {
  for (const key of ["tags", "tech", "stack", "technologies"]) {
    if (Array.isArray(project[key])) {
      return project[key].filter((item) => typeof item === "string");
    }
  }
  return [];
};

const upcoming = [
  {
    icon: faGamepad,
    title: "Web Games",
    text: "Browser games I build for fun, playable straight from this site.",
  },
  {
    icon: faRocket,
    title: "Startups & SaaS",
    text: "Products I've built on my own and with teams, from idea to launch.",
  },
];

const Projects = () => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [newestFirst, setNewestFirst] = useState(true);

  const categories = useMemo(() => {
    const counts = new Map();
    projects.forEach((project) => {
      const name = asText(project.category);
      if (name) counts.set(name, (counts.get(name) || 0) + 1);
    });
    return [...counts.entries()];
  }, []);

  const techCount = useMemo(
    () =>
      new Set(
        projects.flatMap((project) =>
          techOf(project).map((item) => item.toLowerCase())
        )
      ).size,
    []
  );

  const visibleProjects = useMemo(() => {
    const q = query.trim().toLowerCase();

    const matches = projects.filter((project) => {
      if (category !== ALL && asText(project.category) !== category) {
        return false;
      }
      if (!q) return true;

      const haystack = [
        project.title,
        project.name,
        project.description,
        project.category,
        ...techOf(project),
      ]
        .map(asText)
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });

    // Data is stored oldest -> newest, so "latest first" is the reverse
    return newestFirst ? [...matches].reverse() : matches;
  }, [query, category, newestFirst]);

  const isFiltered = query.trim() !== "" || category !== ALL;

  const clearFilters = () => {
    setQuery("");
    setCategory(ALL);
  };

  const stats = [
    { value: projects.length, label: "Projects" },
    categories.length > 1 && { value: categories.length, label: "Categories" },
    techCount > 0 && { value: techCount, label: "Technologies" },
  ].filter(Boolean);

  const chipClass = (active) =>
    `inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233DFF] ${
      active
        ? "border-[#233DFF] bg-[#233DFF] text-white"
        : "border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-950"
    }`;

  return (
    <section id="projects" className="page-section">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* HERO */}
        <div className="relative mb-12 sm:mb-14">
          {/* Faint dot grid that fades out toward the bottom */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-8 -top-10 bottom-0 -z-10"
            style={{
              backgroundImage:
                "radial-gradient(rgba(35,61,255,0.14) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 85%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 85%)",
            }}
          />

          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <h1 className="display-title mb-5">Projects</h1>
              <p className="max-w-xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8">
                A running collection of my self-projects, side projects and
                learning projects. New work is added as it ships.
              </p>
            </div>

            {stats.length > 0 && (
              <div className="flex items-center gap-2 sm:gap-3">
                <img
                  src={mobileAppIllustration}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="hidden h-28 w-20 shrink-0 object-contain lg:block"
                />
                <dl className="grid min-w-0 flex-1 grid-flow-col auto-cols-fr divide-x divide-gray-200 overflow-hidden rounded-2xl border border-gray-200 bg-white/90 shadow-sm backdrop-blur-sm">
                  {stats.map(({ value, label }) => (
                    <div key={label} className="px-4 py-5 sm:px-6 sm:py-6">
                      <dd className="text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl">
                        {value}
                      </dd>
                      <dt className="mt-1 text-sm font-medium text-gray-500">
                        {label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>
        </div>

        {/* TOOLBAR: filter, search, sort */}
        <div className="z-30 -mx-5 mb-6 border-y border-gray-200/70 bg-white/90 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8 md:sticky md:top-18">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Category chips */}
            {categories.length > 1 ? (
              <div
                className="-mx-1 flex gap-2 overflow-x-auto px-1 py-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                role="group"
                aria-label="Filter by category"
              >
                <button
                  type="button"
                  onClick={() => setCategory(ALL)}
                  aria-pressed={category === ALL}
                  className={chipClass(category === ALL)}
                >
                  All
                  <span className="text-xs opacity-70">{projects.length}</span>
                </button>
                {categories.map(([name, count]) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => setCategory(name)}
                    aria-pressed={category === name}
                    className={chipClass(category === name)}
                  >
                    {name}
                    <span className="text-xs opacity-70">{count}</span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-sm font-medium text-gray-500">
                All projects
              </p>
            )}

            <div className="flex items-center gap-2">
              {/* Search */}
              <div className="relative min-w-0 flex-1 lg:w-72 lg:flex-none">
                <label htmlFor="project-search" className="sr-only">
                  Search projects
                </label>
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-sm text-gray-400"
                />
                <input
                  id="project-search"
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search projects"
                  autoComplete="off"
                  className="h-10 w-full rounded-lg border border-gray-200 bg-white pr-9 pl-10 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#233DFF] focus:ring-2 focus:ring-[#233DFF]/20 focus:outline-none [&::-webkit-search-cancel-button]:appearance-none"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery("")}
                    aria-label="Clear search"
                    className="absolute top-1/2 right-1.5 inline-flex size-7 -translate-y-1/2 items-center justify-center rounded-md text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                  >
                    <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
                  </button>
                )}
              </div>

              {/* Sort */}
              <button
                type="button"
                onClick={() => setNewestFirst((prev) => !prev)}
                className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border border-gray-200 bg-white px-3.5 text-sm font-medium text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-50 hover:text-gray-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233DFF]"
                aria-label={`Sorted ${
                  newestFirst ? "latest" : "oldest"
                } first. Change sort order`}
              >
                <FontAwesomeIcon
                  icon={newestFirst ? faArrowDownWideShort : faArrowUpWideShort}
                  aria-hidden="true"
                />
                <span className="hidden sm:inline">
                  {newestFirst ? "Latest first" : "Oldest first"}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* RESULT COUNT */}
        {projects.length > 0 && (
          <p
            className="mb-6 text-sm text-gray-500"
            role="status"
            aria-live="polite"
          >
            {isFiltered
              ? `Showing ${visibleProjects.length} of ${projects.length} projects`
              : `${projects.length} projects`}
          </p>
        )}

        {/* PROJECT GRID */}
        {visibleProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-5 py-16 text-center">
            <FontAwesomeIcon
              icon={isFiltered ? faMagnifyingGlass : faFolderOpen}
              className="mb-4 text-3xl text-gray-300"
              aria-hidden="true"
            />
            <h2 className="mb-2 text-lg font-semibold text-gray-900">
              {isFiltered ? "No projects match your search" : "Nothing here yet"}
            </h2>
            <p className="text-sm text-gray-500">
              {isFiltered
                ? "Try a different keyword or category."
                : "Projects will be available soon."}
            </p>
            {isFiltered && (
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 inline-flex items-center rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#233DFF]"
              >
                Clear filters
              </button>
            )}
          </div>
        )}

        {/* ROADMAP */}
        <div className="mt-16 border-t border-gray-200 pt-10 sm:mt-20 sm:pt-12">
          <h2 className="text-xl font-bold tracking-tight text-gray-950 sm:text-2xl">
            Coming to this site
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-6 text-gray-500">
            Two new sections are planned next.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {upcoming.map(({ icon, title, text }) => (
              <div
                key={title}
                className="flex items-start gap-4 rounded-2xl border border-dashed border-gray-300 bg-gray-50/60 p-5"
              >
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#233DFF]/[0.08] text-lg text-[#233DFF]">
                  <FontAwesomeIcon icon={icon} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="flex flex-wrap items-center gap-2 text-base font-semibold text-gray-950">
                    {title}
                    <span className="rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-xs font-medium text-gray-500">
                      Planned
                    </span>
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-gray-600">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;