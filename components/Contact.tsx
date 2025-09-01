import Image from "next/image";
import UnderLine from "./SVG/UnderLine";

const Contact = () => {
  return (
    <section className="px-4 pb-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-2 justify-center relative mx-auto">
          <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
          <div className="w-fit mx-auto">
            <p className="text-center text-3xl lg:text-5xl text-white font-semibold font-poppins">
              Contact Us
            </p>
            <UnderLine className={""} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-15 px-[0.5rem] lg:px-[3rem] lg:items-stretch lg:justify-center">
          <div className="w-full lg:w-6/12 flex flex-col gap-6 bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 ">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-400 font-poppins text-sm pb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="bg-gray-900/50 text-gray-300 outline-none border border-gray-600 rounded-lg px-4 py-2 transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/50"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-400 font-poppins text-sm pb-2"
              >
                Email
              </label>
              <input
                type="email" 
                id="email"
                name="email"
                placeholder="your@email.com"
                className="bg-gray-900/50 text-gray-300 outline-none border border-gray-600 rounded-lg px-4 py-2 transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/50"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-400 font-poppins text-sm pb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                className="bg-gray-900/50 text-gray-300 outline-none border border-gray-600 rounded-lg px-4 py-2 transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 resize-none"
              />
            </div>
            <div className="mt-auto">
              <button className="cursor-pointer bg-gradient-to-r from-[#EB0000] to-[#FF00B2] w-full font-semibold font-poppins text-white py-3 rounded-xl transition-transform duration-300 hover:scale-105">
                Send Message
              </button>
            </div>
          </div>

          <div className="w-full hidden lg:block lg:w-6/12 rounded-2xl overflow-hidden border border-red-600">
            <Image
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              height={1000}
              width={1000}
              src={"/contact.png"} 
              alt="An abstract 3D image representing contact and connection"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;