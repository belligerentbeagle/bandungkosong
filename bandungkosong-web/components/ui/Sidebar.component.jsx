/* eslint-disable @next/next/no-html-link-for-pages */

import { useContext } from "react";
import AppContext from "../../store/context";

export default function Sidebar() {
  const links = [
    {
      name: "breakdown",
      icon: (
        <svg
          className="w-6 h-6 transition duration-200 group-hover:text-slate-700"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
          ></path>
          <path
            fill="currentColor"
            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
          ></path>
        </svg>
      ),
    },
    {
      name: "data",
      icon: (
        <svg
          className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-slate-700"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          ></path>
        </svg>
      ),
    },
    {
      name: "dishes",
      icon: (
        <svg
          className="flex-shrink-0 w-6 h-6 transition duration-75 group-hover:text-slate-700"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
          ></path>
          <path
            fill="currentColor"
            d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
          ></path>
        </svg>
      ),
    },
  ];
  const appContext = useContext(AppContext);
  const currentSlug = appContext.currentSlug;
  const updateCurrentSlug = appContext.updateCurrentSlug;

  return (
    <aside className="w-64 h-full">
      <div className="h-full py-4 px-3 bg-slate-50 rounded flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-slate-800">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" height="40" width="40">
                <path
                  fill="currentColor"
                  d="M9.5 28.792q2.458-1.625 5.021-2.459Q17.083 25.5 20 25.5q2.917 0 5.521.854t4.979 2.438q1.667-2.084 2.417-4.23.75-2.145.75-4.562 0-5.75-3.959-9.708Q25.75 6.333 20 6.333t-9.708 3.959Q6.333 14.25 6.333 20q0 2.417.75 4.562.75 2.146 2.417 4.23ZM20 21.583q-2.5 0-4.208-1.708-1.709-1.708-1.709-4.208t1.709-4.209Q17.5 9.75 20 9.75t4.208 1.708q1.709 1.709 1.709 4.209 0 2.5-1.709 4.208Q22.5 21.583 20 21.583Zm0 15.75q-3.583 0-6.75-1.354T7.729 32.25q-2.354-2.375-3.708-5.521T2.667 20q0-3.583 1.375-6.75t3.729-5.5q2.354-2.333 5.5-3.708T20 2.667q3.583 0 6.75 1.375t5.5 3.708q2.333 2.333 3.708 5.5T37.333 20q0 3.583-1.375 6.729t-3.708 5.5q-2.333 2.354-5.5 3.729T20 37.333Z"
                />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold leading-4">
                Constance Lim
              </div>
              <div className="text-xs font-medium leading-4">Astons</div>
            </div>
          </div>
          <hr className="mt-3 mb-5" />
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  onClick={() => updateCurrentSlug(link.name)}
                  className={
                    "cursor-pointer flex items-center p-2 text-base text-slate-700 rounded-lg hover:bg-slate-100" +
                    (currentSlug === link.name
                      ? " relative text-indigo-600 font-medium before:-right-3 before:h-full before:w-1.5 before:bg-indigo-700 before:absolute before:rounded-tl-full before:rounded-bl-full"
                      : "")
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

        <div>
          <hr className="mb-3" />
          <div className="font-mono text-sm leading-5 py-2">
            Developed By
            <br />
            <span>BandungKosong</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
