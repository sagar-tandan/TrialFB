import {
  Cross,
  CrossIcon,
  Edit2,
  Flag,
  ImageUp,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import React, { useContext, useEffect, useMemo, useState } from "react";
// import { AllContext } from "../../context";
import DataTable from "../Table";
import { db, storage } from "../../Config.jsx";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  getDocs,
  orderBy,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const AddProducts = () => {
  // const { allData, setAllData } = useContext(AllContext);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    price: "",
    keyFeatures: [""],
    profileImg: "",
    coverImg: [],
  });

  // Preview states for images
  const [profilePreview, setProfilePreview] = useState("");
  const [coverPreviews, setCoverPreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState();
  const [deleteDialog, showDeleteDialog] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);

  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "S.No.",
        accessor: "sn",
      },

      {
        Header: "Name",
        accessor: "name",
        Cell: ({ value }) => (
          <div className="max-w-[200px] overflow-hidden whitespace-normal break-words font-medium">
            {value}
          </div>
        ),
      },

      {
        Header: "Description",
        accessor: "description",
        Cell: ({ value }) => (
          <div className="max-w-[400px] overflow-hidden whitespace-normal break-words">
            {value.slice(0, 150) + "..."}
          </div>
        ),
      },
      {
        Header: "Price",
        accessor: "price",
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

  const fetchData = async () => {
    setDataLoading(true);
    try {
      const productsRef = collection(db, "products");
      // const q = query(productsRef, orderBy("CreatedAt", "desc"));
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
        // Convert Firestore Timestamp to Date
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      }));
      setData(productsData);
      console.log(productsData);
      setDataLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setDataLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (data) => {
    setAdd(false);
    console.log(data);
    setFormData({
      id: data.id,
      productName: data.name,
      description: data.allDesc,
      price: data.price,
      keyFeatures: data.keyFeatures,
      profileImg: data.profileImg,
      coverImg: data.coverImg,
    });
    setEdit(true);
    fetchData();
  };

  const handleDelete = async (data) => {
    try {
      const productRef = doc(db, "products", data.id);
      await deleteDoc(productRef);
      console.log("Product deleted Successfully!!");

      if (data.profileImg) {
        const profileImgRef = ref(storage, data.profileImg);
        await deleteObject(profileImgRef);
        console.log("Profile image deleted successfully from Storage.");
      }

      for (const coverImageUrl of data.coverImg) {
        const coverImgRef = ref(storage, coverImageUrl);
        await deleteObject(coverImgRef);
        console.log("Cover image deleted successfully from Storage.");
      }
      showDeleteDialog(false);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

  const handleKeyFeatureChange = (index, value) => {
    const newFeatures = [...formData.keyFeatures];
    newFeatures[index] = value;
    setFormData((prev) => ({
      ...prev,
      keyFeatures: newFeatures,
    }));
  };

  const removeKeyFeature = (index) => {
    const newFeatures = formData.keyFeatures.filter((data, i) => i != index);
    setFormData((prev) => ({
      ...prev,
      keyFeatures: newFeatures,
    }));
  };

  const addKeyFeature = () => {
    setFormData((prev) => ({
      ...prev,
      keyFeatures: [...prev.keyFeatures, ""],
    }));
  };

  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({
        ...prev,
        profileImg: file,
      }));
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleCoverImages = (e) => {
    const files = Array.from(e.target.files);
    setFormData((prev) => ({
      ...prev,
      coverImg: [...prev.coverImg, ...files],
    }));

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setCoverPreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeCoverImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      coverImg: prev.coverImg.filter((_, i) => i !== index),
    }));
    setCoverPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const uploadImage = async (file, path) => {
    try {
      const storageRef = ref(storage, path);
      await uploadBytes(storageRef, file);
      return await getDownloadURL(storageRef);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    try {
      const productData = {
        name: formData.productName,
        description: formData.description,
        price: formData.price,
        keyFeatures: formData.keyFeatures.filter(
          (feature) => feature.trim() !== ""
        ),
        profileImg: formData.profileImg,
        coverImages: formData.coverImg,
        updatedAt: serverTimestamp(),
      };
      // Update product document
      const productRef = doc(db, "products", id);
      await updateDoc(productRef, productData);

      console.log("Data Updated!!!");

      resetForm();
      setAdd(false);
      fetchData();
    } catch (error) {
      console.error("Error Updating product:", error);
    } finally {
      setLoading(false);
      setEdit(false);
      setAdd(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let profileImgUrl = await uploadProfileImage(formData.profileImg);
      const coverImageUrls = await uploadCoverImages(formData.coverImg);

      const productData = {
        name: formData.productName,
        description: formData.description,
        price: formData.price,
        keyFeatures: formData.keyFeatures.filter(
          (feature) => feature.trim() !== ""
        ),
        profileImg: profileImgUrl,
        coverImages: coverImageUrls,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      const docRef = await addDoc(collection(db, "products"), productData);
      console.log("Data added!!!");

      resetForm();
      setAdd(false);
      fetchData();
    } catch (error) {
      console.error("Error adding product:", error);
    } finally {
      setLoading(false);
    }
  };

  const uploadProfileImage = async (profileImg) => {
    if (profileImg && profileImg instanceof File) {
      const profilePicturePath = `products/${Date.now()}-${profileImg.name}`;
      return await uploadImage(profileImg, profilePicturePath);
    }
    return "";
  };

  const uploadCoverImages = async (coverImages) => {
    const coverImageUrls = [];
    if (coverImages && coverImages.length > 0) {
      for (let index = 0; index < coverImages.length; index++) {
        const file = coverImages[index];
        if (file instanceof File) {
          const path = `products/${Date.now()}-${index}-${file.name}`;
          const imageUrl = await uploadImage(file, path);
          coverImageUrls.push(imageUrl);
        }
      }
    }
    return coverImageUrls;
  };

  const resetForm = () => {
    setFormData({
      productName: "",
      description: "",
      price: "",
      keyFeatures: [""],
      profileImg: null,
      coverImg: [],
    });
    setProfilePreview("");
    setCoverPreviews([]);
  };

  return (
    <div className="w-full flex flex-col relative">
      <div
        onClick={() => {
          setEdit(false);
          setAdd(true);
          setFormData({
            productName: "",
            description: "",
            price: "",
            keyFeatures: [""],
            profileImg: "",
            coverImg: [],
          });
        }}
        className="absolute w-[200px] bg-purple-700 text-white right-5 z-10 top-4 py-2 flex items-center justify-center font-medium rounded-sm cursor-pointer hover:bg-purple-800 transition-all duration-200 active:scale-95"
      >
        Add Product
      </div>

      <DataTable data={data} columns={columns} loading={dataLoading} />

      {(add || edit) && (
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 flex z-10 backdrop-blur-sm">
          <div
            className={`w-[500px] ${
              edit ? "h-[520px]" : "h-[600px]"
            } overflow-y-auto p-6 bg-white border-[1px] border-gray-500 rounded-sm flex flex-col mx-auto mt-10`}
          >
            <div className="w-full flex justify-between">
              <span className="font-semibold text-lg text-purple-700">
                {edit ? "Edit Product" : "Add Product"}
              </span>
              <X
                onClick={() => {
                  setAdd(false);
                  setEdit(false);
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
              <div className="w-full flex gap-4">
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="productName" className="font-medium">
                    Product Name
                  </label>
                  <input
                    className="outline-none border-[1px] border-gray-400 p-2 rounded-sm"
                    type="text"
                    id="productName"
                    name="productName"
                    onChange={handleChange}
                    value={formData.productName}
                    required
                  />
                </div>
                <div className="w-full flex flex-col gap-2">
                  <label htmlFor="price" className="font-medium">
                    Price
                  </label>
                  <input
                    className="outline-none border-[1px] border-gray-400 p-2 rounded-sm"
                    id="price"
                    name="price"
                    type="text"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="w-full flex flex-col gap-2">
                <label htmlFor="description" className="font-medium">
                  Description
                </label>
                <textarea
                  className="outline-none border-[1px] border-gray-400 p-2 rounded-sm"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-medium">Key Features</label>
                {formData.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex gap-3 w-full">
                    <input
                      className="outline-none border-[1px] border-gray-400 p-2 rounded-sm w-full"
                      value={feature}
                      onChange={(e) =>
                        handleKeyFeatureChange(index, e.target.value)
                      }
                      placeholder={`Feature ${index + 1}`}
                    />
                    {formData.keyFeatures.length > 1 && (
                      <div
                        onClick={() => removeKeyFeature(index)}
                        className="flex justify-center items-center cursor-pointer"
                      >
                        <X className="text-red-600 w-5 h-5 flex active:scale-95 " />
                      </div>
                    )}
                  </div>
                ))}
                <div
                  onClick={addKeyFeature}
                  className="w-full border-[1px] rounded-sm flex items-center justify-center p-2 font-medium cursor-pointer"
                >
                  <Plus className="h-4 w-4 mr-2" /> Add Feature
                </div>
              </div>
              {add && (
                <div className="w-full flex-col gap-2">
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="profileImg" className="font-medium">
                      Profile Image
                    </label>
                    <input
                      className="outline-none border-[1px] border-gray-400 p-1 rounded-sm w-full"
                      id="profileImg"
                      type="file"
                      onChange={handleProfileImage}
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
              {add && (
                <div className="w-full flex-col gap-2">
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="coverImages" className="font-medium">
                      Cover Images
                    </label>
                    <input
                      className="outline-none border-[1px] border-gray-400 p-1 rounded-sm w-full"
                      id="coverImages"
                      type="file"
                      onChange={handleCoverImages}
                      accept="image/*"
                      multiple
                    />
                    {coverPreviews.length > 0 && (
                      <div className="mt-2 grid grid-cols-3 gap-4">
                        {coverPreviews.map((preview, index) => (
                          <div key={index} className="relative">
                            <img
                              src={preview}
                              alt={`Cover preview ${index + 1}`}
                              className="h-32 w-full object-cover rounded-lg"
                            />
                            <span
                              className="absolute top-2 right-2 bg-red-500 p-2 rounded-lg"
                              onClick={() => removeCoverImage(index)}
                            >
                              <X className="h-4 w-4 text-white" />
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

              <input
                type="submit"
                value={
                  loading
                    ? "Uploading...."
                    : `${edit ? "Update Product" : "Add Product"}`
                }
                className="w-full p-2 mt-3 bg-purple-700 hover:bg-purple-800 text-white cursor-pointer rounded-sm text-center font-medium"
              />
            </form>
          </div>
        </div>
      )}

      {deleteDialog && (
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 flex z-10 backdrop-blur-sm">
          <div
            className={`w-[400px] h-[130px] p-3 bg-white border-[1px] border-gray-500 rounded-sm flex flex-col mx-auto mt-[20%]`}
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
              Are you sure you want to delete this product ?
            </div>
            <div className="w-full flex justify-end">
              <h1
                onClick={() => handleDelete(toBeDeleted)}
                className="w-[200px] font-medium text-red-600 active:scale-95 cursor-pointer transition-all ease-in-out duration-200 p-2  mt-2 flex items-end justify-end"
              >
                Delete
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProducts;
