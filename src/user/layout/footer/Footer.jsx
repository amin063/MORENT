import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const menu = [
    {
      name: 'About',
      links: ['How it works', 'Featured', 'Partnership', 'Business Relation'],
    },
    {
      name: 'Community',
      links: ['Events', 'Blog', 'Podcast', 'Invite a friend'],
    },
    {
      name: 'Socials',
      links: ['Discord', 'Instagram', 'Twitter', 'Facebook'],
    },
  ];

  return (
    <footer className='w-full bg-gray-100 py-10 px-5 md:px-20'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* LOGO & DESCRIPTION */}
        <div>
          <Link to='/' className='text-primary font-bold text-3xl'>MORENT</Link>
          <p className='text-gray-600 mt-4 text-sm'>
            Our vision is to provide convenience and help increase your sales business.
          </p>
        </div>

        {/* MENU LINKS */}
        {menu.map((item, index) => (
          <div key={index}>
            <h3 className='font-semibold text-lg mb-4'>{item.name}</h3>
            <ul className='space-y-3'>
              {item.links.map((link, idx) => (
                <li key={idx}>
                  <a href='#' className='text-gray-500 hover:text-primary transition'>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* FOOTER BOTTOM */}
      <hr className='my-8 border-gray-300' />
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm'>
        <p>© {new Date().getFullYear()} MORENT. All rights reserved.</p>
        <div className='flex space-x-6 mt-4 md:mt-0'>
          <a href='#' className='hover:text-primary transition'>Privacy & Policy</a>
          <a href='#' className='hover:text-primary transition'>Terms & Condition</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
