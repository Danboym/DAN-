

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col overflow-x-hidden">
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
    {/* Email Icon */}
    <a href="mailto:you@example.com" className="hover:text-blue-600" aria-label="Email">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4 4h16c1.1 0 2 .9 2 2v1.5L12 13 2 7.5V6c0-1.1.9-2 2-2z" />
        <path d="M2 8.5v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-9L12 15 2 8.5z" />
      </svg>
    </a>

    {/* GitHub Icon */}
    <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-900" aria-label="GitHub" rel="noopener noreferrer">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.1-1.2-1.3-1.2-1.3-1-.7.1-.7.1-.7 1.1.1 1.6 1.2 1.6 1.2 1 .1.7 1.7 1.9 2 .3-.2.6-.6.8-.9-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.3a11.4 11.4 0 0 1 6 0c2.3-1.6 3.3-1.3 3.3-1.3.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.2 0 4.7-2.7 5.6-5.3 5.9.4.3.8.9.8 1.9v2.9c0 .3.2.7.8.6A10.5 10.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
      </svg>
    </a>

    {/* LinkedIn Icon */}
    <a href="https://linkedin.com/in/yourprofile" target="_blank" className="hover:text-blue-700" aria-label="LinkedIn" rel="noopener noreferrer">
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM2.5 8.98H7.5V21.5H2.5V8.98zM9.5 8.98H14V10.5c.6-1 1.6-1.5 3-1.5 2.5 0 4 1.7 4 5.2v7.3h-5V15c0-1.5-.5-2.5-1.7-2.5s-2 1-2 2.4v6.6H9.5V8.98z" />
      </svg>
    </a>
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
