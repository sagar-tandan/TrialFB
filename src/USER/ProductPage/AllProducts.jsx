import React, { useCallback, useContext, useEffect, useState } from "react";
import spark from "../UserAssets/spark.png";
import { AllContext } from "../../context";
import { Box } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../Config";
import { ClipLoader } from "react-spinners";

const AllProducts = () => {
  const { allProducts, setAllProducts } = useContext(AllContext);
  const { search } = useContext(AllContext);
  const [allData, setAllData] = useState([]);
  const [dataLoading, setDataLoading] = useState(false);

  const navigate = useNavigate();

  // Filter products based on query
  useEffect(() => {
    if (search?.trim() !== "") {
      const queryProducts = allProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
      setAllProducts(queryProducts);
    } else {
      setAllProducts(allData);
    }
  }, [search]);

  const fetchData = useCallback(async () => {
    setDataLoading(true);
    try {
      const productsRef = collection(db, "products");
      const q = query(productsRef, orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);

      const productsData = querySnapshot.docs.map((doc, index) => ({
        sn: index,
        id: doc.id,
        name: doc.data().name,
        price: doc.data().price,
        allDesc: doc.data().description,
        description: doc.data().description,
        profileImg: doc.data().profileImg,
        coverImg: doc.data().coverImages,
        keyFeatures: doc.data().keyFeatures,
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      }));
      setAllProducts(productsData);
      setAllData(productsData);
      setDataLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setDataLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  const showProductDetails = (productD) => {
    navigate(`/products/${productD.id}`);
  };
  return (
    <div className="w-full py-6 px-4 md:px-8 lg:px-16 flex flex-col gap-5 mt-24 mb-10 max-w-screen-2xl mx-auto">
      <div className="w-full flex items-center gap-1">
        <img className="w-7 h-7" src={spark} alt="" />
        <img className="w-4 h-4 opacity-60" src={spark} alt="" />
        <img className="w-2 h-2 opacity-30" src={spark} alt="" />
      </div>

      <h1 className="w-full text-2xl md:text-[32px] font-semibold leading-none">
        Discover all the Products
      </h1>

      <div className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-10 items-start md:items-center">
        <p className="max-w-6xl text-[#737373] font-medium text-sm md:text-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud
        </p>
      </div>

      {dataLoading ? (
        <div className="w-full flex items-center justify-center">
          <ClipLoader size={35} color={"#fff"} className="mt-10" />
        </div>
      ) : (
        <>
          <div
            className={`w-full mt-6 relative ${
              allProducts?.length > 0
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                : "flex"
            }`}
          >
            {allProducts?.length > 0 ? (
              allProducts.map((product, index) => (
                <div key={index} className="m-4">
                  <div className="w-full p-3 md:p-5 flex flex-col gap-1 border-[2px] border-[#202020] rounded-md">
                    <img
                      className="w-full rounded-md h-[250px] sm:h-[250px] object-cover"
                      src={product.profileImg}
                      alt={product.name}
                    />
                    <h1 className="w-full text-base md:text-[18px] font-semibold mt-3">
                      {product.name}
                    </h1>
                    <p className="font-medium text-[#737373] w-full text-sm md:text-base line-clamp-3">
                      {product.description}
                    </p>
                    <div className="w-full flex flex-col sm:flex-row justify-between mt-4 items-start sm:items-center gap-3">
                      <span className="flex flex-col gap-1">
                        <h1 className="text-[#737373] text-sm">Price</h1>
                        <h2 className="font-semibold text-base md:text-[18px]">
                          Rs. {product.price}
                        </h2>
                      </span>
                      <span
                        onClick={(e) => showProductDetails(product)}
                        className="text-[14px] bg-purple-700 px-4 lg:px-8 py-2 md:py-3 rounded-md cursor-pointer hover:bg-purple-700 hover:border-purple-500 transform transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 text-center w-full sm:w-auto"
                      >
                        View Product Details
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="m-4 text-center text-[#999999] w-full flex flex-col items-center justify-center gap-3">
                <Box className="w-[100px] h-[100px]" strokeWidth="1px" />
                <p className="w-full font-semibold text-[18px]">
                  No products found for "{query}"
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AllProducts;
