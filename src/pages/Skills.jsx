const Skills = () => {
    return (
      <div className="my-12 text-center px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
        <div className="flex flex-wrap justify-center gap-3 mt-4 md:gap-4">
          {[
            "React.js", "Tailwind CSS", "JavaScript", "Bootstrap",
            "Material UI", "MongoDB", "MySQL", "MsSQL Server", "Node.js", "Express.js", "GitHub"
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-gray-700 text-white rounded-lg text-sm md:text-base"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Skills;
  