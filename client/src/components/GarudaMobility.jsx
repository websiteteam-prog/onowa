import Img1 from "../../public/assets/img_1.webp"
import Img2 from "../../public/assets/img_2.webp"
import Img3 from "../../public/assets/img_3.webp"


const GarudaMobility = () => {
  return (
    <section className="bg-[#f6f3ee] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Onowa Electric Mobility
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Ride smart. Go green. Live electric with Garuda electric scooters
            designed for modern city commuting.
          </p>
        </div>


        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE IMAGES */}
          <div className="grid grid-cols-2 gap-6">

            <img
              src={Img1}
              className="rounded-xl object-cover h-[260px] w-full shadow-md"
            />

            <img
              src={Img2}
              className="rounded-xl object-cover h-[260px] w-full shadow-md"
            />

            <img
              src={Img3}
              className="rounded-xl object-cover col-span-2 h-[260px] w-full shadow-md"
            />

          </div>


          {/* RIGHT SIDE CONTENT */}
          <div className="max-w-lg">

            <h3 className="text-4xl font-bold text-orange-600 leading-tight mb-6">
              G-PRO (SL) – Glide With Power
            </h3>

            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Effortless control, superior comfort, and multi-color choices.
              The G-PRO (SL) electric scooter is designed for modern riders who
              demand both performance and sustainability in their daily commute.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Built with advanced electric technology and a stylish modern design,
              Onowa scooters provide a smooth riding experience while reducing
              carbon emissions. Whether commuting to work or exploring the city,
              G-PRO ensures power, efficiency, and reliability.
            </p>

            {/* Buttons */}
            <div className="flex gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-md font-semibold transition">
                Read More
              </button>

              <button className="border border-orange-600 text-orange-600 px-8 py-4 rounded-md font-semibold hover:bg-orange-600 hover:text-white transition">
                View Specs
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}

export default GarudaMobility