import BlogCard from "./BlogCard";
import Img from "../../../public/assets/harley-davidson.jpg"
import Img2 from "../../../public/assets/abc.avif"
import Img3 from "../../../public/assets/abcd.webp"

const blogs = [
  {
    id: 1,
    image: Img,
    date: "May 3, 2023",
    author: "Reynold Hobbs",
    title: "On Her Bike Through Tanzania And Zanzibar",
    desc:
      "During the last ice age, the land surface of Drenthe was covered with glaciers and ice...",
  },
  {
    id: 2,
    image: Img2,
    date: "May 3, 2023",
    author: "Reynold Hobbs",
    title: "Mountain Weather Beats Route Planning. Always",
    desc:
      "Some visit the place to climb and pass the Watzmann, a mountain whose striking summit towers...",
  },
  {
    id: 3,
    image: Img3,
    date: "May 3, 2023",
    author: "Reynold Hobbs",
    title: "America – Winter Riding Routes That Are Awesome!",
    desc:
      "Where the Expedition truly distinguishes itself from the Norden 901 is in componentry...",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-[#f6f2ea] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-16">

          <div>
            <span className="inline-block bg-red-600 text-white text-xs font-semibold px-4 py-2 mb-4">
              OUR BLOG
            </span>

            <h2 className="text-neutral-900 text-4xl font-extrabold tracking-wide">
              LATEST NEWS
            </h2>
          </div>

          <button className="text-neutral-900 text-sm font-semibold flex items-center gap-2 hover:text-red-600 transition">
            VIEW ALL POST →
          </button>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogSection;