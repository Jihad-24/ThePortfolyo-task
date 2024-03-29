import useUserData from "../../Hook/useUserData";

const Contact = () => {
  const userData = useUserData();
  //   console.log(userData?.about);
  const setData = userData?.about;
  //   console.log(setData?.alternateAvatars[0]?.url);

  return (
    <section className="contact" id="contact">
      <h1 className="heading" data-aos="fade-up">
        {" "}
        <span>contact me</span>{" "}
      </h1>
      <form id="contact-form" action method="post">
        <div className="flex flex-col md:flex-row w-full gap-6 ">
          <div className="w-full" data-aos="fade-right">
            <h1 className="text-2xl text-left ml-10 text-green-600">
              YOUR FULL NAME *
            </h1>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full p-[1.4rem] text-[2rem] border-2 rounded-full border-green-500 my-[1rem]"
              required
            />
          </div>
          <div className="w-full" data-aos="fade-left">
            <h1 className="text-2xl text-left ml-10 text-green-600">
              YOUR EMAIL ADDRESS *
            </h1>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-[1.4rem] text-[2rem] border-2 rounded-full border-green-500 my-[1rem]"
              required
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full gap-6 my-3">
          <div className="w-full" data-aos="fade-right">
            <h1 className="text-2xl text-left ml-10 text-green-600">
              YOUR FULL NUMBER *
            </h1>
            <input
              type="number"
              id="number"
              name="number"
              placeholder="Enter your number"
              className="w-full p-[1.4rem] text-[2rem] border-2 rounded-full border-green-500 my-[1rem]"
              required
            />
          </div>
          <div className="w-full" data-aos="fade-left">
            <h1 className="text-2xl text-left ml-10 text-green-600">
              YOUR ADDRESS *
            </h1>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              className="w-full p-[1.4rem] text-[2rem] border-2 rounded-full border-green-500 my-[1rem]"
              required
            />
          </div>
        </div>
        <div className="">
          <h1 className="text-2xl text-left ml-10 text-green-600">
            YOUR MESSAGE *
          </h1>
        </div>
        <textarea
          data-aos="fade-up"
          id="message"
          name="message"
          className="w-full p-[2rem] text-[2rem] border-2 rounded-[40px] border-green-500 my-[1rem]"
          required
          placeholder="Enter your message"
          cols={30}
          rows={10}
          defaultValue={""}
        />
        <input
          type="submit"
          data-aos="zoom-in"
          defaultValue="send message"
          name="send"
          className="h-20 w-40 md:w-52 origin-bottom transform rounded-full border-2 shadow-2xl border-green-600 text-2xl text-green-500 overflow-hidden hover:bg-green-500 hover:text-white hover:border-green-600 cursor-pointer"
        />
      </form>
      <div className="box-container">
        <div className="box" data-aos="zoom-in">
          <i className="fas fa-phone" />
          <h3>phone</h3>
          <p>{setData?.phoneNumber}</p>
        </div>
        <div className="box" data-aos="zoom-in">
          <i className="fas fa-envelope" />
          <h3>email</h3>
          <p>{setData?.contactEmail}</p>
        </div>
        <div className="box" data-aos="zoom-in">
          <i className="fas fa-map-marker-alt" />
          <h3>address</h3>
          <p>{setData?.address}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
