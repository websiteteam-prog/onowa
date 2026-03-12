const TermsConditions = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-neutral-300">
      <h1 className="text-4xl font-bold text-white mb-2">
        Terms & Conditions
      </h1>
      <p className="text-sm text-neutral-500 mb-10">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

      <div className="space-y-10 leading-relaxed">

        <p>
          By accessing or using <span className="text-white">AutoBike</span>,
          you agree to comply with and be bound by the following terms and
          conditions.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            User Eligibility
          </h2>
          <p>
            You must be at least 18 years old to use this website and its
            services.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Account Responsibility
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and all activities under your account.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Product & Pricing Information
          </h2>
          <p>
            Product descriptions, pricing, and availability may change at any
            time without prior notice.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Payments & Orders
          </h2>
          <p>
            All payments must be completed through authorized payment methods.
            Order confirmation does not guarantee availability.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Intellectual Property
          </h2>
          <p>
            All content on this website is the intellectual property of
            AutoBike and may not be copied or reused without permission.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Limitation of Liability
          </h2>
          <p>
            AutoBike shall not be liable for any indirect, incidental, or
            consequential damages arising from the use of this website.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Governing Law
          </h2>
          <p>
            These terms are governed by and interpreted in accordance with the
            laws of India.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;