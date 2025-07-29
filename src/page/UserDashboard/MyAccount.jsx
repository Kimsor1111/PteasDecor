import { OrderEntry, PaymentMethod } from "../../components";
import Visa from "./../../assets/Payment/visa.jpg";
import Master from "./../../assets/Payment/master.jpg";
import { Link } from "react-router-dom";
import p from "./../../assets/Product/bedroom/p1.1.jpg";
const MyAccount = () => {
  const OrderProduct = [
    {
      orderid: 2103,
      img: p,
      name: "Double Bed & Dressing",
      status: "In Progress",
      trackingid: 2176413876,
      deliverydate: "23-07-2021",
      price: 123.45,
    },
    {
      orderid: 2103,
      img: p,
      name: "Double Bed & Dressing",
      status: "Succeed",
      trackingid: 2176413876,
      deliverydate: "23-07-2021",
      price: 123.45,
    },
    {
      orderid: 2103,
      img: p,
      name: "Double Bed & Dressing",
      status: "Failed",
      trackingid: 2176413876,
      deliverydate: "23-07-2021",
      price: 123.45,
    },
  ];
  const payment = [
    {
      name: "MasterCard (Default)",
      img: Master,
      number: "2736 3286 8332 2138",
    },
    {
      name: "Visa",
      img: Visa,
      number: "2736 3286 8332 2138",
    },
  ];
  return (
    <>
      <main className="flex flex-col items-center justify-center w-full mt-10 font-oxygen">
        <h1 className="w-[95%] text-[30px] font-bold text-[#2D2D2D]">
          Account Overview
        </h1>
        <p className="w-[95%] text-[16px] text-[#575757] mt-4">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <section className="w-[95%] mt-5">
          <div className="flex items-center justify-between mt-5">
            <h1 className="text-[20px] font-bold text-[#2d2d2d]">
              Order History
            </h1>
            <Link
              to={"TrackOrder"}
              className="hover:underline text-[16px] text-[#575757] cursor-pointer"
            >
              Track An Order
            </Link>
          </div>
          <div className="py-5 bg-[#20263E] mt-5 rounded-t-[11px] grid grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] gap-3 text-white md:text-[14px] text-[10px] font-bold">
            <h1 className="ps-[10px] md:ps-[20px]">Order no</h1>
            <h1 className="w-full">Items</h1>
            <h1 className="w-full">Status</h1>
            <h1 className="w-full">Tracking ID</h1>
            <h1 className="w-full">Delivery Date</h1>
            <h1 className="w-full">Price</h1>
          </div>
          <div className="md:text-[16px] text-[11px]">
            {OrderProduct.map(
              (
                { orderid, img, name, status, trackingid, deliverydate, price },
                index
              ) => (
                <OrderEntry
                  key={index}
                  orderid={orderid}
                  img={img}
                  name={name}
                  status={status}
                  trackingid={trackingid}
                  deliverydate={deliverydate}
                  price={price}
                />
              )
            )}
          </div>
        </section>
        <section className="w-[95%] mt-10">
          <div className="flex items-center justify-between mt-5">
            <h1 className="text-[20px] font-bold text-[#2d2d2d]">
              Billing Methods
            </h1>
            <Link
              to={"PaymentAndBilling"}
              className="hover:underline text-[16px] text-[#575757] cursor-pointer"
            >
              View All
            </Link>
          </div>
          {payment.map(({ name, img, number }, index) => (
            <PaymentMethod key={index} name={name} img={img} number={number} />
          ))}
        </section>
      </main>
    </>
  );
};

export default MyAccount;
