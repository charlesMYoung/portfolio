import { singleCls } from "@/utils/tailcls";
import Link from "next/link";

const pagesList = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function Home() {
  return (
    <div
      className={singleCls(
        "relative md:static font-SmileySans container mx-auto px-12 h-screen",
        "flex justify-center items-center flex-col text-secondary",
        "lg:flex-row lg:justify-between lg:items-start lg:space-x-12 lg:space-y-0 lg:h-auto"
      )}
    >
      <div className="lg:absolute lg:bottom-7">
        <h1 className="headline-small">I am Charles Maxwell Yang</h1>
        <h2 className="title-small mt-12">Frontend Developer</h2>
        <div className="title-small mt-12">
          <div>current work Blog</div>
        </div>
      </div>
      <div className="lg:absolute right-8">
        {pagesList.map((item) => {
          return (
            <div
              key={item.name}
              className={singleCls(
                "text-primary text-stroke-3",
                "display-xl cursor-pointer  will-change-transform",
                "mt-20 text-center will-change-transform scale-100",
                "-rotate-6 origin-[right center] font-SmileySans",
                "hover:text-secondary hover:text-stroke-3"
              )}
            >
              <Link href={item.path}>{item.name}</Link>
            </div>
          );
        })}
      </div>
      <div className="absolute right-2 bottom-2">{process.env.CASE_NUMBER}</div>
    </div>
  );
}
