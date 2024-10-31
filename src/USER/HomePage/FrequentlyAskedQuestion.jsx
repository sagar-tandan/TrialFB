import React, { useCallback, useEffect, useState } from "react";
import spark from "../UserAssets/spark.png";
import { MoveLeft, MoveRight } from "lucide-react";
import Slider from "react-slick";
import { ClipLoader } from "react-spinners";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "../../Config";

const FrequentlyAskedQuestion = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef(null);
  const [allFAQs, setAllFAQs] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const formatSlideNumber = (number) => number.toString().padStart(2, "0");

  const fetchData = useCallback(async () => {
    const FAQData = sessionStorage.getItem("faqData");
    if (FAQData?.length > 0) {
      setAllFAQs(JSON.parse(FAQData));
    } else {
      try {
        setDataLoading(true);
        const faqRef = collection(db, "FAQ");
        const q = query(faqRef, orderBy("createdAt", "desc"), limit(10));
        const querySnapshot = await getDocs(q);

        const faqData = querySnapshot.docs.map((doc, index) => ({
          sn: index,
          id: doc.id,
          question: doc.data().question,
          answer: doc.data().answer,
          // Convert Firestore Timestamp to Date
          createdAt: doc.data().createdAt?.toDate(),
          updatedAt: doc.data().updatedAt?.toDate(),
        }));
        setAllFAQs(faqData);
        sessionStorage.setItem("faqData", JSON.stringify(faqData));
        setDataLoading(false);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        setDataLoading(false);
      }
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col gap-5 my-10 max-w-screen-2xl mx-auto">
      <div className="w-full flex items-center gap-1">
        <img className="w-7 h-7" src={spark} alt="" />
        <img className="w-4 h-4 opacity-60" src={spark} alt="" />
        <img className="w-2 h-2 opacity-30" src={spark} alt="" />
      </div>

      <h1 className="w-full text-2xl md:text-[32px] font-semibold leading-none">
        Frequently Asked Questions
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 items-start md:items-center">
        <p className="max-w-5xl text-[#737373] font-medium text-sm md:text-[16px]">
          Find answers to common questions about our services. Can't find what
          you're looking for? Feel free to contact our support team for more
          assistance.
        </p>
        {/* <button className="border-[2px] border-[#202020] rounded-md py-2 md:py-3 px-4 md:px-6 bg-[#1a1a1a] hover:bg-purple-600 hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 whitespace-nowrap">
          View All FAQs
        </button> */}
      </div>

      {dataLoading ? (
        <div className="w-full flex items-center justify-center">
          <ClipLoader size={35} color={"#fff"} className="mt-10" />
        </div>
      ) : (
        <>
          {/* FAQ Cards Slider */}
          <div className="mb-8">
            <Slider ref={sliderRef} {...settings}>
              {allFAQs.map((faq, index) => (
                <div key={index} className="px-2">
                  <div className="h-[280px] p-6 md:p-8 border-2 border-[#202020] rounded-md ">
                    <div className="h-full flex flex-col">
                      <div className="mb-4">
                        <span className="text-sm text-gray-400">
                          Question {faq.sn}
                        </span>
                        <h3 className="text-xl font-semibold mt-2 line-clamp-2">
                          {faq.question}
                        </h3>
                      </div>

                      <p className="text-gray-400 line-clamp-4 flex-grow">
                        {faq?.answer.length > 250
                          ? faq.answer.slice(0, 250) + "..."
                          : faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center border-t-[2px] border-[#202020] pt-6">
            <span className="text-lg font-medium">
              {formatSlideNumber(currentSlide + 1)}
              <span className="text-gray-500">
                {" "}
                of {formatSlideNumber(allFAQs.length)}
              </span>
            </span>

            <div className="flex gap-4">
              <button
                onClick={() => sliderRef.current?.slickPrev()}
                className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center cursor-pointer hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
                aria-label="Previous slide"
              >
                <MoveLeft strokeWidth="1px" />
              </button>
              <button
                onClick={() => sliderRef.current?.slickNext()}
                className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center cursor-pointer hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
                aria-label="Next slide"
              >
                <MoveRight strokeWidth="1px" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FrequentlyAskedQuestion;
