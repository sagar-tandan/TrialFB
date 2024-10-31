import React, { useCallback, useEffect, useState } from "react";
import spark from "../UserAssets/spark.png";
import Slider from "react-slick";
import { MoveLeft, MoveRight, Star } from "lucide-react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { ClipLoader } from "react-spinners";
import { db } from "../../Config";

const products = [
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Client+1",
    name: "Ram Chaudhary",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    location: "Random, Nepal",
    header: "Exceptional Service",
    rating: 5,
  },
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Client+1",
    name: "Balram Chaudhary",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    location: "Random, Nepal",
    header: "Exceptional Service",
    rating: 5,
  },
  {
    image: "https://dummyimage.com/200x200/000/fff&text=Client+1",
    name: "Krishna Chaudhary",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Beatae laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro facere magni odio dicta possimus. Lorem ipsum dolor sit ametconsectetur adipisicing elit. Aliquid, reiciendis? ",

    location: "Random, Nepal",
    header: "Exceptional Service",
    rating: 5,
  },
];

const ClientReview = () => {
  const sliderRef = React.useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [allReviews, setAllReviews] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const formatSlideNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
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

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const fetchData = useCallback(async () => {
    const clientReview = sessionStorage.getItem("cReview");
    if (clientReview?.length > 0) {
      setAllReviews(JSON.parse(clientReview));
    } else {
      try {
        setDataLoading(true);
        const reviewRef = collection(db, "Testimonials");
        const q = query(reviewRef, orderBy("createdAt", "desc"), limit(10));
        const querySnapshot = await getDocs(q);

        const ReviewData = querySnapshot.docs.map((doc, index) => ({
          sn: index,
          id: doc.id,
          clientName: doc.data().clientName,
          clientLoc: doc.data().clientLoc,
          review: doc.data().review,
          reviewHeading: doc.data().reviewHeading,
          clientImg: doc.data().clientImg,

          // Convert Firestore Timestamp to Date
          createdAt: doc.data().createdAt?.toDate(),
          updatedAt: doc.data().updatedAt?.toDate(),
        }));
        setAllReviews(ReviewData);
        sessionStorage.setItem("cReview", JSON.stringify(ReviewData));
        setDataLoading(false);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setDataLoading(false);
      }
    }
  });

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      id="review"
      className="w-full py-10 px-4 md:px-8 lg:px-16 flex flex-col gap-5 sm:py-20 max-w-screen-2xl mx-auto"
    >
      <div className="w-full flex items-center gap-1">
        <img className="w-7 h-7" src={spark} alt="" />
        <img className="w-4 h-4 opacity-60" src={spark} alt="" />
        <img className="w-2 h-2 opacity-30" src={spark} alt="" />
      </div>

      <h1 className="w-full text-2xl md:text-[32px] font-semibold leading-none">
        What Our Clients Say
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 items-start md:items-center">
        <p className="max-w-5xl text-[#737373] font-medium text-sm md:text-[16px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro
          facere magni odio dicta possimus. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquid, reiciendis?
        </p>
        {/* <button className="border-[2px] border-[#202020] rounded-md py-2 md:py-3 px-4 md:px-6 bg-[#1a1a1a] hover:bg-purple-600 hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 whitespace-nowrap">
          View All Testimonials
        </button> */}
      </div>

      {dataLoading ? (
        <div className="w-full flex items-center justify-center">
          <ClipLoader size={35} color={"#fff"} className="mt-10" />
        </div>
      ) : (
        <>
          <div className="w-full mt-6">
            <Slider ref={sliderRef} {...settings}>
              {allReviews?.map((review, index) => (
                <div key={review.id} className="px-2">
                  <div className="w-full p-4 md:p-8 flex flex-col gap-1 border-[2px] border-[#202020] rounded-md h-full">
                    <div className="w-full flex gap-2 flex-wrap">
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className="w-[30px] h-[30px] md:w-[35px] md:h-[35px] rounded-full border-[1px] border-[#262626] bg-[#1a1a1a] flex justify-center items-center p-1 text-yellow-600"
                        >
                          <Star size={16} />
                        </span>
                      ))}
                    </div>
                    <h1 className="w-full text-lg md:text-[20px] font-semibold mt-5">
                      {review.reviewHeading}
                    </h1>
                    <p className="font-medium w-full text-sm md:text-[16px] line-clamp-4 text-[#737373]">
                      {review.review}
                    </p>
                    <div className="w-full flex gap-3 mt-4 items-center">
                      <img
                        className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full object-cover"
                        src={review.clientImg}
                        alt={review.clientImg}
                      />

                      <div className="flex flex-col">
                        <h1 className="font-medium leading-none text-sm md:text-base">
                          {review.clientName}
                        </h1>
                        <h2 className="text-[#737373] text-xs md:text-sm">
                          {review.clientLoc}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <hr className="border-[1px] border-[#202020] mt-5" />

          <div className="w-full flex justify-between items-center">
            <span className="text-base md:text-[18px] font-medium">
              {formatSlideNumber(currentSlide + 1)}{" "}
              <span className="text-[#737373]">
                of {formatSlideNumber(allReviews.length)}
              </span>
            </span>

            <div className="flex gap-4">
              <span
                onClick={goToPrev}
                className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] border-[#202020] flex items-center justify-center cursor-pointer hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
              >
                <MoveLeft strokeWidth="1px" />
              </span>

              <span
                onClick={goToNext}
                className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] rounded-full border-[2px] select-none border-[#202020] flex items-center justify-center cursor-pointer hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:text-purple-400"
              >
                <MoveRight strokeWidth="1px" />
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ClientReview;
