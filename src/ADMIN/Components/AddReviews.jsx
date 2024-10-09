import React from "react";

const AddReviews = () => {
  return (
    <div className="w-full flex flex-col relative pt-3">
      <div
        onClick={() => {
          //   setEdit(false);
          //   setAdd(true);
          //   setFormData({
          //     productName: "",
          //     description: "",
          //     price: "",
          //     keyFeatures: [""],
          //     profileImg: "",
          //     coverImg: [],
          //   });
        }}
        className="absolute w-[200px] bg-purple-700 text-white right-5 z-10 top-7 py-2 flex items-center justify-center font-medium rounded-sm cursor-pointer hover:bg-purple-800 transition-all duration-200 active:scale-95"
      >
        Add Reviews
      </div>

      {/* <DataTable data={data} columns={columns} loading={dataLoading} /> */}
    </div>
  );
};

export default AddReviews;
