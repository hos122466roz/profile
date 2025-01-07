const Contact = () => {
  return (
    <section className="sppear container  text-center ">
      <h2
        id="Skills"
        className="text-3xl font-bold dark:text-red-700 text-blue-600 my-28"
      >
        ارتباط با من
      </h2>
      <div className="w-full xl:w-[40%] mx-auto ">
        <form action="">
          <div>
            <input className=" shadow-lg" type="text" placeholder="نام" />
          </div>
          <div>
            <input className=" shadow-lg" type="email" placeholder="ایمیل" />
          </div>
          <div>
            <textarea
              className=" shadow-lg"
               placeholder="متن پیام"
              rows={10}
            ></textarea>
          </div>
          <div className="flex justify-end ">
            <button
              className=" dark:bg-red-700/90 dark:hover:bg-red-700/60 bg-blue-600 font-bold hover:bg-blue-600/60 text-white py-4 px-8 rounded-xl"
              type="submit"
            >
              ارسال
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
export default Contact;
