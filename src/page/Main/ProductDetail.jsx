import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ProductItem, reviewUser } from "../../data/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ImagePreview, ProductCard } from "../../components";
import { FeatureProductData } from "../../data/Home";
import Profile from "./../../assets/Blog/profile1.jpg";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import {
  faHeart,
  faMagnifyingGlass,
  faParachuteBox,
  faStar,
  faTruckArrowRight,
} from "@fortawesome/free-solid-svg-icons";
const ProductDetail = () => {
  const { state } = useLocation();
  const productid = state.productid;
  const { name, price, discount, img, stock, rate, category } =
    ProductItem.find((item) => item.id == parseInt(productid));
  const image = img;
  const reviewCount = useRef(Math.round(Math.random() * 100) + 1);
  const [qty, setQty] = useState(1);
  const [showdes, setShowdes] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [reviewinput, setReviewinput] = useState("");
  const [review, setReview] = useState(reviewUser);
  const [imgshow, setImgshow] = useState(image[0]);
  const [heart, setHeart] = useState(false);
  const [preview, setPreview] = useState(false);
  const handleDecrease = () => {
    setQty(qty - 1 <= 0 ? 1 : parseInt(qty - 1));
  };
  const handleIncrease = () => {
    setQty(qty >= stock ? stock : parseInt(qty + 1));
  };
  const handleChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setQty("");
      return;
    }
    const num = parseInt(value);
    if (num <= 0) setQty(1);
    else if (num > stock) setQty(stock);
    else setQty(num);
  };
  const handleBlur = () => {
    if (qty === "") setQty(1);
  };
  const handleInputToState = (nameinput, reviewinput, emailinput) => {
    setReview((review) => [
      ...review,
      {
        img: Profile,
        name: nameinput,
        review: reviewinput,
        email: emailinput,
      },
    ]);
    setName("");
    setEmail("");
    setReviewinput("");
  };
  useEffect(() => {
    setImgshow(img[0]);
  }, [productid]);
  return (
    <>
      <ImagePreview
        imgshow={imgshow}
        preview={preview}
        setPreview={setPreview}
      />
      <main className="w-full mt-10 flex flex-col items-center justify-center font-oxygen selection:bg-transparent">
        <section className="w-[95%] flex flex-col">
          <h1 className="flex md:text-[16px] text-[13px] items-center text-[#414141] gap-2">
            <Link to={"/Products"} className="text-[#7B7B7B]">
              Product Listing
            </Link>
            <p className="font-poppins text-[#7B7B7B] text-lg">&gt;</p>
            {name}
          </h1>
          <article className="w-full mt-5 grid lg:grid-cols-2 lg:gap-6 gap-5">
            <div className="flex lg:flex-row flex-col-reverse gap-5">
              <div className="lg:w-[120px] 2xl:w-[200px] w-full h-fit lg:h-[600px] flex lg:flex-col flex-row justify-between lg:justify-baseline lg:gap-5">
                {image.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    onClick={() => setImgshow(item)}
                    className="rounded-md cursor-pointer lg:w-fit w-[32%] lg:h-1/3 object-cover object-center"
                    alt=""
                  />
                ))}
              </div>
              <div className="w-full lg:[width:calc(100%-140px)] relative group">
                <img
                  src={imgshow}
                  className="lg:h-[600px] 2xl:h-full h-full w-full object-cover object-center rounded-md"
                  alt=""
                />
                {discount > 0 && (
                  <span className="text-white absolute top-3 left-3 rounded bg-black/70 px-3 text-[12px] py-1">
                    -{discount}%
                  </span>
                )}
                <div
                  onClick={() => setPreview(true)}
                  className="bg-black/70 size-[35px] lg:group-hover:flex hidden cursor-pointer items-center justify-center absolute top-3 right-3 text-white  rounded-full"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </div>
              </div>
            </div>
            <div className="lg:px-5 py-3 flex flex-col 2xl:gap-5 gap-3 justify-center">
              <span className="flex flex-row justify-between items-center">
                <h1 className="md:text-[30px] text-[20px] font-bold text-[#2D2D2D]">
                  {name}
                </h1>
                <FontAwesomeIcon
                  className={`${
                    heart ? "text-red-500" : "text-[#AEAEAE]"
                  } text-[20px] cursor-pointer transition-all duration-200`}
                  onClick={() => setHeart(!heart)}
                  icon={faHeart}
                />
              </span>
              <div className="flex items-center gap-3">
                <p className=" border-r-2 md:text-[25px] text-[18px] text-[#414141] pr-3">
                  {discount > 0 && (
                    <del className="pr-2 md:text-lg text-sm text-black/40">
                      ${price.toFixed(2)}
                    </del>
                  )}
                  ${(price * (1 - discount / 100)).toFixed(2)}
                </p>
                <span className="flex gap-1 text-[#A6A6A6] md:text-sm text-[12px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <FontAwesomeIcon
                      key={index}
                      icon={rate > index ? faStar : faStarRegular}
                      className={rate > index ? "text-yellow-400" : ""}
                    />
                  ))}
                </span>
                <p className="md:text-md text-[#414141] text-sm">
                  ({reviewCount.current} review)
                </p>
              </div>
              <hr className="border-[#DDDDDD] my-3" />
              <p className="text-[15px] text-[#414141]">
                Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
                Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
              </p>
              <ul className="list-disc list-inside text-[15px] text-[#414141]">
                <li>Lorem ipsum dolor sit amet, adipi scing elit</li>
                <li>
                  Lorem ipsum dolor sit amet, consectetuer adipi scing elit
                </li>
                <li>Lorem ipsum dolor sit amet, consectetuer adipi </li>
              </ul>
              <div className="w-full h-[50px] flex gap-5 selection:bg-transparent">
                <div className="w-[130px] h-full flex items-center font-bold justify-between rounded-full border border-[#D7D7D7] text-[#414141]">
                  <p
                    onClick={handleDecrease}
                    className="w-1/3 h-full flex items-center justify-center rounded-s-full cursor-pointer"
                  >
                    -
                  </p>
                  <input
                    type="number"
                    value={qty}
                    onChange={(e) => handleChange(e)}
                    onBlur={handleBlur}
                    min={1}
                    max={10}
                    className="w-1/3 border-0 outline-0 text-center h-full flex items-center justify-center no-spinner"
                  />

                  <p
                    onClick={handleIncrease}
                    className="w-1/3 h-full flex items-center justify-center rounded-e-full cursor-pointer"
                  >
                    +
                  </p>
                </div>
                <button className="[width:calc(100%-130px)] font-bold text-[17px] rounded-full  h-full cursor-pointer bg-black text-white flex items-center justify-center">
                  Add to Cart
                </button>
              </div>
              <button className="w-full border rounded-full h-[50px] font-bold text-[17px] cursor-pointer">
                Buy Now
              </button>
              <span className="flex items-center gap-5">
                <FontAwesomeIcon
                  className="text-[#B9B9B9]"
                  icon={faTruckArrowRight}
                />
                <p className="text-[#424242] text-[15px]">
                  Free worldwide shipping on all orders over $100
                </p>
              </span>
              <span className="flex items-center gap-5">
                <FontAwesomeIcon
                  className="text-[#B9B9B9]"
                  icon={faParachuteBox}
                />
                <p className="text-[#424242] text-[15px]">
                  Delivers in: 3-7 Working Days Shipping & Return
                </p>
              </span>
            </div>
          </article>
        </section>

        <section className="bg-[#F8F8F8] mt-16 w-full flex items-center justify-center py-10">
          <div className="w-[95%]">
            <span className="flex gap-4 items-center text-[23px]">
              <h1
                className={`${
                  showdes && "font-bold"
                } text-[#696969] cursor-pointer`}
                onClick={() => setShowdes(true)}
              >
                Description
              </h1>
              |
              <h1
                className={`${
                  !showdes && "font-bold"
                } text-[#696969] cursor-pointer`}
                onClick={() => setShowdes(false)}
              >
                Reviews
              </h1>
            </span>
            {showdes ? (
              <div className="mt-5">
                <h1 className=" text-[#575757] text-[12px] md:text-[15px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum
                  dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                  minim veniam, quis nostrud exercitation ullamco laboris nisi
                  ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
                  amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </h1>
                <ul className="list-disc list-inside md:text-sm text-[12px] text-[#575757] mt-5 leading-[170.5%]">
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </li>
                </ul>
              </div>
            ) : (
              <div className="flex flex-col gap-8 mt-5">
                {review.map(({ img, username, review }, index) => (
                  <div
                    key={index}
                    className="border-2 rounded-2xl border-[#D3D3D3] p-4"
                  >
                    <div className="w-full flex justify-between items-center">
                      <span className="flex items-center gap-3">
                        <img
                          src={img}
                          className="size-[40px] rounded-full"
                          alt=""
                        />
                        <h1 className="text-[#3D3D3D] text-[15px] font-semibold">
                          {username}
                        </h1>
                      </span>
                    </div>
                    <p className="px-[50px] mt-3 text-[#949494] text-[15px]">
                      {review}
                    </p>
                    <div className="flex gap-4 px-[50px] mt-3 text-[#3D3D3D] text-[15px]">
                      <p className="cursor-pointer">Like</p>
                      <p className="cursor-pointer">Reply</p>
                      <p>5m</p>
                    </div>
                  </div>
                ))}
                <div className="flex border-2 rounded-2xl gap-5 border-[#D3D3D3] bg-[#F2F2F2] p-4">
                  <span>
                    <img
                      src={Profile}
                      className="size-[40px] rounded-full"
                      alt=""
                    />
                  </span>
                  <form
                    className="[width:calc(100%-60px)]"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleInputToState(name, reviewinput, email);
                    }}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-3">
                        <label htmlFor="" className="font-exo text-[#3D3D3D]">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          className="border-2 outline-none rounded-3xl px-4 py-2 border-[#919191] text-[#919191]"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="flex flex-col gap-3">
                        <label htmlFor="" className="font-exo text-[#3D3D3D]">
                          Your Email
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="border-2 outline-none rounded-3xl px-4 py-2 border-[#919191] text-[#919191]"
                          placeholder="person@gmail.com"
                        />
                      </div>
                    </div>
                    <textarea
                      rows={8}
                      className="border-2 outline-none mt-5 resize-none w-full rounded-3xl px-4 py-3 border-[#919191] text-[#919191]"
                      required
                      placeholder="Write your review"
                      value={reviewinput}
                      onChange={(e) => setReviewinput(e.target.value)}
                    />
                    <button
                      className="text-white w-fit bg-black px-5 py-3 mt-4 rounded-full active:bg-black/80 cursor-pointer font-exo flex items-center gap-5"
                      type="submit"
                    >
                      Post Review <p className="font-poppins text-xl">&gt;</p>
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="flex mt-24 flex-col w-[95%] bg-white">
          <h1 className="md:text-4xl md:text-start text-center text-[#3D3D3D] text-2xl tracking-wider font-semibold  md:mb-0 mb-3">
            Similar Products
          </h1>
          <div className="grid grid-cols-2 gap-4 mt-10 lg:grid-cols-4">
            {FeatureProductData.map(
              ({ id, name, price, discount, img }, index) => (
                <ProductCard
                  key={index}
                  id={id}
                  name={name}
                  price={price}
                  discount={discount}
                  img={img[0]}
                />
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductDetail;
