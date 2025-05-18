import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10 px-10 bottom-0">
      <div className=" mx-auto text-center">
        {/* Professional Sign-off */}
        <h3 className="text-xl font-semibold my-3">Thanks for visiting!</h3>

        <p className="text-sm text-gray-400 mb-6">
          A portfolio by Garima Jain — built with React & Tailwind CSS
        </p>

        {/* Footer Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <p className="text-xs text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Garima Jain. All rights reserved.
          </p>

          <a
            href="#top"
            title="Back to top"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-500 transition-transform duration-300 hover:scale-110 animate-bounce"
          >
            <ArrowCircleUpIcon fontSize="medium" />
            <span className="hidden sm:inline text-sm font-medium">Back to Top</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
