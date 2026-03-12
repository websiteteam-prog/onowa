const features = [
  {
    title: "Unmatched Power",
    desc: "High performance electric motor for smooth city rides."
  },
  {
    title: "Speed That Excites",
    desc: "Optimized speed and efficiency for modern commuters."
  },
  {
    title: "Comfort & Style",
    desc: "Ergonomic design with premium look and feel."
  },
  {
    title: "Long Battery Life",
    desc: "Advanced battery technology for longer rides."
  },
  {
    title: "Express Your Style",
    desc: "Multiple color options for every personality."
  },
  {
    title: "Safety First",
    desc: "Reliable braking system and stable riding experience."
  }
]

const WhyChoose = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800">
            Why Choose Onowa?
          </h2>

          <p className="text-gray-600 mt-3">
            Smart electric mobility built for the future of urban transport.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8f6f2] p-6 rounded-lg shadow hover:shadow-lg transition"
            >

              <h4 className="font-semibold text-lg mb-2">
                {item.title}
              </h4>

              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  )
}

export default WhyChoose