import React from "react";

const blogs = [
  {
    title: "Road Trip Checklist: 3 Ways to Get Your Car Ready for a Road Trip",
    date: "12 May, 2022",
    readTime: "6 min read",
    description:
      "Don’t sacrifice your safety for adventure this summer. Here are three ways to get your car ready for a road trip.",
    tags: ["checklist", "maintenance", "engines"],
  },
  {
    title: "Is It Safe to Buy Used Auto Parts Online?",
    date: "14 June, 2022",
    readTime: "7 min read",
    description:
      "When it’s time to replace a part to keep your vehicle on the road, you’ll have to decide between getting new and used auto parts. Find out if it’s safe to get used replacement car parts online!",
    tags: ["buy online", "engines", "auto parts"],
  },
  {
    title: "9 Essential Engine Maintenance Tips for your Car",
    date: "14 Oct, 2022",
    readTime: "7 min read",
    description:
      "The Essential Maintenance tips and advice to keep your engine in good health and to increase its lifespan.",
    tags: ["tips", "engines", "maintenance"],
  },

  {
    title: "How to Choose the Right Used Auto Parts Supplier",
    date: "20 Dec, 2022",
    readTime: "5 min read",
    description:
      "Choosing the right used auto parts supplier is crucial for ensuring quality, reliability, and value. Here are some tips to help you make the best choice.",
    tags: ["supplier", "auto parts", "buy online"],
  },
  {
    title: "Top 5 Benefits of Using Used Auto Parts",
    date: "10 Jan, 2023",
    readTime: "6 min read",
    description:
      "Using used auto parts can offer several advantages, including cost savings, environmental benefits, and access to rare components. Here are the top 5 benefits of opting for used auto parts.",
    tags: ["benefits", "auto parts", "environment"],
  },
];

const BlogSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Latest Blogs</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {blog.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                {blog.date} • {blog.readTime}
              </p>
              <p className="text-gray-700 mb-4">{blog.description}</p>
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
