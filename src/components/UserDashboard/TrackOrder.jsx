import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TrackOrder = ({ close }) => {
  return (
    <section className="fixed top-0 w-full z-[100] flex items-center justify-center h-screen bg-black/20">
      <div className="lg:w-[1000px] md:w-[750px] w-[95%] py-24 rounded-md flex items-center justify-center bg-white flex-col relative">
        <FontAwesomeIcon
          icon={faX}
          className="absolute cursor-pointer right-5 top-5"
          onClick={close}
        />
        <h1 className="text-[36px] text-[#3D3D3D]">Track Your Order</h1>
        <p className="w-[80%] text-center text-[16px] text-[#949494]">
          Your order has been confirmed & it is on the way. To see Detailed
          status track your order
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-[80%] flex flex-col justify-center gap-5 mt-5 items-center"
        >
          <div className="grid w-full gap-5 mt-3 md:grid-cols-2">
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="font-exo text-[#3D3D3D]">
                Order ID
              </label>
              <input
                type="text"
                required
                className="border-2 outline-none rounded-3xl px-4 py-2 border-[#919191] text-[#919191]"
                placeholder="UWE13ESDS"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="" className="font-exo text-[#3D3D3D]">
                Billing Email
              </label>
              <input
                type="email"
                required
                className="border-2 outline-none rounded-3xl px-4 py-2 border-[#919191] text-[#919191]"
                placeholder="max.luca@gmail.com"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-[#282828] w-fit px-5 rounded-full cursor-pointer active:bg-black/70 py-3"
          >
            Track Your Order
          </button>
        </form>
      </div>
    </section>
  );
};

export default TrackOrder;
