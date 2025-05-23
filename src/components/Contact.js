import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real implementation, you would send the form data to a server here
    // For now, we'll just simulate a successful submission
    
    // Show the thank you message
    setIsSubmitted(true);
    
    // Reset form after a delay (optional)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // Optionally reset the submitted state after some time
      // setTimeout(() => setIsSubmitted(false), 5000);
    }, 500);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 md:py-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-dark font-heading">
        Contact Me
      </h2>
      <div className="glass-card rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-2xl mx-auto">
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="text-accent text-5xl mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2 font-heading">Thanks for your message!</h3>
            <p className="text-gray-300">Sameen will be in touch with you soon.</p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-6 px-6 py-2 bg-gradient-to-r from-accent-dark to-accent text-white rounded-lg hover:from-accent hover:to-accent-dark transition-all transform hover:scale-105 font-medium"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/40 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/40 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-800/40 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-accent-dark to-accent text-white py-2 sm:py-3 rounded-lg hover:from-accent hover:to-accent-dark transition-all transform hover:scale-105 font-medium"
            >
              Send Message
            </button>
          </form>
        )}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-700/50">
          <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 font-heading text-center">Connect With Me</h3>
          <div className="flex space-x-6 justify-center">
            <a 
              href="https://github.com/sshaik03" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-accent transition-all transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/sameen-shaik-073426244/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-accent transition-all transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;