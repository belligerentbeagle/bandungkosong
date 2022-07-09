/* eslint-disable @next/next/no-html-link-for-pages */

import { useContext } from "react";
import AppContext from "../../store/context";

export default function Sidebar() {
  const links = [
    {
      name: "breakdown",
      icon: (
        <svg
          className="w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
          <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
        </svg>
      ),
    },
    {
      name: "data",
      icon: (
        <svg
          className="flex-shrink-0 w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
        </svg>
      ),
    },
    {
      name: "dishes",
      icon: (
        <svg
          className="flex-shrink-0 w-6 h-6 text-slate-500 transition duration-75 group-hover:text-slate-900"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
          <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
        </svg>
      ),
    },
  ];
  const appContext = useContext(AppContext);
  const currentSlug = appContext.currentSlug;
  const updateCurrentSlug = appContext.updateCurrentSlug;

  return (
    <aside className="w-64 h-full">
      <div className="h-full py-4 px-3 bg-slate-50 rounded">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <a
                onClick={() => updateCurrentSlug(link.name)}
                className={
                  "cursor-pointer flex items-center p-2 text-base text-slate-900 rounded-lg hover:bg-slate-100" +
                  (currentSlug === link.name ? " underline font-medium" : "")
                }
              >
                {link.icon}
                <span className="ml-3">
                  {link.name[0].toUpperCase() + link.name.substring(1)}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
