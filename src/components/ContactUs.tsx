import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs.send(
      'service_e3tp6da',
      'template_odb12zf',
      formData,  // This should match your template variables
      'W2Pnfo9J2SeNE6fWb'
    ).then(response => {
      console.log('Email sent successfully!', response);
      alert('Message sent successfully!');
    }).catch(error => {
      console.error('Error sending email:', error);
      alert('Failed to send message. Try again later.');
    });
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-10">
      <div className="w-full max-w-md bg-black rounded-lg shadow-md p-6 border-2 border-blue-500 bg-clip-border mt-20">
        <h2 className="text-5xl font-bold text-gray-200 mb-6 mt-10">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-5">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded p-2 mt-1"
              required
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded p-2 mt-1"
              required
            />
          </div>

          <div className="flex flex-col mb-5">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded p-2 mt-1 text-black" // Added text-black to ensure black text
            rows={4}
            required
          ></textarea>
        </div>


          <button type="submit" className="bg-gradient-to-r from-cyan-300 to-blue-500 text-white p-2 rounded-lg hover:bg-blue-100 hover:to-blue-600 transition ease-in-out duration-150">Submit</button>
        </form>
      </div>

      <div className="w-full max-w-md bg-black rounded-lg shadow-md p-6 border-2 border-blue-500 bg-clip-border mt-10">
        <h2 className="text-2xl font-bold text-gray-200 mb-4">Subscribe to Our Newsletter</h2>

        <form className="flex flex-col">
          <input
            placeholder="Enter your email address"
            className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            type="email"
          />

          <button
            className="bg-gradient-to-r from-cyan-300 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-blue-100 hover:to-blue-600 transition ease-in-out duration-150"
            type="submit"
          >
            Subscribe
          </button>
        </form>

        <div className="flex justify-center mt-4">
          <a className="text-sm text-gray-400 hover:underline" href="#">Privacy Policy</a>
        </div>
      </div>

       
<ul className="flex justify-center mt-20 mb-10 space-x-20">
  <li>
    <a
      href='https://www.linkedin.com/company/sanction-guard '
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-9 h-10"
      >
        <path
          clip-rule="evenodd"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        ></path>
      </svg>
    </a>
  </li>
  <li>
    <a
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10"
      >
        <path
          clip-rule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </a>
  </li>
  
  <li>
    <a
      href='https://github.com/Sanction-Guard/SanctionGuard '
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-10 h-10"
      >
        <path
          clip-rule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          fill-rule="evenodd"
        ></path>
      </svg>
    </a>
  </li>
  
</ul>

    </div>
  );
};

export default ContactForm;
