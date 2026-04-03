export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative px-6 py-16 md:py-24 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Welcome to Our App
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Build amazing things with React and Tailwind CSS
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Everything you need to create a modern web application
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Built with performance in mind, ensuring smooth and responsive user experiences.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              Looks great on all devices - from mobile phones to desktop computers.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure</h3>
            <p className="text-gray-600">
              Built with security best practices to protect your data and users.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-linear-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">10K+</div>
              <div className="text-gray-600">Active Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-1">500+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-1">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-1">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white rounded-xl shadow-md p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Ready to get started?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied users who are already using our platform.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            Sign Up Now
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200">
            Learn More
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">What Our Users Say</h2>
          <p className="text-gray-600">Don't just take our word for it</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                JD
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">John Doe</h4>
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "This platform has completely transformed how we work. The interface is intuitive and the performance is outstanding!"
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-linear-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                JS
              </div>
              <div className="ml-4">
                <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
            <p className="text-gray-600 italic">
              "Amazing support team and feature-rich platform. Highly recommended for any modern web application!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}






// export default function Home(){
//     return(
//         <div>This is the Home section</div>
//     )
// }