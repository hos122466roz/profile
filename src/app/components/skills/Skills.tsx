import img from "../../../../public/img/DSC_1703 (1).jpg";
import Image from "next/image";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";

const Skills = () => {
  return (
    <section className=" w-full sppear container  text-center">
      <h2
        id="Skills"
        className="text-3xl font-bold dark:text-red-700 text-blue-600 my-8 xl:my-28 "
      >
        مهارت ها{" "}
      </h2>
      <div className="w-full xl:my-28 flex items-center flex-col xl:flex-row ">
        <div className="xl:w-[40%] xl:h-[700px] ">
          <Image
            src={img}
            alt="Hosein Roozdard"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-full xl:w-[50%] xl:pl-24 text-right  dark:text-white text-zinc-800">
          <h2 className="mb-12 text-xl my-28 font-bold">مهارت ها </h2>
          <p className="text-lg">
            مهارت های فردی در زمینه فرانت اند و توسعه دهنده سایت
          </p>
          <div className="child:rounded-lg child:overflow-hidden">
            <div className="w-full relative flex py-4 px-6 text-md justify-between mt-12 shadow-lg dark:shadow-white/20 shadow-zinc-800/20">
              <div className="flex space-x-4 ">
                <FaHtml5
                  size={24}
                  className="dark:text-red-700 text-blue-600"
                />
                <h2>HTML5</h2>
              </div>
              <div>95%</div>
              <span className="h-[5px] w-[95%] dark:bg-red-700 bg-blue-600  absolute bottom-0 left-0"></span>
            </div>
            <div className="w-full relative flex py-4 px-6 text-md justify-between mt-12 shadow-lg dark:shadow-white/20 shadow-zinc-800/20">
              <div className="flex space-x-4 ">
                <FaCss3Alt
                  size={24}
                  className="dark:text-red-700 text-blue-600"
                />
                <h2>CSS</h2>
              </div>
              <div>95%</div>
              <span className="h-[5px] w-[95%] dark:bg-red-700 bg-blue-600  absolute bottom-0 left-0"></span>
            </div>
            <div className="w-full relative flex py-4 px-6 text-md justify-between mt-12 shadow-lg dark:shadow-white/20 shadow-zinc-800/20">
              <div className="flex space-x-4 ">
                <IoLogoJavascript
                  size={24}
                  className="dark:text-red-700 text-blue-600"
                />
                <h2> JAVASCRIPT</h2>
              </div>
              <div>85%</div>
              <span className="h-[5px] w-[85%] dark:bg-red-700 bg-blue-600  absolute bottom-0 left-0"></span>
            </div>
            <div className="w-full relative flex py-4 px-6 text-md justify-between mt-12 shadow-lg dark:shadow-white/20 shadow-zinc-800/20">
              <div className="flex space-x-4 ">
                <FaReact
                  size={24}
                  className="dark:text-red-700 text-blue-600"
                />
                <h2> REACT</h2>
              </div>
              <div>70%</div>
              <span className="h-[5px] w-[70%] dark:bg-red-700  bg-blue-600  absolute bottom-0 left-0"></span>
            </div>
            <div className="w-full relative flex py-4 px-6 text-md justify-between mt-12 shadow-lg dark:shadow-white/20 shadow-zinc-800/20">
              <div className="flex space-x-4 ">
                <RiNextjsFill
                  size={24}
                  className="dark:text-red-700 text-blue-600"
                />
                <h2> NEXT</h2>
              </div>
              <div>65%</div>
              <span className="h-[5px] w-[65%] dark:bg-red-700 bg-blue-600  absolute bottom-0 left-0"></span>
            </div>
            <div className="w-full relative flex py-4 px-6 text-md justify-between mt-12 shadow-lg dark:shadow-white/20 shadow-zinc-800/20">
              <div className="flex space-x-4 ">
                <SiTypescript
                  size={24}
                  className="dark:text-red-700 text-blue-600"
                />
                <h2> TYPESCRIPT</h2>
              </div>
              <div>65%</div>
              <span className="h-[5px] w-[65%] dark:bg-red-700 bg-blue-600 absolute bottom-0 left-0"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
