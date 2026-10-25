import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faCompass } from "@fortawesome/free-solid-svg-icons";

export default function NotFound() {
  return (
    <section className="page-section flex min-h-[65vh] items-center">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl rounded-3xl border border-gray-200 bg-white px-6 py-14 text-center shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:px-12 sm:py-18">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-2xl text-[#233DFF]">
            <FontAwesomeIcon icon={faCompass} aria-hidden="true" />
          </div>
          <p className="mb-2 text-sm font-bold tracking-[0.16em] text-[#233DFF] uppercase">404 error</p>
          <h1 className="section-title mb-4 text-4xl sm:text-5xl">This page is off the map.</h1>
          <p className="mx-auto mb-8 max-w-md text-base leading-7 text-gray-600">
            The page you are looking for may have moved, been renamed, or no longer exists.
          </p>
          <NavLink to="/" className="main-btn m-0">
            <FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />
            Back to home
          </NavLink>
        </div>
      </div>
    </section>
  );
}
