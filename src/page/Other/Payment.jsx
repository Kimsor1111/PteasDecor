import { useEffect, useState } from "react";
import {
  InputForm,
  CartDetails,
  SuccessPayment,
  FailedPayment,
} from "../../components";
const Payment = () => {
  const validCard = [
    { name: "John Doe", cardnum: 12345, cvv: 9999 },
    { name: "Dil Doe", cardnum: 12345, cvv: 9999 },
    { name: "Nin Doe", cardnum: 12345, cvv: 9999 },
    { name: "Sor Doe", cardnum: 12345, cvv: 9999 },
  ];
  const isValidCard = (name, cardnum, cvv) => {
    return validCard.some(
      (c) =>
        name === c.name &&
        Number(cardnum) === c.cardnum &&
        Number(cvv) === c.cvv
    );
  };
  const [Name, setName] = useState("");
  const [CardNum, setCardNum] = useState("");
  const [CVV, setCVV] = useState("");
  const [isExpiryValid, setIsExpiryValid] = useState(false);
  const [failed, setFailed] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleExpiryValid = (isValid) => {
    setIsExpiryValid(isValid);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const found = isValidCard(Name, CardNum, CVV);
    if (isExpiryValid) {
      if (found) {
        setSuccess(true);
        setFailed(false);
      } else {
        setFailed(true);
        setSuccess(false);
      }
    }
  };
  useEffect(() => {
    const disableScroll = failed || success;
    if (disableScroll) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "auto";
    }
    return () => (document.documentElement.style.overflowY = "auto");
  }, [success, failed]);
  return (
    <main className="w-full h-full flex flex-col items-center gap-[100px] mt-[100px]">
      <div className="w-[95%] md:w-[90%] flex flex-col lg:flex-row gap-[30px] lg:gap-[50px]">
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
            <InputForm
              label="Name On Card"
              type="text"
              value={Name}
              setValue={setName}
            />
            <InputForm
              label="Card Number"
              type="number"
              value={CardNum}
              setValue={setCardNum}
            />
            <div className="grid grid-cols-2 gap-8">
              <InputForm
                label="Valid Through"
                type="month"
                onValidChange={handleExpiryValid}
              />
              <InputForm
                label="CVV"
                type="number"
                value={CVV}
                setValue={setCVV}
              />
            </div>
            <div className="flex items-center gap-3 text-[16px]">
              <input
                type="checkbox"
                className=" w-5 h-5 accent-[#3D3D3D] hover:cursor-pointer"
              />
              Save As Default Payment Method
            </div>
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
      {success && (
        <>
          <div className="w-screen h-screen bg-black/50 fixed top-0 left-0 z-10"></div>
          <SuccessPayment />
        </>
      )}
      {failed && (
        <>
          <div className="w-screen h-screen bg-black/50 fixed top-0 left-0 z-10"></div>
          <FailedPayment setFailed={setFailed} />
        </>
      )}
    </main>
  );
};

export default Payment;
