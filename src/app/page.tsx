import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center mt-12 bg-white py-16">
        <h1 className="text-5xl font-extrabold mb-4">
          Turn Your Rock Into Art
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Send us your sentimental rock and we'll shape it into a one-of-a-kind
          polished sphere—a timeless piece of personal art.
        </p>
        <Link
          href="/order"
          className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800 transition"
        >
          Order Your Sphere
        </Link>
      </section>

      {/* Gallery Section */}
      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-10">Past Work</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="/images/bluesphere.png"
            alt="Sphere 1"
            className="rounded-lg shadow-md"
          />
          <img
            src="/images/brownsphere.png"
            alt="Sphere 2"
            className="rounded-lg shadow-md"
          />
          <img
            src="/images/marblesphere.png"
            alt="Sphere 3"
            className="rounded-lg shadow-md"
          />
          <img
            src="/images/redsphere.png"
            alt="Sphere 4"
            className="rounded-lg shadow-md"
          />
        </div>
      </section>
      <hr className="my-8 border-t border-gray-300" />

      <section className="mt-24 bg-white py-16">
        <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <div>
            <img
              src="/images/how1.png"
              alt="Send us your rock"
              className="rounded-lg mb-4 mx-auto h-40 object-cover shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">1. Send Us Your Rock</h3>
            <p className="text-gray-600">
              Ship us a stone that holds meaning to you—any shape, any size.
            </p>
          </div>
          <div>
            <img
              src="/images/how2.png"
              alt="We shape it"
              className="rounded-lg mb-4 mx-auto h-40 object-cover shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">2. We Shape It</h3>
            <p className="text-gray-600">
              We carefully cut, grind, polish, and perfect it into a smooth
              sphere.
            </p>
          </div>
          <div>
            <img
              src="/images/how3.png"
              alt="Receive art"
              className="rounded-lg mb-4 mx-auto h-40 object-cover shadow-md"
            />
            <h3 className="text-xl font-semibold mb-2">3. You Receive Art</h3>
            <p className="text-gray-600">
              We send you back a finished piece—ready to display or gift.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mt-24 text-center">
        <h2 className="text-3xl font-bold mb-6">Why RockSphere?</h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Each sphere is handmade by an experienced craftsman, with care,
          precision, and meaning in mind. This isn’t mass-produced—it’s
          memory-preserved.
        </p>
      </section>

      {/* Final CTA */}
      <section className="text-center mt-20 mb-24">
        <Link
          href="/order"
          className="bg-black text-white px-8 py-4 rounded-lg text-xl hover:bg-gray-800 transition"
        >
          Start Your Order
        </Link>
      </section>
    </Layout>
  );
}
