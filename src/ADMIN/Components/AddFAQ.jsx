import React, { useEffect, useMemo, useState } from "react";
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
import DataTable from "../Table.jsx";
import { ClipLoader } from "react-spinners";
const AddFAQ = () => {
  const [add, setAdd] = useState(false);
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [deleteDialog, showDeleteDialog] = useState(false);
  const [toBeDeleted, setToBeDeleted] = useState();
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [formData, setFormData] = useState({
    question: "",
    answer: "",
  });

  const [data, setData] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "S.No.",
        accessor: "sn",
      },

      {
        Header: "Question",
        accessor: "question",
        Cell: ({ value }) => (
          <div className="max-w-[200px] overflow-hidden whitespace-normal break-words font-medium">
            {value}
          </div>
        ),
      },

      {
        Header: "Answer",
        accessor: "answer",
        Cell: ({ value }) => (
          <div className="max-w-[400px] overflow-hidden whitespace-normal break-words">
            {value.slice(0, 150) + "..."}
          </div>
        ),
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
      question: data.question,
      answer: data.answer,
    });
    setEdit(true);
  };

  const handleDelete = async (data) => {
    try {
      setDeleteLoading(true);
      const FaqRef = doc(db, "FAQ", data.id);
      await deleteDoc(FaqRef);
      setDeleteLoading(false);
      showDeleteDialog(false);
      console.log("Product deleted Successfully!!");
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("faqsData")) {
      const faqData = localStorage.getItem("faqsData");
      setData(JSON.parse(faqData));
    } else {
      fetchData();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const AddFaqToFireStore = async (data) => {
    await addDoc(collection(db, "FAQ"), data);
    console.log("Data added Successfully!!!");
    setAdd(false);
    setLoading(false);
    setFormData({
      question: "",
      answer: "",
    });
    fetchData();
  };

  const UpdateFaqToFireStore = async (data, id) => {
    const FaqRef = doc(db, "FAQ", id);
    await updateDoc(FaqRef, data);
    console.log("Data Updated Successfully!!!");
    setEdit(false);
    setLoading(false);
    setFormData({
      question: "",
      answer: "",
    });
    fetchData();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const finalData = {
        question: formData.question,
        answer: formData.answer,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };
      AddFaqToFireStore(finalData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e, id) => {
    e.preventDefault();
    setLoading(true);
    try {
      const updatedData = {
        question: formData.question,
        answer: formData.answer,
        updatedAt: serverTimestamp(),
      };
      UpdateFaqToFireStore(updatedData, id);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
    setDataLoading(true);
    try {
      const faqRef = collection(db, "FAQ");
      const q = query(faqRef, orderBy("createdAt", "desc"));
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
      setData(faqData);
      localStorage.setItem("faqsData", JSON.stringify(faqData));
      setDataLoading(false);
    } catch (error) {
      console.error("Error fetching faq:", error);
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
        Add FAQ
      </div>

      <DataTable data={data} columns={columns} loading={dataLoading} />

      {(add || edit) && (
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 flex z-20 backdrop-blur-sm">
          <div
            className={` w-[500px] h-[420px] mt-[10%] overflow-y-auto p-6 bg-white border-[1px] shadow-md rounded-md flex flex-col mx-auto `}
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
                    question: "",
                    answer: "",
                  });
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
              <div className="w-full flex flex-col gap-2">
                <label htmlFor="question" className="font-medium">
                  Question
                </label>
                <textarea
                  className="outline-none border-[1px] border-gray-400 p-2 rounded-sm"
                  id="question"
                  name="question"
                  placeholder="Enter question"
                  value={formData.question}
                  onChange={handleChange}
                  rows={2}
                  required
                />
              </div>

              <div className="w-full flex flex-col gap-2">
                <label htmlFor="answer" className="font-medium">
                  Answer
                </label>
                <textarea
                  className="outline-none border-[1px] border-gray-400 p-2 rounded-sm"
                  id="answer"
                  name="answer"
                  placeholder="Enter answer"
                  value={formData.answer}
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
                  `${edit ? "Update FAQ" : "Add FAQ"}`
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
                Delete FAQ
              </span>
              <X
                onClick={() => {
                  showDeleteDialog(false);
                }}
                className="text-black cursor-pointer active:scale-95"
              />
            </div>
            <div className="mt-2">
              Are you sure you want to delete this faq ?
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
export default AddFAQ;
