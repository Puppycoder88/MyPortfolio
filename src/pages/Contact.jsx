/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="text-center my-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
       Contact Me
      </h2>
      <p className="text-gray-400 text-base md:text-lg mb-6">
        Let's connect! Feel free to reach out for collaboration, or opportunities.
      </p>

      <div className="flex flex-col items-center space-y-3 mb-6">
        <a
          href="mailto:jaingarima1795@gmail.com"
          className="text-blue-500 hover:underline text-lg font-medium"
        >
          📩 jaingarima1795@gmail.com
        </a>

        <a
          href="https://linkedin.com/in/garima-jain-3577a1247"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-lg font-medium"
        >
          🔗 Connect on LinkedIn
        </a>

        <a
          href="https://github.com/Puppycoder88"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline text-lg font-medium"
        >
          💻 Explore my GitHub
        </a>
      </div>

      <a
        href="/Resume-Garima Jain.pdf" 
        download="Resume-Garima Jain.pdf"
        className="inline-block px-6 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-700 transition duration-300"
      >
        📄 Download Resume
      </a>
    </div>
  );
};

export default Contact;
