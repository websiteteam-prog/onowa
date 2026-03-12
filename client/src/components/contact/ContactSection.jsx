import { Phone, MapPin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-[#f6f2ea]">
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT */}
        <div className="bg-white border border-neutral-200 shadow-lg rounded-2xl p-12">

          <h3 className="text-neutral-800 text-[32px] font-extrabold mb-6">
            Contact info
          </h3>

          <p className="text-neutral-600 text-[15px] leading-relaxed mb-12 max-w-md">
            We pride ourselves on being a helping hand for people during good
            days, bad days and everything in between.
          </p>

          <div className="space-y-10">

            <div className="flex gap-4 items-start">
              <Phone size={20} className="text-red-600 mt-1" />
              <div>
                <p className="text-neutral-500 text-sm">
                  Need help? Talk to an Expert
                </p>
                <p className="text-neutral-800 text-[20px] font-semibold mt-1">
                  (+88) 1900 888 666
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <MapPin size={20} className="text-red-600 mt-1" />
              <div>
                <p className="text-neutral-500 text-sm mb-1">
                  Address
                </p>
                <p className="text-neutral-700 text-[15px]">
                  1095 Howard Street,<br />
                  San Francisco, USA
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Mail size={20} className="text-red-600 mt-1" />
              <div>
                <p className="text-neutral-500 text-sm mb-1">
                  Email
                </p>
                <p className="text-neutral-700 text-[15px]">
                  info@autobike.com
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div>

          <span className="inline-block bg-red-600 text-white text-xs font-semibold px-4 py-2 mb-4 rounded-lg">
            CONTACT
          </span>

          <h2 className="text-neutral-800 text-5xl font-extrabold mb-6">
            GET IN TOUCH
          </h2>

          <p className="text-neutral-600 text-sm mb-12 max-w-xl">
            We welcome and value your feedback. Use the form below to send us
            your comments, questions or concerns.
          </p>

          <form className="space-y-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white border border-neutral-300 rounded-xl px-6 py-4 text-sm outline-none focus:border-red-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white border border-neutral-300 rounded-xl px-6 py-4 text-sm outline-none focus:border-red-600"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-white border border-neutral-300 rounded-xl px-6 py-4 text-sm outline-none resize-none focus:border-red-600"
            />

            <button
              type="submit"
              className="bg-red-600 text-white px-14 py-4 text-sm font-semibold rounded-xl hover:bg-red-500 transition"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;