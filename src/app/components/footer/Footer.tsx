import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="   text-center dark:bg-zinc-900 bg-blue-950 mt-28 pb-20  border-t border-b-zinc-500">
      <h2
        id="About-me"
        className="text-3xl font-bold text-whiteb py-8  text-white "
      >
        Hossein
      </h2>
      <div className="flex justify-center mt-16 space-x-16  child:text-white  child-hover:text-white/70 child:cursor-pointer">
        <div>
          <FaInstagram size={40} />
        </div>
        <div>
          <FaLinkedin size={40} />
        </div>
        <div>
          <FaGithub size={40} />
        </div>
      </div>
    </footer>
  );
};
export default Footer;
