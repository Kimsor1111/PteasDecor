const Contact = () => {
  return (
    <div className="w-full h-full flex justify-center my-[50px] md:my-[100px]">
      <main className="w-[90%] md:w-[80%] h-full rounded-xl border-2 border-black pb-[50px]">
        <h1 className="p-[20px] bg-[#20263E] text-white text-[25px] border-b-2 border-black rounded-t-xl font-oxygen">
          Get In Touch With Us
        </h1>
        <main className="flex flex-col lg:flex-row px-[30px] py-[30px] gap-[30px] w-full">
          <aside className="w-full lg:w-[40%]">
            <div className="pb-[30px]">
              <h1>Phone Number</h1>
              <span className="text-gray-600">001233445566</span>
            </div>
            <div className="py-[30px] border-y-2 border-gray-300">
              <h1>Email Address</h1>
              <span className="text-gray-600">johndoe@example.com</span>
            </div>
            <div className="pt-[30px]">
              <h1>Location</h1>
              <span className="text-gray-600">Phnom Penh</span>
            </div>
          </aside>
          <aside className="w-full lg:w-[60%]">
            <h1 className="text-[22px] font-semibold font-oxygen">Send us a message</h1>
            <h1 className="text-gray-600 w-[80%] py-2">Lorem ipsum dolor sit, amet consectetur adipisicing elitle Lorem ipsum dolor sit Lorem ipsum dolor sit amet.</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 mt-[30px]">
                <input className="rounded-full border-1 border-gray-400 w-full px-4 py-2 focus:outline-1 focus:outline-[#20263E]" type="text" placeholder="Your Name" />
                <input className="rounded-full border-1 border-gray-400 w-full px-4 py-2 focus:outline-1 focus:outline-[#20263E]" type="text" placeholder="Your Email" />
                <input className="rounded-full border-1 border-gray-400 w-full px-4 py-2 focus:outline-1 focus:outline-[#20263E]" type="text" placeholder="Phone Number" />
                <input className="rounded-full border-1 border-gray-400 w-full px-4 py-2 focus:outline-1 focus:outline-[#20263E]" type="text" placeholder="Subject" />
            </div>
            <textarea className="border-2 rounded-xl px-4 py-2 border-gray-300 w-full mt-4 focus:outline-1 focus:outline-[#20263E]" placeholder="Message" name="message" rows={5}></textarea>
            <button className="text-white bg-[#20263E] rounded-full px-3 py-2 md:px-5 md:py-3 md:text-[18px] font-poppins mt-4 hover:cursor-pointer active:bg-gray-700">Send Message</button>
          </aside>
        </main>
      </main>
    </div>
  );
};

export default Contact;
