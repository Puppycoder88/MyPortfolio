const Skills = () => {
  return (
    <div className="my-20 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-4">
         Skills & Technologies
      </h2>
      <p className="text-gray-400 mb-6 text-base md:text-lg">
        Tools I use to craft seamless, scalable, and modern web applications
      </p>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {[
          "React.js", "Tailwind CSS", "JavaScript", "Bootstrap",
          "Material UI", "API Integration", "MongoDB", "MySQL", "MS SQL Server",
          "Node.js", "Express.js", "Git & GitHub", "Postman", "Redux"
        ].map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm md:text-base font-medium shadow-sm hover:scale-105 transition-transform duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
