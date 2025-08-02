import { useNavigate } from "react-router-dom";
import { CartDetails, InputForm } from "../../components";
const Checkout = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("Payment");
  };
  return (
    <main className="flex flex-col items-center w-full h-full mt-16 font-oxygen">
      <section className="w-[95%] md:w-[90%] flex flex-col-reverse lg:flex-row gap-[30px] lg:gap-[50px]">
        <aside className="w-full lg:w-[60%] h-fit rounded-xl  flex flex-col pb-5">
          <div className="py-5 bg-[#20263E] rounded-t-[11px] grid grid-cols-3 gap-3 font-poppins font-semibold text-white text-[18px] md:text-[20px]">
            <h1 className="w-full text-center">Personal</h1>
            <h1 className="w-full text-center">Billing</h1>
            <h1 className="w-full text-center">Confirmation</h1>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 px-4 py-4 border-2 border-[#DEDFE1]"
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
              className="px-4 py-3 mt-2 text-white bg-black rounded-full hover:bg-black/90 active:bg-black/80 w-fit font-exo hover:cursor-pointer"
            >
              Proceed to Next Step
            </button>
          </form>
        </aside>
        <aside className="w-full lg:w-[35%] h-fit rounded-xl flex flex-col">
          <CartDetails />
        </aside>
      </section>
    </main>
  );
};

export default Checkout;
