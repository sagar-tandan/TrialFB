import { MoveLeft, MoveRight, Zap } from "lucide-react";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import spark from "../UserAssets/spark.png";
import { AllContext } from "../../context";
import { collection, doc, getDoc } from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import { db } from "../../Config";

// const products = {
//   id: 1,
//   image: "https://dummyimage.com/200x200/000/fff&text=Product+1",
//   name: "Wireless Headphones",
//   description:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

//   price: 99.99,
//   cover: [
//     "https://dummyimage.com/200x200/000/fff&text=Product+1",
//     "https://dummyimage.com/200x200/000/fff&text=Product+1",
//     "https://dummyimage.com/200x200/000/fff&text=Product+1",
//     "https://dummyimage.com/200x200/000/fff&text=Product+1",
//     "https://dummyimage.com/200x200/000/fff&text=Product+1",
//   ],
//   keyFeatures: [
//     "Wireless Headphones",
//     "Wireless HeadphonesWireless Headphones",
//     "Wireless HeadphonesWireless Headphones",
//     "Master suite with a spa-inspired bathroom and ocean-facing balcony",
//     "Master suite with a spa-inspired bathroom and ocean-facing balcony",
//   ],
// };

const ProductDetailChild = () => {
  const { id } = useParams();

  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { productDetails, setProductDetails } = useContext(AllContext);
  const [dataLoading, setDataLoading] = useState(false);

  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const fetchData = useCallback(async () => {
    setDataLoading(true);
    try {
      const productsRef = doc(db, "products", id);
      const querySnapshot = await getDoc(productsRef);

      const productsData = {
        id: querySnapshot.id,
        name: querySnapshot.data().name,
        price: querySnapshot.data().price,
        allDesc: querySnapshot.data().description,
        description: querySnapshot.data().description,
        profileImg: querySnapshot.data().profileImg,
        coverImg: querySnapshot.data().coverImages,
        keyFeatures: querySnapshot.data().keyFeatures,
        createdAt: querySnapshot.data().createdAt?.toDate(),
        updatedAt: querySnapshot.data().updatedAt?.toDate(),
      };

      console.log(productDetails);
      setProductDetails(productsData);
      setDataLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setDataLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col gap-5 my-10 max-w-screen-2xl mx-auto mt-20">
      {dataLoading ? (
        <div className="w-full flex items-center justify-center">
          <ClipLoader size={35} color={"#fff"} className="mt-10" />
        </div>
      ) : (
        <>
          {/* TITLE */}
          <div className="w-full flex flex-col sm:justify-between sm:flex-row">
            <h1 className="font-semibold text-[24px]">{productDetails.name}</h1>
            <span className="flex md:flex-col justify-start sm:justify-center items-center gap-3 md:gap-0">
              <h1 className="font-medium text-[16px] text-[#999999]">Price</h1>
              <p className="font-semibold text-[20px]">
                Rs. {productDetails.price}
              </p>
            </span>
          </div>

          <div className="w-full border-[2px] border-[#242424] rounded-lg p-4 bg-[#191919]">
            <div className="w-full my-2">
              <Slider ref={sliderRef} {...settings}>
                {productDetails.coverImg?.map((product, index) => (
                  <div key={index} className="px-4">
                    <img
                      className="w-full rounded-md md:h-[400px] h-[250px] sm:h-[350px] object-cover"
                      src={product}
                      alt=""
                    />
                  </div>
                ))}
              </Slider>
            </div>

            <div className="w-full p-2 flex items-center justify-center">
              <div className="p-[6px] bg-[#141414] rounded-full flex justify-between items-center gap-2">
                <span
                  onClick={() => goToPrev()}
                  className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center cursor-pointer hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
                >
                  <MoveLeft />
                </span>

                {productDetails &&
                  productDetails.coverImg &&
                  productDetails.coverImg.length > 0 &&
                  Array.from({ length: productDetails.coverImg.length }).map(
                    (_, index) => (
                      <span
                        key={index}
                        className={`w-[20px] h-[4px] rounded-full ${
                          currentSlide === index
                            ? "bg-purple-500"
                            : "bg-[#242424]"
                        } mx-1`}
                      ></span>
                    )
                  )}

                <span
                  onClick={() => goToNext()}
                  className="w-[36px]  h-[36px] md:w-[40px] md:h-[40px] select-none rounded-full border-[2px] border-[#202020] flex items-center justify-center cursor-pointer hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
                >
                  <MoveRight />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2 border-2 border-[#242424] rounded-md p-4 md:p-8 flex flex-col gap-2 md:h-fit">
              <h1 className="w-full font-semibold text-[20px]">Description</h1>
              <p className="text-[16px] font-medium text-[#999999]">
                {productDetails.allDesc}
              </p>
            </div>

            <div className="w-full md:w-1/2 border-2 border-[#242424] rounded-md p-4 md:p-8 flex flex-col gap-2 md:h-fit">
              <h1 className="w-full font-semibold text-[20px]">Key Features</h1>

              {productDetails.keyFeatures?.map((feature, index) => (
                <span
                  key={index}
                  className="text-[16px]  font-medium text-[#999999] my-1 w-full border-l-2 py-2 px-3 bg-gradient-to-r from-[#191919] to-[#141414] border-[#5931bc] flex items-center gap-3"
                >
                  <Zap className="text-white flex-shrink-0" />
                  <p className="break-words">{feature}</p>
                </span>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="w-full flex lg:flex-row flex-col gap-4 ">
            <div className="flex flex-col w-full md:max-w-lg">
              <div className="w-full flex items-center gap-1 mb-2">
                <img className="w-7 h-7" src={spark} alt="" />
                <img className="w-4 h-4 opacity-60" src={spark} alt="" />
                <img className="w-2 h-2 opacity-30" src={spark} alt="" />
              </div>
              <h1 className="text-[24px] font-semibold">
                Inquire About {productDetails.name}
              </h1>
              <p className="text-[16px] font-medium text-[#999999]">
                Interested in this property? Fill out the form below, and our
                real estate experts will get back to you with more details,
                including scheduling a viewing and answering any questions you
                may have.
              </p>
            </div>

            <form className="mt-6 p-6 w-full flex flex-col gap-2 border-[#242424] border-[2px] rounded-md">
              <div className="w-full flex justify-between gap-3 flex-col sm:flex-row ">
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="fName">
                    First Name
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-md bg-[#191919] border border-[#232323] placeholder-[#4c4c4c] 
 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                    type="text"
                    placeholder="Enter First Name"
                    name="fName"
                    id="fName"
                    value={formData.fName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="lName">
                    Last Name
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-md bg-[#191919] border border-[#232323] placeholder-[#4c4c4c] 
 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                    type="text"
                    placeholder="Enter Last Name"
                    name="lName"
                    id="lName"
                    value={formData.lName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="w-full flex justify-between gap-3 flex-col sm:flex-row ">
                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-md bg-[#191919] border border-[#232323] placeholder-[#4c4c4c] 
 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                    type="email"
                    placeholder="Enter your Email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="w-full flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-md bg-[#191919] border border-[#232323] placeholder-[#4c4c4c] 
 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                    type="tel"
                    placeholder="Enter Phone Number"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="w-full flex flex-col gap-2">
                <label className="font-semibold" htmlFor="phone">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-md bg-[#191919] border border-[#232323] placeholder-[#4c4c4c]
              focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent resize-none"
                  required
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-8 py-3 bg-purple-500 hover:bg-purple-600 w-full sm:w-auto 
                   text-white font-medium rounded-lg transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 
                   focus:ring-offset-[#191919]"
                >
                  Send Your Message
                </button>
              </div>{" "}
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductDetailChild;
