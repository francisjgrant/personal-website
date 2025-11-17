const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg mb-4">Francis Grant</p>
          {/* <p className="text-gray-400 flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-500" size={16} fill="currentColor" /> using React & Tailwind CSS
          </p> */}
          <p className="text-gray-500 text-sm mt-4">
            © 2025 Francis Grant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;