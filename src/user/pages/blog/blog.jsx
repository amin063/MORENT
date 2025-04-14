import React from 'react';

const blogPosts = [
  {
    id: 1,
    title: "Porsche 911 Carrera: The Ultimate Driving Experience",
    image: "https://link-to-image.com/image1.jpg",
    excerpt: "The Porsche 911 Carrera combines powerful performance and sleek design for the ultimate driving experience. In this post, we dive deep into what makes the 911 Carrera so special.",
    date: "April 10, 2025",
    tags: ["Porsche", "Performance", "Cars"],
    author: "John Doe",
  },
  {
    id: 2,
    title: "How to Choose Your Perfect Sports Car",
    image: "https://link-to-image.com/image2.jpg",
    excerpt: "Selecting the perfect sports car can be daunting. Here are some tips and tricks to help you decide which car suits your needs and style.",
    date: "April 15, 2025",
    tags: ["Sports Car", "Buying Guide", "Luxury"],
    author: "Jane Smith",
  },
  // Diğer blog yazıları burada...
];

const Blog = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Latest Blog Posts</h2>
        
        {/* Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map(post => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{post.title}</h3>
                <p className="text-gray-500 mt-2">{post.excerpt}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-600 text-sm">{post.date}</span>
                  <span className="text-blue-600 text-sm">{post.author}</span>
                </div>
                <div className="mt-4">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
