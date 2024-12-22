import Navbar from "../components/navbar/navbar";
import phone from "../assets/phone.svg";
import location from "../assets/location.svg";
import gmail from "../assets/gmail.svg";

export default function ContactUs() {
  return (
    <section className="w-screen h-full flex flex-col items-center gap-8 overflow-x-hidden scrollbar-hide bg-highlight_background">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full mt-16 flex flex-col items-center gap-8">
        {/* Contact Form Section */}
        <section className="w-full bg-terinary p-8 flex flex-col items-center gap-6">
          <p className="text-3xl font-bold text-important_text">Contact Us</p>
          <form className="w-full max-w-3xl flex flex-col gap-4">
            {/* Name */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-lg font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                required
              />
            </div>
            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-lg font-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email Address"
                className="px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                required
              />
            </div>
            {/* Phone Number */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-lg font-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Your Phone Number"
                className="px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                required
              />
            </div>
            {/* Purpose of Contact */}
            <div className="flex flex-col">
              <label htmlFor="purpose" className="text-lg font-semibold">
                Purpose of Contact
              </label>
              <select
                id="purpose"
                className="px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                required
              >
                <option value="" disabled selected>
                  Select Purpose
                </option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            {/* Message */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                rows="5"
                className="px-4 py-2 rounded-md border-2 border-gray-300 focus:ring-2 focus:ring-primary outline-none"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:shadow-md focus:ring-2 focus:ring-primary"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* Contact Details Section */}
        <section className="w-full p-8 flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Address Card */}
            <div className="bg-important_text text-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
              <img src={location} alt="Location" className="w-12 h-12" />
              <p className="text-lg font-bold">Address</p>
              <p className="text-sm text-center">
                123 Main Street, <br />
                Suite 456, <br />
                Your City, Your State, 12345
              </p>
            </div>
            {/* Phone Card */}
            <div className="bg-primary text-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
              <img src={phone} alt="Phone" className="w-12 h-12" />
              <p className="text-lg font-bold">Phone</p>
              <p className="text-sm">+1 (123) 456-7890</p>
            </div>
            {/* Email Card */}
            <div className="bg-secondary text-white p-6 rounded-lg shadow-lg flex flex-col items-center gap-4">
              <img src={gmail} alt="Email" className="w-12 h-12" />
              <p className="text-lg font-bold">Email</p>
              <p className="text-sm">contact@ourcompany.com</p>
            </div>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="w-full flex flex-col items-center">
          <p className="text-2xl font-bold mb-4 text-important_text">
            Our Location
          </p>
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345097995!2d-122.4203219846813!3d37.77851987975979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c9d9d9b0b%3A0x45697b8a3c39c4e3!2s123%20Main%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA!5e0!3m2!1sen!2sin!4v1678301535805!5m2!1sen!2sin"
            className="w-full h-64 lg:h-96 rounded-lg shadow-lg"
            frameBorder="0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </section>
      </main>
    </section>
  );
}
