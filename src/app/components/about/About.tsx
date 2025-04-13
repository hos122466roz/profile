import Image from "next/image";
import img from "../../../../public/img/DSC_16883.jpg";
const About = () => {
  return (
    <section className="sppear container   text-center ">
      <h2
        id="About-me"
        className="text-3xl font-bold dark:text-red-700 text-blue-600 my-28 mt-8  xl:mt-0"
      >
        درباره من
      </h2>
      <div className="w-full  flex items-center flex-col xl:flex-row-reverse">
        <div className="w-auto xl:w-[40%] h-[350px] xl:h-[700px] ">
          <Image
            src={img}
            alt="Hosein Roozdard"
            className=" h-full object-cover"
          />
        </div>
        <div className="w-full xl:w-[50%] xl:pr-24 text-right  dark:text-white text-zinc-800 ">
          <h2 className="mt-12 xl:mt-0 mb-12 text-xl font-bold">حسین روزدار هستم</h2>
          <p className="text-lg text-right">
            کارشناس گیاهپزشکی فارغ تحصیل از دانشگاه دولتی شهرکرد علاقه مند به
            دنیای برنامه نویسی و عاشق یادگیری مباحث روز دینا در حوزه برنامه
            نویسی در زمینه فرانت اند بیش چهار سال یادگیری و گذراندن دوره های
            مختلف در این زمینه
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
