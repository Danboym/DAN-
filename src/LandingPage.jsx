import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Dev Portfolio</h1>
        <nav className="space-x-4 hidden md:flex">
          <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Hi, I'm a Fullstack Developer
        </h2>
        <p className="text-xl text-gray-600 mb-6 max-w-2xl">
          I build modern web applications using <span className="text-blue-600 font-semibold">React</span> and <span className="text-green-600 font-semibold">Java MVC</span>. I'm currently pursuing a degree in Computer Science at the <span className="font-medium">University of Rwanda</span>.
        </p>
        <div className="flex space-x-4">
          <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition">View Projects</a>
          <a href="#contact" className="bg-gray-200 text-gray-800 px-6 py-2 rounded-xl hover:bg-gray-300 transition">Contact Me</a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="p-6 bg-white">
        <h3 className="text-2xl font-semibold mb-4 text-center">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <div className="bg-gray-50 shadow-md rounded-xl p-4">
            <h4 className="font-bold text-lg">React Task Manager</h4>
            <p className="text-sm text-gray-600 mt-2">A full CRUD application built with React and Firebase.</p>
          </div>
          <div className="bg-gray-50 shadow-md rounded-xl p-4">
            <h4 className="font-bold text-lg">Java MVC Blog</h4>
            <p className="text-sm text-gray-600 mt-2">A blogging system using Java Servlets, JSP and MySQL.</p>
          </div>
          <div className="bg-gray-50 shadow-md rounded-xl p-4">
            <h4 className="font-bold text-lg">Portfolio Website</h4>
            <p className="text-sm text-gray-600 mt-2">This personal portfolio, built with React and TailwindCSS.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="p-6 bg-gray-100 text-center">
        <h3 className="text-2xl font-semibold mb-4">About Me</h3>
        <p className="max-w-3xl mx-auto text-gray-700">
          I'm a passionate developer with a focus on creating clean, responsive, and interactive user experiences.
          My interests include fullstack development, problem-solving, and contributing to open-source. I'm currently a Computer Science student at the University of Rwanda.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="p-6 bg-white text-center">
        <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
        <p className="text-gray-700 mb-4">I'm open to freelance, internships, or collaboration opportunities.</p>
        <div className="flex justify-center space-x-6 text-2xl text-gray-600">
          <a href="mailto:you@example.com" className="hover:text-blue-600"><FaEnvelope /></a>
          <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-900"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-blue-700"><FaLinkedin /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm py-4 bg-gray-100">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
};

export default LandingPage;
