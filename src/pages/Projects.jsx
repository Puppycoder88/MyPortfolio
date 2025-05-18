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
          },
          {
            title: "Know2Parking App",
            stack: "React.js • Tailwind CSS • Mobile Responsive",
          },
          {
            title: "Event Management System App",
            stack: "React.js • Tailwind CSS • Node.js • MongoDB • Authentication",
          },
          // You can uncomment this if you want to add Metlonics later
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
            <p className="text-gray-600 text-sm">{project.stack}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
