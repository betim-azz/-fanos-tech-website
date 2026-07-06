export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      
      <h1 className="text-3xl font-bold mb-6">
        Contact Us
      </h1>

      <p className="text-gray-600 mb-10">
        Tell us what you are trying to solve. We will help you find the right solution.
      </p>

      <div className="space-y-3 mb-10">
        <p>📍 Addis Ababa, Ethiopia</p>
        <p>📞 +251 XX XXX XXXX</p>
        <p>✉️ info@fanostech.io</p>
      </div>

      <form className="space-y-4">
        <input className="w-full border p-3 rounded" placeholder="Name" />
        <input className="w-full border p-3 rounded" placeholder="Email" />
        <input className="w-full border p-3 rounded" placeholder="Subject" />
        <textarea className="w-full border p-3 rounded" rows={5} placeholder="Message" />

        <button className="bg-black text-white px-6 py-3 rounded">
          Send Message
        </button>
      </form>

    </section>
  );
} 