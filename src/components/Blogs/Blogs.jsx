import React from "react";
import Blogs1 from "../../assets/blogs/blog1.jpg";
import Blogs2 from "../../assets/blogs/blog2.jpg";
import Blogs3 from "../../assets/blogs/blog3.jpg";
import Blogs4 from "../../assets/blogs/blog4.jpg";

const BlogsData = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corrupti doloremque optio nihil quis temporibus saepe cum quaerat veritatis accusantium.",
    link: "#",
    img: Blogs1,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corrupti doloremque optio nihil quis temporibus saepe cum quaerat veritatis accusantium.",
    link: "#",
    img: Blogs2,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corrupti doloremque optio nihil quis temporibus saepe cum quaerat veritatis accusantium.",
    link: "#",
    img: Blogs3,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero corrupti doloremque optio nihil quis temporibus saepe cum quaerat veritatis accusantium.",
    link: "#",
    img: Blogs4,
  },
];

const Blogs = () => {
  return (
    <section className="bg-gray-50">
      <div className="container py-14">
        <h1 className="text-3xl font-bold text-center font-poppins pb-8">
          Blogs
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {BlogsData.map((data) => (
            <div
              key={data.id}
              className="flex flex-col items-center justify-center gap-4 p-5 max-w-[300px] mx-auto shadow-lg rounded-md bg-white hover:-translate-y-2 duration-300"
            >
              <img src={data.img} alt="" className="w-full h-48 object-cover rounded-md" />
              <div className="space-y-2 text-center">
                <h1 className="text-xl font-bold line-clamp-2">{data.title}</h1>
                <p className="line-clamp-2 text-gray-600">{data.desc}</p>
                <a
                  href={data.link}
                  className="text-[#e33343] font-semibold hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
