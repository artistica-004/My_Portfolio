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
              {column.data.map(({ icon: Icon, name, link }) => (
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
              ))}
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-4" />

        <div className="mb-[20px] text-[14px] text-center text-gray-500">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with
          Next.js, Three.js & Framer Motion.
        </div>
      </div>
    </div>
  );
};
