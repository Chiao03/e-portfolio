import React from "react";

function Contact({ handleSubmit }) {
  const onSubmit = (event) => {
    event.preventDefault();

    if (handleSubmit) handleSubmit(event);

    event.target.reset();
  };
  

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Let's Work Together</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <i className="fas fa-envelope text-purple-600 text-xl w-8"></i>
                <span className="text-gray-700">weichiao0329@gmail.com</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone text-purple-600 text-xl w-8"></i>
                <span className="text-gray-700">+61 432 888 529</span>
              </div>
              <div className="flex items-center">
                <i className="fas fa-map-marker-alt text-purple-600 text-xl w-8"></i>
                <span className="text-gray-700">Melbourne, VIC</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="https://github.com/Chiao03?tab=repositories">
                <button className="bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors">
                  <i className="fab fa-github text-xl"></i>
                </button>
              </a>
              <a href="https://www.linkedin.com/in/chiao-yang-462801215/">
                <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors">
                  <i className="fab fa-linkedin text-xl"></i>
                </button>
              </a>
              <a href="mailto:weichiao0329@gmail.com">
                <button className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors">
                  <i className="fa fa-envelope text-xl"></i>
                </button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
