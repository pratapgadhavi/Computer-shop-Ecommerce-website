import { useState } from "react";

const ContactUs = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen mt-15 bg-gray-100 flex items-center justify-center">
      <div className="bg-white lg:w-[40%] md:w-[60%] w-[90%] rounded-2xl shadow-2xl p-10">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

        <hr className="mb-8" />

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username */}
          <div>
            <label className="block text-gray-700 text-[17px] font-semibold mb-2">
              Username :
            </label>
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              className="w-full border placeholder:font-medium border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 text-[17px] font-semibold mb-2">
              Email :
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border placeholder:font-medium border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 text-[17px] font-semibold mb-2">
              Message :
            </label>
            <textarea
              name="message"
              rows="4"
              value={form.message}
              onChange={handleChange}
              className="w-full border placeholder:font-medium border-gray-300 px-4 py-2 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Write your message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-md bg-blue-600 text-white font-semibold text-lg hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
