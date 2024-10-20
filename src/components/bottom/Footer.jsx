import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand and About */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">Job Portal</h2>
            <p className="text-gray-400 mb-4">
              Unlock Your Career Potential: Find Your Dream Job Today.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Latest Blog */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Latest blog</h2>
            <ul>
              <li className="mb-4">
                <a href="https://medium.com/@faizmohd12511251/creating-custom-annotations-in-java-with-reflection-and-aop-135e6920668e" className="text-gray-400 hover:text-gray-300">
                  Creating Custom Annotations in Java with Reflection and AOP
                </a>
              </li>
              <li className="mb-4">
                <a href="https://medium.com/@faizmohd12511251/get-started-with-spring-security-6-xx-25845412a386" className="text-gray-400 hover:text-gray-300">
                  Get started with spring security 6.xx
                </a>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Company</h2>
            <ul>
              <li className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  About company
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Company services
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Job opportunities
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  Creative people
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-white text-lg font-bold mb-4">Contact Info</h2>
            <ul>
              <li className="mb-4">
                <a
                  href="mailto:info@yourmail.com"
                  className="text-gray-400 hover:text-gray-300"
                >
                  devs@jobportal.com
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="tel:+8855434565"
                  className="text-gray-400 hover:text-gray-300"
                >
                  +91 8519919251
                </a>
              </li>
              <li className="mb-4">
                <p className="text-gray-400">500092 - Hyderabad, Telangana, India</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2025 Job Portal. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300">
              Privacy policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300">
              Legal notice
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-300">
              Terms of service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
