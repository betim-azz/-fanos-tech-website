export default function ContactSection() {
  return (
    <section className="w-full py-20 bg-white" id="contact">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            Let’s Talk About Your Project
          </h2>

          <p className="text-gray-600 mb-6">
            Tell us what you are trying to solve. We will help you find the right solution.
          </p>

          <p>📍 Addis Ababa, Ethiopia</p>
          <p>📞 +251 XX XXX XXXX</p>
          <p>✉️ info@fanostech.io</p>
        </div>

        <form className="space-y-4 bg-gray-50 p-6 rounded-lg">
          <input className="w-full p-3 border rounded" placeholder="Name" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <input className="w-full p-3 border rounded" placeholder="Subject" />
          <textarea className="w-full p-3 border rounded" placeholder="Message" rows={5} />

          <button className="w-full bg-black text-white py-3 rounded">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}