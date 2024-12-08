import React from "react";
import Wrap from "./Wrap";

const Footer: React.FC = () => {
  return (
    <Wrap>
      <footer className="bg-white border-t border-gray-200 py-16 sm:py-32">
        <div>
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Vision */}
            <div className="pl-8 ml-8 mr-10 mb-8">
              <h1 className="md:text-2xl text-lg font-bold text-blue-500">
                MORENT
              </h1>
              <p className="text-sm text-gray-600 mt-2">
                Our vision is to provide convenience <br />and help increase your
                sales business.
              </p>
            </div>

            {/* About Section */}
            <div className="ml-20 md:ml-0 sm:ml-16 lg:mt-0 lg:ml-64 md:mt-28 ">
              <h2 className="text-lg font-semibold text-gray-800">About</h2>
              <br />
              <ul className="mt-2">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    How it works
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Featured
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Partnership
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Business Relation
                  </a>
                </li>
                <br />
              </ul>
            </div>

            {/* Community Section (Moved next to About section) */}
            <div className="ml-20  sm:ml-16 mt-8 sm:relative bottom-52 ml-0 left-48 md:mt-52  sm:mt-0">
              <h2 className="text-lg font-semibold text-gray-800">Community</h2>
              <br />
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Events
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Blog
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Podcast
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Invite a friend
                  </a>
                </li>
              </ul>
            </div>

            {/* Socials Section */}
            <div className=" ml-20 mt-8 md:mt-0 md:ml-48">
              <h2 className="text-lg font-semibold text-gray-800 ">Socials</h2>
              <br />
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Discord
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Instagram
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Twitter
                  </a>
                </li>
                <br />
                <li>
                  <a href="#" className="text-sm text-gray-600 hover:text-blue-500">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t border-gray-200 pt-4">
            <p className="text-sm text-black relative top-16 mr-20 md:mr-0 lg:ml-3 ">© 2022 MORENT. All rights reserved</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-black hover:text-blue-500 md:mr-0 mr-14">
                Privacy & Policy
              </a>
              <a href="#" className="text-sm text-black hover:text-blue-500">
                Terms & Condition
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Wrap>
  );
};

export default Footer;
