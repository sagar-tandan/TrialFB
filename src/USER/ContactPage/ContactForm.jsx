import React, { useState } from "react";
import spark from "../UserAssets/spark.png";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmailWithEmailJS = async (templateParams) => {
    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID_EMAILJS,
        import.meta.env.VITE_TEMPLATE_ID_EMAILJS,
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
      from_name: data.firstName + " " + data.lastName,
      from_email: data.email,
      message:
        data.message +
        `\n\n` + // Double line break here
        `Forwarding the customer contact number ${data.phoneNumber} for your follow-up and further assistance.`,
    };

    return await sendEmailWithEmailJS(templateParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const myPromise = sendContactForm(formData); // Get the promise

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
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return (
    <div
      id="form"
      className="w-full px-4 md:px-8 lg:px-16 flex flex-col gap-5 py-20 max-w-screen-2xl mx-auto"
    >
      <div className="w-full flex items-center gap-1">
        <img className="w-7 h-7" src={spark} alt="" />
        <img className="w-4 h-4 opacity-60" src={spark} alt="" />
        <img className="w-2 h-2 opacity-30" src={spark} alt="" />
      </div>

      <h1 className="w-full text-2xl md:text-[32px] font-semibold leading-none">
        Let's Connect
      </h1>

      <p className="max-w-5xl text-[#737373] font-medium text-sm md:text-[16px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
        laboriosam dolor vel nostrum, rerum vitae quaerat consectetur porro
        facere magni odio dicta possimus.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto p-6 md:p-10 lg:p-12 text-white border-[2px] border-[#232323] rounded-md "
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* First Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="w-full px-4 py-3 rounded-md bg-[#191919] border border-[#232323] placeholder-[#4c4c4c] 
                     focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="w-full px-4 py-3 rounded-md bg-[#191919] border border-[#232323] placeholder-[#4c4c4c] 
                     focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {/* Email */}
          <div className="flex flex-col gap-2 ">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email "
              className="w-full px-4 py-3 rounded-md bg-[#191919] border border-[#232323] placeholder-[#4c4c4c] 
                     focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2 ">
            <label htmlFor="phoneNumber" className="text-sm font-medium">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="w-full px-4 py-3 rounded-md bg-[#191919] border border-[#232323] placeholder-[#4c4c4c] 
                     focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-2 mb-6">
          <label htmlFor="message" className="text-sm font-medium">
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

        {/* Submit Button Container */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`px-8 py-3 bg-purple-500 hover:bg-purple-600 w-full sm:w-auto 
                   text-white font-medium rounded-lg transition-colors duration-200
                   focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 
                   focus:ring-offset-[#191919] `}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
