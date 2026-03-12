const RefundReturnPolicy = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-neutral-300">
      <h1 className="text-4xl font-bold text-white mb-2">
        Return & Refund Policy
      </h1>
      <p className="text-sm text-neutral-500 mb-10">
        Last updated: {new Date().toLocaleDateString()}
      </p>

      <div className="space-y-10 leading-relaxed">

        <p>
          Our return and refund policy is designed to be transparent and fair,
          ensuring complete customer satisfaction.
        </p>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Return Eligibility
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Product must be unused and in original packaging</li>
            <li>Return request within 7 days of delivery</li>
            <li>Valid invoice or proof of purchase required</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Non-Returnable Items
          </h2>
          <p>
            Used products, customized items, and clearance sale items are not
            eligible for return.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Refund Process
          </h2>
          <p>
            Once the return is approved, the refund will be processed to the
            original payment method within 5–7 business days.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Shipping Charges
          </h2>
          <p>
            Shipping costs are non-refundable unless the return is due to a
            damaged or incorrect item.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Contact Support
          </h2>
          <p>
            For refund or return related queries, contact us at{" "}
            <span className="text-white">support@autobike.com</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default RefundReturnPolicy;