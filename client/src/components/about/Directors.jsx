import Img1 from "../../../public/assets/men_1.avif"
import Img2 from "../../../public/assets/men_2.avif"
import Img3 from "../../../public/assets/men_3.avif"

const directors = [
  {
    name: "Ashish Rajdev",
    exp: "15+ Experience",
    img: Img1
  },
  {
    name: "Rahul Sharma",
    exp: "12+ Experience",
    img: Img2
  },
  {
    name: "Vikram Singh",
    exp: "10+ Experience",
    img: Img3
  }
]

const Directors = () => {
  return (
    <section className="py-20 bg-white text-center">

      <h2 className="text-3xl font-bold mb-12">
        OUR TEAM
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {directors.map((item, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">

            <img
              src={item.img}
              className="w-full h-80 object-cover"
            />
            <div className="bg-orange-50 text-gray-800 py-4">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-600">{item.exp}</p>
            </div>

          </div>
        ))}

      </div>

    </section>
  )
}

export default Directors