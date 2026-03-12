const BlogCard = ({ blog }) => {
  return (
    <article className="bg-white shadow-md hover:shadow-xl transition rounded-lg overflow-hidden">

      {/* Image */}
      <div>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[260px] object-cover"
        />
      </div>

      <div className="p-6">

        {/* Meta */}
        <div className="text-sm text-neutral-500 mb-3">
          {blog.date} – by {blog.author}
        </div>

        {/* Title */}
        <h3 className="text-neutral-900 text-xl font-bold leading-snug mb-4">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 text-sm leading-relaxed mb-6">
          {blog.desc}
        </p>

        {/* CTA */}
        <button className="bg-red-600 text-white text-sm font-semibold px-6 py-3 hover:bg-red-500 transition">
          READ MORE
        </button>

      </div>

    </article>
  );
};

export default BlogCard;