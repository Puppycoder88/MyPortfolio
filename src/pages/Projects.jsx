/* eslint-disable react/no-unescaped-entities */
const Projects = () => {
  return (
    <div className="my-20 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-300 mb-2">
        Projects
      </h2>
      <p className="text-center text-gray-400 text-base md:text-lg mb-8">
        A glimpse into the web solutions I've built using modern technologies
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {[
          {
            title: "Gemba InfoTech Website",
            stack: "React.js • Tailwind CSS • Node.js • MySQL • Nodemailer • Responsive",
            link: "https://gembainfotech.com/",
          },
          {
            title: "Know2Parking App",
            stack: "React.js • Tailwind CSS • Mobile Responsive",
            link: "https://know2parking.com/",
          },
          {
            title: "GS Technolution",
            stack: "HTML, CSS, JavaScript, Mobile Responsive",
            link: "https://puppycoder88.github.io/GS-Technolution/",
          },
          {
            title: "Event Management System App",
            stack: "React.js • Tailwind CSS • Node.js • MongoDB • Authentication",
          },
          // Uncomment if needed
          // {
          //   title: "Metlonics Clone Website",
          //   stack: "React.js • Tailwind CSS • Mobile Responsive",
          // },
        ].map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 hover:bg-white transition duration-300 p-6 rounded-2xl shadow-md border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-1">{project.stack}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm underline"
              >
                Visit
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


