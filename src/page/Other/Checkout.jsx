import { useNavigate } from "react-router-dom";
import { CartDetails, InputForm } from "../../components";
const Checkout = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("Payment");
  };
  return (
    <main className="w-full h-full flex flex-col items-center gap-[100px] mt-[100px]">
      <div className="w-[95%] md:w-[90%] flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[50px]">
        <aside className="w-full lg:w-[60%] h-fit rounded-xl border border-gray-400 flex flex-col pb-5">
          <div className="py-5 bg-[#20263E] rounded-t-[11px] grid grid-cols-3 gap-3 text-white text-[18px] md:text-[20px]">
            <h1 className="w-full text-center">Personal</h1>
            <h1 className="w-full text-center">Billing</h1>
            <h1 className="w-full text-center">Confirmation</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="px-4 py-4 flex flex-col gap-5"
            action="#"
          >
            <div className="grid grid-cols-2 gap-8">
              <InputForm label="First Name" type="text" />
              <InputForm label="Last Name" type="text" />
            </div>
            <div className="grid grid-cols-2 gap-8">
              <InputForm label="Email Address" type="email" />
              <InputForm label="Phone Number" type="number" />
            </div>
            <InputForm label="Town / City" type="text" />
            <InputForm label="Country" type="text" />
            <InputForm label="Postcode / Zip" type="number" />
            <button
              type="submit"
              className="text-white bg-black hover:bg-black/90 active:bg-black/80 rounded-full py-3 px-4 w-fit mt-2 font-exo hover:cursor-pointer"
            >
              Proceed to Next Step
            </button>
          </form>
        </aside>
        <aside className="w-full lg:w-[35%] h-fit rounded-xl flex flex-col">
          <CartDetails />
        </aside>
      </div>
    </main>
  );
};

export default Checkout;
