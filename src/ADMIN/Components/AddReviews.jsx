import React, { useEffect, useMemo, useState } from "react";
import {
  uploadBytes,
  getDownloadURL,
  getStorage,
  ref,
  deleteObject,
} from "firebase/storage";
import { Edit2, Trash2, X } from "lucide-react";
import { db, storage } from "../../Config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import DataTable from "../Table";
import { ClipLoader } from "react-spinners";
import imageCompression from "browser-image-compression";

const AddReviews = () => {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [deleteDialog, showDeleteDialog] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [profilePreview, setProfilePreview] = useState();
  const [formData, setFormData] = useState({
    clientName: "",
    clientImg: "",
    clientLoc: "",
    review: "",
  });

  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "S.No.",
        accessor: "sn",
      },

      {
        Header: "Name",
        accessor: "clientName",
        Cell: ({ value }) => (
          <div className="max-w-[200px] overflow-hidden whitespace-normal break-words font-medium">
            {value}
          </div>
        ),
      },
      {
        Header: "heading",
        accessor: "reviewHeading",
        Cell: ({ value }) => (
          <div className="max-w-[200px] overflow-hidden whitespace-normal break-words font-medium">
            {value}
          </div>
        ),
      },

      {
        Header: "Review",
        accessor: "review",
        Cell: ({ value }) => (
          <div className="max-w-[400px] overflow-hidden whitespace-normal break-words">
            {value.slice(0, 150) + "..."}
          </div>
        ),
      },
      {
        Header: "Location",
        accessor: "clientLoc",
      },

      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => handleEdit(row.original)}
            >
              <Edit2 className="h-4 w-4" />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => {
                showDeleteDialog(true);
                setToBeDeleted(row.original);
              }}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleEdit = (data) => {
    setAdd(false);
    setFormData({
      id: data.id,
      clientName: data.clientName,
      clientLoc: data.clientLoc,
      review: data.review,
      clientImg: data.clientImg,
      reviewHeading: data.reviewHeading,
    });
    setEdit(true);
  };

  const handleDelete = async (data) => {
    try {
      setDeleteLoading(true);
      const reviewRef = doc(db, "Testimonials", data.id);
      await deleteDoc(reviewRef);
      console.log("Product deleted Successfully!!");

      if (data.clientImg) {
        const clientImgRef = ref(storage, data.clientImg);
        await deleteObject(clientImgRef);
        console.log("Profile image deleted successfully from Storage.");
      }
      setDeleteLoading(false);
      showDeleteDialog(false);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("reviewData")) {
      const reviewData = localStorage.getItem("reviewData");
      setData(JSON.parse(reviewData));
    } else {
      fetchData();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const handleImage = (e) => {
    const image = e.target.files[0];
    if (image) {
      setFormData((prev) => ({ ...prev, clientImg: image }));
    }
    setProfilePreview(URL.createObjectURL(image));
  };

  const uploadImage = async (file) => {
    const storageRef = ref(storage, "Client/" + Date.now() + file.name);
    try {
      // const compressedFile = await imageCompression(file, options);

      await uploadBytes(storageRef, file);
      return await getDownloadURL(storageRef);
    } catch (error) {
      console.log(error);
    }
  };

  const AddReviewToFireStore = async (data) => {
    await addDoc(collection(db, "Testimonials"), data);
    console.log("Data added Successfully!!!");
    setAdd(false);
    setLoading(false);
    setFormData({
      clientName: "",
      review: "",
      clientLoc: "",
      clientImg: "",
      reviewHeading: "",
    });
    fetchData();
  };

  const UpdateReviewToFireStore = async (data, id) => {
    const reviewRef = doc(db, "Testimonials", id);
    await updateDoc(reviewRef, data);
    console.log("Data Updated Successfully!!!");
    setEdit(false);
    setLoading(false);
    setFormData({
      clientName: "",
      review: "",
      clientLoc: "",
      clientImg: "",
      reviewHeading: "",
    });
    fetchData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const url = await uploadImage(formData.clientImg);
      const finalData = {
        clientName: formData.clientName,
        clientLoc: formData.clientLoc,
        review: formData.review,
        reviewHeading: formData.reviewHeading,
        clientImg: url,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      AddReviewToFireStore(finalData);
      setProfilePreview("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedData = {
        clientName: formData.clientName,
        clientLoc: formData.clientLoc,
        review: formData.review,
        reviewHeading: formData.reviewHeading,
        updatedAt: serverTimestamp(),
      };
      UpdateReviewToFireStore(updatedData, id);
      setProfilePreview("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    setDataLoading(true);
    try {
      const reviewRef = collection(db, "Testimonials");
      const q = query(reviewRef, orderBy("createdAt", "desc"));
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
      setData(ReviewData);
      localStorage.setItem("reviewData", JSON.stringify(ReviewData));
      setDataLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setDataLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col relative pt-3">
      <div
        onClick={() => {
          setEdit(false);
          setAdd(true);
        }}
        className="absolute w-[200px] bg-purple-700 text-white right-5 z-10 top-7 py-2 flex items-center justify-center font-medium rounded-sm cursor-pointer hover:bg-purple-800 transition-all duration-200 active:scale-95"
      >
        Add Reviews
      </div>

      <DataTable data={data} columns={columns} loading={dataLoading} />

      {(add || edit) && (
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 flex z-10 backdrop-blur-sm">
          <div
            className={` ${
              edit ? "h-[470px] mt-20 w-[450px]" : "w-[500px] h-[550px] mt-10"
            }  overflow-y-auto p-6 bg-white border-[1px] shadow-md rounded-md flex flex-col mx-auto `}
          >
            <div className="w-full flex justify-between">
              <span className="font-semibold text-lg text-purple-700">
                {edit ? "Edit Review" : "Add Review"}
              </span>
              <X
                onClick={() => {
                  setAdd(false);
                  setEdit(false);
                  setFormData({
                    clientName: "",
                    review: "",
                    clientLoc: "",
                    clientImg: "",
                    reviewHeading: "",
                  });
                  setProfilePreview("");
                }}
                className="text-black cursor-pointer active:scale-95"
              />
            </div>

            <form
              onSubmit={
                edit ? (e) => handleUpdate(e, formData.id) : handleSubmit
              }
              className="mt-5 flex flex-col gap-2"
            >
              {add && (
                <div className="w-full flex-col gap-2">
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="clientImg" className="font-medium">
                      Client Image
                    </label>
                    <input
                      className="outline-none border-[1px] border-gray-400 p-1 rounded-sm w-full"
                      id="clientImg"
                      type="file"
                      onChange={handleImage}
                      accept="image/*"
                    />
                  </div>

                  {profilePreview && (
                    <div className="mt-2">
                      <img
                        src={profilePreview}
                        alt="Profile preview"
                        className="h-32 w-32 object-cover rounded-md"
                      />
                    </div>
                  )}
                </div>
              )}

              <div className="w-full flex flex-col gap-2">
                <label htmlFor="clientName" className="font-medium">
                  Client Name
                </label>
                <input
                  className="outline-none border-[1px] border-gray-400 p-2 rounded-sm"
                  type="text"
                  id="clientName"
                  name="clientName"
                  placeholder="Name of Client"
                  onChange={handleChange}
                  value={formData.clientName}
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="clientLoc" className="font-medium">
                  Client Location
                </label>
                <input
                  className="outline-none border-[1px] border-gray-400 p-2 rounded-sm"
                  type="text"
                  id="clientLoc"
                  name="clientLoc"
                  placeholder="Location of Client"
                  onChange={handleChange}
                  value={formData.clientLoc}
                  required
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="reviewHeading" className="font-medium">
                  Testimonial Heading
                </label>
                <input
                  className="outline-none border-[1px] border-gray-400 p-2 rounded-sm"
                  type="text"
                  id="reviewHeading"
                  name="reviewHeading"
                  placeholder="Exceptional Service"
                  onChange={handleChange}
                  value={formData.reviewHeading}
                  required
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label htmlFor="review" className="font-medium">
                  Testimonial
                </label>
                <textarea
                  className="outline-none border-[1px] border-gray-400 p-2 rounded-sm"
                  id="review"
                  name="review"
                  placeholder="What they say"
                  value={formData.review}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`w-full p-2 mt-3 bg-purple-700 hover:bg-purple-800 text-white cursor-pointer rounded-sm text-center font-medium flex items-center justify-center`}
              >
                {loading ? (
                  <ClipLoader size={20} color="#fff" />
                ) : (
                  `${edit ? "Update Review" : "Add Review"}`
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      {deleteDialog && (
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 flex z-10 backdrop-blur-sm">
          <div
            className={`w-[400px] h-[135px] p-4 bg-white border-[1px] shadow-lg shadow-purple-100 rounded-md flex flex-col mx-auto mt-[20%]`}
          >
            <div className="flex w-full justify-between">
              <span className="font-semibold text-lg text-red-700">
                Delete Product
              </span>
              <X
                onClick={() => {
                  showDeleteDialog(false);
                }}
                className="text-black cursor-pointer active:scale-95"
              />
            </div>
            <div className="mt-2">
              Are you sure you want to delete this review ?
            </div>
            <div className="w-full flex justify-end">
              <h1
                onClick={() => handleDelete(toBeDeleted)}
                className="w-[200px] font-medium text-red-600 cursor-pointer p-2  mt-2 flex items-end justify-end"
              >
                {deleteLoading ? (
                  <ClipLoader
                    size={26}
                    loading={deleteLoading}
                    color="#f50100"
                  />
                ) : (
                  "Delete"
                )}
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddReviews;
