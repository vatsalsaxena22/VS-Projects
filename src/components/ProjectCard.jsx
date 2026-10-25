
export default function ProjectCard({
  title,
  description,
  tech = [],
  liveLink,
  githubLink,
  img,
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-gray-200/90 bg-white shadow-[0_4px_18px_rgba(15,23,42,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#233DFF]/25 hover:shadow-[0_18px_36px_rgba(15,23,42,0.1)]">

      {/* IMAGE */}
      <div className="relative overflow-hidden border-b border-gray-100 bg-gray-50">
        <img
          src={img}
          alt={`${title} project preview`}
          loading="lazy"
          decoding="async"
          className="h-55 w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* TECH STACK */}
        <div className="mb-4 flex flex-wrap gap-2">
          {tech.map((tag, idx) => (
            <span
              key={`${tag}-${idx}`}
              className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[#233DFF]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* TITLE */}
        <h3 className="mb-3 text-xl font-bold leading-snug tracking-tight text-gray-900 sm:text-2xl">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mb-5 text-sm leading-7 text-gray-600">
          {description}
        </p>

        {/* BUTTONS */}
        <div className="mt-auto flex flex-wrap gap-3">
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="main-btn"
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
              className="main-btn btn-white"
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
