import React from "react";

const CustomerRating = ({ img, title, des, subdes }) => {
  return (
    <div className="w-full relative">
      <img
        className="w-full h-[550px] lg:h-[700px] object-cover object-bottom"
        src={img}
        alt=""
      />
      <div className="w-full h-full bg-black/60 absolute top-0 flex items-center justify-center">
        <div className="w-[90%] h-[500px] flex lg:flex-row flex-col items-center justify-center lg:justify-between lg:gap-10 gap-8">
          <div className="lg:w-[40%] w-full lg:items-baseline items-center text-white lg:h-full flex justify-center flex-col gap-5">
            <h1 className="font-oxygen lg:text-start text-center lg:text-[36px] text-[25px] font-[700] ">
              {title}
            </h1>
            <button className="w-fit text-[15px] bg-black/90 hover:bg-black h-fit hidden lg:flex gap-2 px-4 font-semibold font-oxygen py-2 rounded-3xl cursor-pointer">
              Read More <p className="font-poppins pt-[0.8px]">&gt;</p>
            </button>
          </div>
          <div className=" lg:w-[60%] w-full lg:h-full flex gap-5 flex-col justify-center text-white/90 lg:text-start text-center">
            <h1 className="lg:text-lg md:text-sm text-[12px]">{des}</h1>
            <div className="w-full flex gap-5 justify-between lg:text-lg text-[12px]">
              {subdes.map(({ percent, review }, index) => (
                <div key={index} className="w-[45%]">
                  <h1 className="lg:text-4xl text-2xl mb-4">{percent}%</h1>
                  <p>{review}</p>
                </div>
              ))}
            </div>
          </div>
          <button className="w-fit text-[15px] text-white lg:hidden bg-black/90 hover:bg-black h-fit flex gap-2 px-4 font-semibold font-oxygen py-2 rounded-3xl cursor-pointer">
            Read More <p className="font-poppins pt-[0.8px]">&gt;</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerRating;
