"use client";
import Layout from "@/components/Layout";

import { useState } from "react";

export default function Order() {
  const [fileName, setFileName] = useState("");

  return (
    <Layout>
      <section className="bg-gray-50 py-16 px-4 rounded-lg">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-2">Place Your Order</h1>
            <div className="h-1 w-24 bg-gray-300 mx-auto mb-4 rounded-full" />
            <p className="text-gray-600">
              Fill out the form below to begin your custom rock sphere order.
              We'll contact you with next steps.
            </p>
          </div>

          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm transition focus:ring-black focus:border-black hover:border-gray-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm transition focus:ring-black focus:border-black hover:border-gray-500"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Tell us about your rock
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                required
                placeholder="What kind of rock is it? Where did you find it? Any special story?"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm transition focus:ring-black focus:border-black hover:border-gray-500"
              />
            </div>

            {/* Upload section */}
            <div>
              <label
                htmlFor="photo"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Upload a Photo (optional)
              </label>
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                className="block w-full border border-gray-300 rounded-md p-3 shadow-sm cursor-pointer hover:border-gray-500 transition"
                onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
              />

              {fileName && (
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Selected file: <span className="font-medium">{fileName}</span>
                </p>
              )}
            </div>

            {/* Shipping Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Shipping Address
              </label>
              <textarea
                id="address"
                name="address"
                rows={3}
                required
                placeholder="Street, City, State, ZIP"
                className="mt-1 block w-full border border-gray-300 rounded-md p-3 shadow-sm transition focus:ring-black focus:border-black hover:border-gray-500"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-black text-white w-full py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition"
            >
              Submit Order
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
