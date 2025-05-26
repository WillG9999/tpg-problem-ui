import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="text-center text-sm">
        &copy; {new Date().getFullYear()} ProbUI. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
