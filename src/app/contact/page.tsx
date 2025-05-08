import Layout from "@/components/Layout";
import { FaEnvelope } from "react-icons/fa"; // Optional icon (install react-icons)

export default function Contact() {
  return (
    <Layout>
      <section className="bg-gray-50 py-16 px-4 rounded-lg">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <div className="text-center mb-10">
            <div className="text-4xl mb-4 text-gray-700">
              <FaEnvelope className="inline-block" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
            <div className="h-1 w-24 bg-gray-300 mx-auto mb-4 rounded-full" />
            <p className="text-gray-600">
              We&apos;d love to hear from you. Fill out the form below and
              we&apos;ll get back to you shortly.
            </p>
          </div>

          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 transition focus:ring-black focus:border-black hover:border-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 transition focus:ring-black focus:border-black hover:border-gray-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 transition focus:ring-black focus:border-black hover:border-gray-500"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white w-full py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
