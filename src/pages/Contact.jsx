const Contact = () => {
  return (
    <div className="text-center my-12">
      <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
      
      <div className="flex flex-col items-center space-y-2">
        <a 
          href="mailto:jaingarima1795@gmail.com" 
          className="text-blue-600 hover:underline"
        >
          📩 jaingarima1795@gmail.com
        </a>
        
        <a 
          href="https://linkedin.com/in/garima-jain-3577a1247" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          🔗 LinkedIn
        </a>
        
        <a 
          href="https://github.com/Puppycoder88" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          💻 GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
