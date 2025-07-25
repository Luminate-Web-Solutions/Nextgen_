'use client';
import React, { useState } from 'react';
import axios from 'axios';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telephone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3035/api/contact', formData);
      alert('Email sent successfully!');
      setFormData({
        name: '',
        email: '',
        telephone: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email.');
    }
  };

  return (
    <section className="bg-[#fde6cb]">
      {/* Header Image */}
      <div
        className="relative h-[300px] md:h-[400px] bg-cover bg-center flex items-center justify-center bg-black/100"
        style={{ backgroundImage: "url('/image 9.jpg')" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          Contact Us
        </h2>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <h3 className="text-3xl md:text-4xl font-semibold text-black mb-6">
            If You Have Any Query,
            <br />
            Please Contact Us
          </h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            Whether you need expert support for equipment maintenance, help with
            a new installation, or a partner to streamline your production
            uptime — <strong>NextGen Dynamix</strong> is here for you.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Reach out today to discuss your service needs and discover how
            NextGen Dynamix can help drive efficiency, reliability, and
            long-term performance in your operations. <br />
            <strong>info@nextgendynamix.com</strong>
          </p>
        </div>

        {/* Right Form */}
        <form className="w-full max-w-md space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-800">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-400 text-black px-4 py-2 bg-white rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-800">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-400 px-4 py-2 text-black bg-white rounded"
              required
            />
          </div>

          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-800">
              Telephone
            </label>
            <input
              id="telephone"
              type="text"
              value={formData.telephone}
              onChange={handleChange}
              className="w-full border text-black border-gray-400 px-4 py-2 bg-white rounded"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-800">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border text-black border-gray-400 px-4 py-2 bg-white rounded"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border text-black border-gray-400 px-4 py-2 bg-white rounded resize-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#432701] text-white px-6 py-2 rounded hover:bg-[#291a0e] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
