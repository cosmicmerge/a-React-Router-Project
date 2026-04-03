import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import Details from "./components/Details";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Kimchi from "./components/kimichi";
import Hola from "./components/Hola";
import "./index.css";  // Import Tailwind

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Header Section */}
        <header className="bg-linear-to-r from-blue-600 to-blue-800 text-white shadow-lg">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <h1 className="text-2xl font-bold">My React App</h1>
              </div>
              
              {/* Navigation Links */}
              <nav className="flex space-x-6">
                <Link 
                  to="/" 
                  className="hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Home
                </Link>
                <Link 
                  to="/Contact" 
                  className="hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Contact
                </Link>
                <Link 
                  to="/Dashboard" 
                  className="hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/Details" 
                  className="hover:text-yellow-300 transition-colors duration-200 font-medium"
                >
                  Details
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Details" element={<Details />}>
              <Route path="Hola" element={<Hola />} />
              <Route path="Kimchi" element={<Kimchi />} />
            </Route>
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white mt-auto">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* About Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4">About Us</h3>
                <p className="text-gray-300 text-sm">
                  This is a sample React application with Tailwind CSS styling,
                  featuring nested routing and a responsive design.
                </p>
              </div>
              
              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact" className="text-gray-300 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/Dashboard" className="text-gray-300 hover:text-white transition-colors">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link to="/Details" className="text-gray-300 hover:text-white transition-colors">
                      Details
                    </Link>
                  </li>
                </ul>
              </div>
              
              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>contact@myapp.com</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <span>+1 (555) 123-4567</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 React Street, Web City</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Copyright */}
            <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400 text-sm">
              <p>&copy; 2024 My React App. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);






















// import ReactDOM from "react-dom/client";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
// import Contact from "./components/Contact";
// import Details from "./components/Details";
// import { BrowserRouter,Routes,Route,Link } from "react-router"
// import Kimchi from "./components/kimichi";
// import Hola from "./components/Hola"


// function App(){
//     return(
//         <BrowserRouter>

//         <nav>
//             <Link to="/">Home</Link>
//             <Link to="/Contact">Contact</Link>
//             <Link to="/Dashboard">Dashboard</Link>
//             <Link to="/Details">Details</Link>
//         </nav>

//         <Routes>
//             <Route path="/" element={<Home></Home>}></Route>
//             <Route path="/Contact" element={<Contact></Contact>}></Route>
//             <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
//             <Route path="/Details" element={<Details></Details>}>
//              <Route path="Hola" element={<Hola></Hola>}></Route>
//              <Route path="Kimchi" element={<Kimchi></Kimchi>}></Route>
//             </Route>
//         </Routes>
//         </BrowserRouter>
//     )
// }


// const root=ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<App></App>)