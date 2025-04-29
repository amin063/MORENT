import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const menu = [
    {
      name: "About",
      links: ["How it works", "Event", "Contact"],
    },
    {
      name: "Community",
      links: ["Baku Rental", "FAQ", "Invite a friend"],
    },
    {
      name: "Socials",
      links: ["Discord", "Instagram", "Twitter"],
    },
  ];

  return (
    <footer className="w-full bg-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* LOGO & DESCRIPTION */}
        <div>
          <Link to="/" className="text-primary font-bold text-3xl text-blue-600">
            MORENT
          </Link>
          <p className="text-gray-600 mt-4 text-sm">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>

        {/* MENU LINKS */}
        {menu.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold text-lg mb-4 text-gray-700">{item.name}</h3>
            <ul className="space-y-3">
              {item.links.map((link, idx) => (
                <li key={idx}>
                  {/* Dynamically render links */}
                  {link === "How it works" ? (
                    <Link
                      to="/how"
                      className="text-gray-500 hover:text-blue-600 transition"
                    >
                      {link}
                    </Link>
                  ) : link === "Event" ? (
                    <Link
                      to="/event"
                      className="text-gray-500 hover:text-blue-600 transition"
                    >
                      {link}
                    </Link>
                  ) : link === "Contact" ? (
                    <Link
                      to="/contact"
                      className="text-gray-500 hover:text-blue-600 transition"
                    >
                      {link}
                    </Link>
                  ) : link === "Baku Rental" ? (
                    <Link
                      to="/baku"
                      className="text-gray-500 hover:text-blue-600 transition"
                    >
                      {link}
                    </Link>
                  ) : link === "FAQ" ? (
                    <Link
                      to="/faq"
                      className="text-gray-500 hover:text-blue-600 transition"
                    >
                      {link}
                    </Link>
                  ) : link === "Invite a friend" ? (
                    <Link
                      to="/invite"
                      className="text-gray-500 hover:text-blue-600 transition"
                    >
                      {link}
                    </Link>
                  ) : (
                    <a
                      href="#"
                      className="text-gray-500 hover:text-blue-600 transition"
                    >
                      {link}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* FOOTER BOTTOM */}
      <hr className="my-8 border-gray-300" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
        <p>© {new Date().getFullYear()} MORENT. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-blue-600 transition">
            Privacy & Policy
          </Link>
          <Link to="/terms" className="hover:text-blue-600 transition">
            Terms & Condition
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
