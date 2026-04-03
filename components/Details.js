import { Outlet, NavLink } from "react-router";

export default function Details() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Main Details Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-linear-to-r from-purple-600 to-indigo-600 px-6 py-8">
          <h2 className="text-3xl font-bold text-white mb-2">Details Section</h2>
          <p className="text-purple-100">Explore more information below</p>
        </div>

        {/* Content Area */}
        <div className="p-6">
          {/* Navigation Tabs for Nested Routes */}
          <div className="flex space-x-2 mb-6 border-b border-gray-200 pb-4">
            <NavLink
              to="/Details/Hola"
              className={({ isActive }) =>
                `px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-md transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow"
                }`
              }
            >
              🌎 Hola Page
            </NavLink>
            <NavLink
              to="/Details/Kimchi"
              className={({ isActive }) =>
                `px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white shadow-md transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow"
                }`
              }
            >
              🥬 Kimchi Page
            </NavLink>
          </div>

          {/* Outlet - Dynamic Content Area */}
          <div className="bg-gray-50 rounded-lg p-6 min-h-75">
            <Outlet />
          </div>

          {/* Additional Information Card */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-3">
              <div className="shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-blue-800">Information</h3>
                <p className="text-sm text-blue-700 mt-1">
                  Click on the tabs above to see different content. This is an example of nested routing in React Router!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


















// import { Outlet,Link } from "react-router"



// export default function Details(){
//     return(
//         <div>
//             <h2>This is the details section</h2>
//             <Outlet></Outlet>
//             <div>
//                 <Link to="/Details/Hola">Hola Page</Link>
//                 <Link to="/Details/Kimchi">Kimchi Page</Link>
//             </div>
//         </div>
//     )
// }