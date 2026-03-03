import Link from "next/link";

import { FOOTER_DATA, PERSONAL_INFO } from "@/constants";

export const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 shadow-lg p-[15px] border-t border-purple-500/10">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-6xl">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-8 py-8">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px] text-white font-space mb-4">
                {column.title}
              </h3>
              {column.data.map(({ icon: Icon, name, link }) => {
                const isPhone = name.startsWith("+91");
                if (isPhone) {
                  return (
                    <div key={`${column.title}-${name}`} className="relative group flex flex-row items-center my-[8px]">
                      <a
                        href="#contact"
                        className="flex flex-row items-center hover:text-purple-400 transition-colors"
                      >
                        {Icon && <Icon className="text-lg" />}
                        <span className="text-[14px] ml-[6px] text-gray-400 hover:text-purple-300 transition-colors">
                          +91 ******
                        </span>
                      </a>
                      <span className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] bg-purple-600/90 text-white px-2.5 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        Request to get → Contact me
                      </span>
                    </div>
                  );
                }
                return (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-[8px] hover:text-purple-400 transition-colors"
                >
                  {Icon && <Icon className="text-lg" />}
                  <span className="text-[14px] ml-[6px] text-gray-400 hover:text-purple-300 transition-colors">
                    {name}
                  </span>
                </Link>
                );
              })}
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4" />

        <div className="flex flex-col items-center gap-3 mb-6">
          <p className="text-[14px] text-gray-400">
            Website designed and developed by{" "}
            <span className="text-purple-400 font-semibold">{PERSONAL_INFO.name}</span>
          </p>

          <div className="relative group">
            <a
              href="#contact"
              className="text-[14px] text-gray-500 hover:text-purple-400 transition-colors duration-300 cursor-pointer font-mono"
            >
              +91 ******
            </a>
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] bg-purple-600/90 text-white px-3 py-1 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Request to get → Contact me
            </span>
          </div>
        </div>

        <div className="mb-[20px] text-[13px] text-center text-gray-600">
          &copy; 2024 {PERSONAL_INFO.name}. All rights reserved.
        </div>
      </div>
    </div>
  );
};
