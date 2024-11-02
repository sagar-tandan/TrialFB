import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import Slider from "react-slick";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import spark from "../UserAssets/spark.png";
import Footer from "../Footer";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config";
import { ClipLoader } from "react-spinners";
import { AllContext } from "../../context";

const FeaturedWork = () => {
  const { id } = useParams();
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phone: "",
    message: "",
    topic: "",
  });
  const [loading, setLoading] = useState(false);

  const { fproductDetails, setFProductDetails } = useContext(AllContext);
  const [dataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  const sendEmailWithEmailJS = async (templateParams) => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID_EMAILJS,
        import.meta.env.VITE_TEMPLATE_ID_PRODUCT_EMAILJS,
        templateParams,
        import.meta.env.VITE_PUBLIC_KEY_EMAILJS
      );
      return { success: true, response };
    } catch (error) {
      console.error("EmailJS Error:", error);
      return { success: false, error };
    }
  };

  const sendContactForm = async (data) => {
    const templateParams = {
      from_name: `${data.fName} ${data.lName}`,
      from_email: data.email,
      from_phone: data.phone,
      product_name: data.topic,
      message: data.message,
    };

    return await sendEmailWithEmailJS(templateParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const myPromise = sendContactForm({
      fName: formData.fName,
      lName: formData.lName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      topic: productDetails.name,
    }); // Get the promise

    toast
      .promise(myPromise, {
        loading: "Sending message...",
        success: "Message sent successfully!",
        error: "Failed to send message. Please try again.",
      })
      .then(() => {
        setLoading(false);
        // Reset form if the message was sent successfully
        setFormData({
          fName: "",
          lName: "",
          email: "",
          phone: "",
          message: "",
          topic: "",
        });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const fetchData = async () => {
    setDataLoading(true);
    try {
      const productsRef = doc(db, "fproducts", id);
      const querySnapshot = await getDoc(productsRef);

      const productsData = {
        id: querySnapshot.id,
        name: querySnapshot.data().name,
        ClientName: querySnapshot.data().ClientName,
        description: querySnapshot.data().description,
        profileImg: querySnapshot.data().profileImg,
        coverImg: querySnapshot.data().coverImages,
        challengeImage: querySnapshot.data().challengeImage,
        outcomeImage: querySnapshot.data().outcomeImage,
        challenge: querySnapshot.data().challenge,
        outcome: querySnapshot.data().outcome,
      };

      setFProductDetails(productsData);
      setDataLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setDataLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col text-white bg-[#141414] font-urbanist">
      <div className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col gap-5 my-10 max-w-screen-2xl mx-auto mt-20">
        {dataLoading ? (
          <div className="w-full flex items-center justify-center">
            <ClipLoader size={35} color={"#fff"} className="mt-10" />
          </div>
        ) : (
          <>
            <div className="w-full flex flex-col sm:justify-between sm:flex-row">
              <h1 className="font-semibold text-[24px]">
                {fproductDetails.name}
              </h1>
              <span className="flex flex-col justify-start sm:justify-center items-center md:gap-0 mt-4 sm:mt-0">
                <h1 className="font-medium text-[16px] text-[#999999] w-full">
                  Client
                </h1>
                <p className=" font-medium lg:font-semibold text-[18px] lg:text-[20px] w-full">
                  {fproductDetails.ClientName}
                </p>
              </span>
            </div>

            <div className="w-full border-[2px] border-[#242424] rounded-lg p-2 sm:p-4 bg-[#191919]">
              <div className="w-full my-2">
                <Slider ref={sliderRef} {...settings}>
                  {fproductDetails.coverImg?.map((product, index) => (
                    <div key={index} className="px-2 lg:px-4">
                      <img
                        className="w-full rounded-md md:h-[400px] h-[250px] sm:h-[350px] object-cover bg-white"
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

                  {fproductDetails &&
                    fproductDetails.coverImg &&
                    fproductDetails.coverImg.length > 0 &&
                    Array.from({ length: fproductDetails.coverImg.length }).map(
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

            <div className="w-full flex flex-col">
              <h1 className="w-full font-semibold text-[20px]">Description</h1>
              <p className="text-[16px] font-medium text-[#999999] max-w-6xl">
                {fproductDetails.description}
              </p>
            </div>

            <div className="w-full flex flex-col sm:flex-row gap-10 lg:gap-16 sm:mt-10">
              <div className="w-full flex flex-col mt-4 gap-6">
                <div className="flex flex-col w-full">
                  <h1 className="w-full font-semibold text-[20px] mb-3">
                    The Challenge
                  </h1>
                  <p className="text-[16px] font-medium text-[#999999] max-w-6xl">
                    {fproductDetails.challenge}
                  </p>
                </div>

                <img
                  className="h-[300px] sm:h-[250px] md:h-[350px] lg:h-[450px]  rounded-lg bg-white object-cover"
                  src={fproductDetails.challengeImage}
                  alt=""
                />
              </div>

              <div className="w-full flex flex-col mt-4">
                <h1 className="w-full font-semibold text-[20px] mb-4">
                  The outcome
                </h1>
                <div className="w-full flex flex-col-reverse sm:flex-col gap-6">
                  <img
                    className=" h-[300px] sm:h-[250px] md:h-[350px] lg:h-[450px] rounded-lg bg-white object-cover"
                    src={fproductDetails.outcomeImage}
                    alt=""
                  />
                  <p className="text-[16px] font-medium text-[#999999] max-w-6xl">
                    {fproductDetails.outcome}
                  </p>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Form */}
        <div className="w-full flex flex-col gap-4 mt-10 ">
          <div className="flex flex-col w-full">
            <div className="w-full flex items-center gap-1 mb-2">
              <img className="w-7 h-7" src={spark} alt="" />
              <img className="w-4 h-4 opacity-60" src={spark} alt="" />
              <img className="w-2 h-2 opacity-30" src={spark} alt="" />
            </div>
            <h1 className="text-[24px] font-semibold">
              Inquire About {fproductDetails.name}
            </h1>
            <p className="text-[16px] font-medium text-[#999999]">
              Interested in this product? Fill out the form below, and our team
              will get back to you with more details, including scheduling a
              viewing and answering any questions you may have.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 p-6 w-full flex flex-col gap-2 border-[#242424] border-[2px] rounded-md"
          >
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
                disabled={loading}
                className={`px-8 py-3 bg-purple-500 hover:bg-purple-600 w-full sm:w-auto 
                    text-white font-medium rounded-lg transition-colors duration-200
                    focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 
                    focus:ring-offset-[#191919] ${
                      loading ? "cursor-not-allowed" : ""
                    }`}
              >
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>

      <hr className="border-[#202020] border-[1px]" />
      <Footer />
    </div>
  );
};

export default FeaturedWork;
