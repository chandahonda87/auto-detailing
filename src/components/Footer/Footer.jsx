import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="bg-blue-200 border-t border-b py-6 lg:py-8 footer">
    <div className="max-w-screen-xl mx-auto px-4">
      <div className="md:flex md:justify-between items-center">
        {/* Brand Name and Instagram Link */}
        <div className="mb-6 md:mb-0 flex items-center space-x-4">
            <h1 className="poetsen-one text-xl font-bold">DM for more info</h1>
          <a
            href="https://www.instagram.com/cleanwashdetailing619?igsh=YTQwZjQ0NmI0OA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-500 transition-colors"
          >
            <i className="fab fa-instagram text-xl" aria-hidden="true"></i>
            <h2 className="ml-2">BearWolf Detailing</h2>
          </a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer