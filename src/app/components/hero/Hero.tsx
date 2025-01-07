import Image from "next/image";
import profilePic from "../../../../public/img/DSC_1744.png";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <section className=" flex justify-start xl:justify-between container flex-col lg:flex-row items-center h-auto xl:h-[90vh] mt-10">
      <div className="sppear2  w-[250px] h-[250px] xl:w-[500px] xl:h-[500px] relative flex justify-center items-center ">
        <span className="w-[220px] h-[220px]  xl:w-[450px] xl:h-[450px] absolute  rounded-full  border border-white"></span>
        <Image
          src={profilePic}
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="xl:pl-8 sppear3   mt-16 xl:mt-0">
        <h1 className="text-[30px] xl:text-[70px] dark:text-white text-zinc-800 text-right font-bold   ">
          ،سلام <br />
          من
          <span className="dark:text-red-600 text-blue-600"> حسین روزدار </span>
          هستم
          <br />
          Web Designer
        </h1>
        <div className="flex justify-end mt-16 ">
          <button className="dark:bg-red-700/90 dark:hover:bg-red-700/60 bg-blue-600 font-bold hover:bg-blue-600/60  text-white p-4 rounded-xl ">
            ارتباط با من
          </button>
        </div>
        <div className="flex justify-end mt-16 space-x-16 child:text-zinc-800 dark:child:text-white dark:child-hover:text-white/70 child-hover:text-zinc-800/70 child:cursor-pointer">
          <div>
            <a href="https://www.instagram.com/hosein.rouzdar?igsh=YWIxMjlrbzJidTB2">
              <FaInstagram size={40} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/hosein-roozdar-976293232/">
              <FaLinkedin size={40} />
            </a>
          </div>
          <div>
            <a href="https://github.com/hos122466roz">
              <FaGithub size={40} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
