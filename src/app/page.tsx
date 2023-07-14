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
        "font-SmileySans container mx-auto px-12 h-screen",
        "flex justify-center items-center flex-col md:flex-row text-secondary"
      )}
    >
      <div className="md:self-end">
        <h1 className="headline-small">I am Charles Maxwell Yang</h1>
        <h2 className="title-small mt-12">Frontend Developer</h2>
        <div className="title-small mt-12">
          <div>current work Blog</div>
        </div>
      </div>
      <div className="">
        {pagesList.map((item) => {
          return (
            <div
              key={item.name}
              className={`text-primary [-webkit-text-stroke: 3px var(--md-sys-color-primary)]
display-xl cursor-pointer  [transform-style: preserve-3d]
mt-20 text-center flex  flex-col justify-center will-change-transform scale-100 -rotate-6 origin-[right center] font-SmileySans
hover:text-transparent  hover:[-webkit-text-stroke: 3px var(--md-sys-color-primary)]`}
            >
              <Link href={item.path}>{item.name}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
