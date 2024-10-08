import {
  Cross,
  CrossIcon,
  Edit2,
  ImageUp,
  Plus,
  Search,
  Trash2,
  X,
} from "lucide-react";
import React, { useContext, useMemo, useState } from "react";
import { AllContext } from "../../context";
import DataTable from "../Table";
import { prepareStackTrace } from "postcss/lib/css-syntax-error";

const AddProducts = () => {
  const { allData, setAllData } = useContext(AllContext);
  const [edit, setEdit] = useState(false);
  const [add, setAdd] = useState(true);
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

  const [data, setData] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Developer" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Designer" },
    {
      id: 3,
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Manager",
      additional: "This is additional info",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "Developer",
      additional: "This is additional info",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "Designer",
      additional: "This is additional info",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "Designer",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      email: "charlie@example.com",
      role: "Designer",
    },
    // Add more data as needed
  ]);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Role",
        accessor: "role",
      },
      {
        Header: "Actions",
        id: "actions",
        Cell: ({ row }) => (
          <div className="flex space-x-2">
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => handleEdit(row)}
            >
              <Edit2 className="h-4 w-4" />
            </button>
            <button
              className="p-1 hover:bg-gray-100 rounded"
              onClick={() => handleDelete(row.original.id)}
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleEdit = (id) => {
    console.log(`Editing row with id: ${id}`);
    console.log(id);
    // Implement your edit logic here
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the formData to your backend
    console.log("Form Data:", formData);
  };

  return (
    <div className="w-full flex flex-col relative">
      <div className="absolute w-[200px] bg-purple-700 text-white right-5 z-10 top-4 py-2 flex items-center justify-center font-medium rounded-sm cursor-pointer hover:bg-purple-800 transition-all duration-200 active:scale-95">
        Add Product
      </div>

      <DataTable data={data} columns={columns} />

      {add && (
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 flex z-10 backdrop-blur-sm">
          <div className="w-[600px] h-[600px] overflow-y-auto p-6 bg-white border-[1px] border-gray-500 rounded-sm flex flex-col mx-auto mt-10">
            <div className="w-full flex justify-between">
              <span className="font-semibold text-lg text-purple-700">
                Add Product
              </span>
              <X className="text-red-600 cursor-pointer active:scale-95" />
            </div>

            <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-2">
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
                    type="number"
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
                    required
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

              <input
                type="submit"
                value="Submit"
                className="w-full p-2 mt-3 bg-purple-700 hover:bg-purple-800 text-white cursor-pointer rounded-sm text-center"
              />
                
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProducts;
