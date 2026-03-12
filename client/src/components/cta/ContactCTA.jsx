import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section
      className="
        relative w-full
        h-[520px]
        bg-[url('/assets/contact-bg.jpg')]
        bg-cover bg-center
      "
    >

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-200/90 via-white/80 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl pt-6">

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-neutral-900 leading-[1.15] mb-6">
            FREE SERVICE FOR PREMIUM <br /> MEMBERS
          </h2>

          {/* Description */}
          <p className="text-neutral-700 leading-relaxed mb-10">
            If someone’s not there to take your call, you can wait and the
            automated voice will prompt you to leave a message. We will get
            back to you as soon as possible.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-10">

            <Link
              to="/contact"
              className="
                inline-flex items-center justify-center
                bg-red-600
                px-8 py-4
                text-white font-semibold
                rounded-md
                hover:bg-red-500
                transition
              "
            >
              CONTACT US
            </Link>

            <div>
              <p className="text-sm text-neutral-500 mb-1">
                Call Us:
              </p>

              <p className="text-xl font-bold text-red-600">
                (+012) 33 5566 8888
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;