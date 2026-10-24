
export default function ProjectCard({
  title,
  description,
  tech = [],
  liveLink,
  githubLink,
  img,
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* IMAGE */}
      <div className="overflow-hidden border-b border-gray-100 bg-gray-50">
        <img
          src={img}
          alt={`${title} project preview`}
          loading="lazy"
          decoding="async"
          className="h-55 w-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* TECH STACK */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tech.map((tag, idx) => (
            <span
              key={`${tag}-${idx}`}
              className="main-badge font-normal"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900 sm:text-2xl">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mb-6 text-sm leading-7 text-gray-600">
          {description}
        </p>

        {/* BUTTONS */}
        <div className="mt-auto flex flex-wrap gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="main-btn inline-flex items-center gap-2"
              aria-label={`View ${title} live project`}
            >
              Live <span aria-hidden="true">↗</span>
            </a>
          )}

          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="main-btn btn-white inline-flex items-center gap-2"
              aria-label={`View ${title} source code`}
            >
              Code <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

      </div>
    </article>
  );
}
