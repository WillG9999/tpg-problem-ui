import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 border-t border-gray-700">
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} ProbUI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
