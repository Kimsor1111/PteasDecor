import { PaymentCard } from "../../components";
import master from "../../assets/Payment/master.jpg";
import visa from "../../assets/Payment/visa.jpg";
import paypal from "../../assets/Payment/paypal.jpg";
const paymentCards = [
  {
    id: 1,
    name: "Dil Doe",
    img: master,
    cardNum: "1234 5678 4321 8765",
    cvv: 999,
    expiry: "November 2028",
    Default: true,
  },
  {
    id: 2,
    name: "Big D",
    img: visa,
    cardNum: "1234 5678 4321 8765",
    cvv: 629,
    expiry: "December 2028",
    Default: false,
  },
  {
    id: 3,
    name: "Lil Bob",
    img: paypal,
    cardNum: "1234 5678 4321 8765",
    cvv: 168,
    expiry: "January 2029",
    Default: false,
  },
];
const PaymentMethodPage = () => {
  return (
    <main className="w-full h-full px-[20px] lg:px-[50px] flex flex-col gap-5 mt-[50px] font-oxygen">
      <h1 className="text-[30px] font-semibold">Payment Methods</h1>
      <span className="font-medium">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam natus
        aliquam, rerum incidunt consectetur Lorem ipsum dolor sit..
      </span>
      <div className="w-full h-full flex flex-col gap-3">
        {paymentCards.map(
          ({ id, name, img, cardNum, cvv, expiry, Default }) => (
            <PaymentCard
              key={id}
              img={img}
              name={name}
              cardNumber={cardNum}
              cvv={cvv}
              expiry={expiry}
              Default={Default}
            />
          )
        )}
      </div>
      <button className="px-[10%] w-fit py-2 md:py-3 rounded-full text-white bg-black hover:bg-black/90 active:bg-black/80 font-exo">
        Add New Card
      </button>
    </main>
  );
};

export default PaymentMethodPage;
