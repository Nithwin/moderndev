"use client";
import React, { useState } from "react";
import Image from "next/image";
import UnderLine from "./SVG/UnderLine"; // Importing the UnderLine component for styling

/**
 * Contact component provides a form for users to send messages.
 * It uses state to manage form inputs and constructs a mailto link for submission.
 */
const Contact = () => {
  /**
   * State to hold the form data.
   * @property {string} name - The name entered by the user.
   * @property {string} email - The email entered by the user.
   * @property {string} message - The message entered by the user.
   */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // This function updates the state when the user types in an input field
  /**
   * Handles changes to the form input fields.
   * Updates the `formData` state with the new input value.
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  /**
   * Handles the form submission.
   * Prevents default form submission, constructs a mailto link, and opens the user's email client.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /**
     * The recipient email address for the contact form.
     * IMPORTANT: Replace this with the actual email address where messages should be sent.
     */
    const recipientEmail = "vmnithwin@gmail.com";
    
    // Constructs the email subject line using the sender's name.
    const subject = `New Message from ${formData.name}`;
    // Constructs the email body with the sender's details and message.
    const body = `You have a new message from your website contact form.\n\nHere are the details:\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    // Construct the mailto: URL
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="px-4 pb-20">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 lg:gap-16">
        <div className="flex flex-col gap-2 justify-center relative mx-auto">
          <div className="size-[10rem] rounded-full bg-[#EB0000]/30 blur-3xl lg:blur-6xl absolute top-0 left-[30%] lg:left-[45%] right-[30%] mix-blend-plus-lighter"></div>
          <div className="w-fit mx-auto">
            <p className="text-center text-3xl lg:text-5xl text-white font-semibold font-poppins">
              Contact Us
            </p>
            <UnderLine className={""} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-15 px-[0.5rem] lg:px-[3rem] lg:items-stretch lg:justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full lg:w-6/12 flex flex-col gap-6 bg-black/40 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 md:p-8 "
          >
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="text-gray-400 font-poppins text-sm pb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-gray-900/50 text-gray-300 outline-none border border-gray-600 rounded-lg px-4 py-2 transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/50"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-gray-400 font-poppins text-sm pb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-gray-900/50 text-gray-300 outline-none border border-gray-600 rounded-lg px-4 py-2 transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/50"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="text-gray-400 font-poppins text-sm pb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-gray-900/50 text-gray-300 outline-none border border-gray-600 rounded-lg px-4 py-2 transition-all duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 resize-none"
              />
            </div>
            <div className="mt-auto">
              <button
                type="submit"
                className="cursor-pointer bg-gradient-to-r from-[#EB0000] to-[#FF00B2] w-full font-semibold font-poppins text-white py-3 rounded-xl transition-transform duration-300 hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="w-full hidden lg:block lg:w-6/12 rounded-2xl overflow-hidden border border-red-600">
            <Image
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              height={1000}
              width={1000}
              src={"/contact.png"}
              alt="An abstract 3D image representing contact and connection"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
