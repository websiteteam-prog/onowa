const PrivacyPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-neutral-300">
      <h1 className="text-4xl font-bold text-white mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-neutral-500 mb-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="space-y-10 leading-relaxed text-base">

        {/* INTRO */}
        <p>
          At <span className="text-white font-medium">AutoBike</span>, your
          privacy is extremely important to us. This Privacy Policy explains
          how we collect, use, protect, and handle your personal information
          when you use our website or services.
        </p>

        {/* SCOPE */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Scope of This Policy
          </h2>
          <p>
            This policy applies to all users who visit our website, book test
            rides, purchase products, or contact us through any form of
            communication.
          </p>
        </div>

        {/* DATA COLLECTION */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Information We Collect
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Personal details such as name, email address, and phone number</li>
            <li>Billing and delivery address (only for order fulfillment)</li>
            <li>Technical data such as IP address, browser type, and device</li>
          </ul>
        </div>

        {/* DATA USAGE */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            How We Use Your Information
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>To process orders and payments</li>
            <li>To schedule test rides and services</li>
            <li>To provide customer support</li>
            <li>To improve website performance and user experience</li>
          </ul>
        </div>

        {/* COOKIES */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Cookies & Tracking
          </h2>
          <p>
            We use cookies to enhance your browsing experience. Cookies help us
            understand user behavior and improve our services. You can disable
            cookies through your browser settings.
          </p>
        </div>

        {/* DATA SHARING */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Data Sharing & Security
          </h2>
          <p>
            We may share your information with trusted third-party services such
            as payment gateways or delivery partners. We never sell your
            personal data and ensure industry-standard security measures.
          </p>
        </div>

        {/* USER RIGHTS */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Your Rights
          </h2>
          <p>
            You have the right to access, update, or request deletion of your
            personal data by contacting our support team.
          </p>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Contact Us
          </h2>
          <p>
            If you have any questions regarding this Privacy Policy, contact us
            at <span className="text-white">info@autobike.com</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;