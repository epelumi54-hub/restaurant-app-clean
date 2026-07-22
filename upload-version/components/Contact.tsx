export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Visit Us
        </h2>

        <p className="mb-4">
          9 Keffi st,off Awolowo Road, Ikoyi, Eti Osa 101233, Lagos
        </p>

        <p className="mb-6">
          Open: 12PM – 11PM Daily
        </p>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/2349125984938"
          className="bg-red-600 px-6 py-3 rounded-lg inline-block mb-10"
        >
          Chat on WhatsApp
        </a>

        {/* Google Map */}
        <div className="w-full h-[300px] rounded-xl overflow-hidden">
          <iframe
            src="https://maps.google.com/maps?q=Victoria%20Island%20Lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}