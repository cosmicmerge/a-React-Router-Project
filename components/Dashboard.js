export default function Dashboard() {
  // Sample data for stats
  const stats = [
    { title: "Total Users", value: "12,345", change: "+12%", icon: "users", color: "blue" },
    { title: "Revenue", value: "$54,321", change: "+8%", icon: "revenue", color: "green" },
    { title: "Orders", value: "1,234", change: "+23%", icon: "orders", color: "purple" },
    { title: "Conversion Rate", value: "3.45%", change: "+2%", icon: "conversion", color: "orange" }
  ];

  const recentActivities = [
    { id: 1, user: "John Doe", action: "made a purchase", amount: "$299", time: "2 minutes ago", avatar: "JD" },
    { id: 2, user: "Jane Smith", action: "signed up", amount: "", time: "15 minutes ago", avatar: "JS" },
    { id: 3, user: "Mike Johnson", action: "submitted feedback", amount: "", time: "1 hour ago", avatar: "MJ" },
    { id: 4, user: "Sarah Williams", action: "completed order", amount: "$1,299", time: "3 hours ago", avatar: "SW" }
  ];

  const getIcon = (iconName) => {
    switch(iconName) {
      case "users":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case "revenue":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "orders":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case "conversion":
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getColorClasses = (color) => {
    switch(color) {
      case "blue":
        return "bg-blue-100 text-blue-600";
      case "green":
        return "bg-green-100 text-green-600";
      case "purple":
        return "bg-purple-100 text-purple-600";
      case "orange":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="bg-linear-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Admin!</h1>
            <p className="text-blue-100">Here's what's happening with your store today.</p>
          </div>
          <div className="hidden md:block">
            <svg className="w-20 h-20 opacity-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${getColorClasses(stat.color)}`}>
                {getIcon(stat.icon)}
              </div>
              <span className={`text-sm font-semibold ${
                stat.change.includes('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-500 text-sm font-medium mb-1">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Charts and Activity Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Chart Section */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Revenue Overview</h2>
            <select className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>
          <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
            {/* Placeholder for chart - you can integrate a chart library here */}
            <div className="text-center">
              <svg className="w-16 h-16 mx-auto text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <p className="text-gray-500">Chart visualization would go here</p>
              <p className="text-gray-400 text-sm">(Integrate with Chart.js, Recharts, etc.)</p>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-linear-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {activity.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{activity.user}</p>
                    <p className="text-sm text-gray-500">
                      {activity.action} {activity.amount && <span className="font-semibold text-green-600">{activity.amount}</span>}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="flex flex-col items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200 group">
            <svg className="w-8 h-8 text-blue-600 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Add Product</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200 group">
            <svg className="w-8 h-8 text-green-600 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Add User</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200 group">
            <svg className="w-8 h-8 text-purple-600 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-sm font-medium text-gray-700">View Reports</span>
          </button>
          <button className="flex flex-col items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200 group">
            <svg className="w-8 h-8 text-orange-600 mb-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm font-medium text-gray-700">Settings</span>
          </button>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All Orders →
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">#12345</td>
                <td className="px-4 py-3 text-sm text-gray-600">John Doe</td>
                <td className="px-4 py-3 text-sm text-gray-600">Premium Package</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">Completed</span>
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">$299.00</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">#12346</td>
                <td className="px-4 py-3 text-sm text-gray-600">Jane Smith</td>
                <td className="px-4 py-3 text-sm text-gray-600">Basic Plan</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">Pending</span>
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">$99.00</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-3 text-sm font-medium text-gray-900">#12347</td>
                <td className="px-4 py-3 text-sm text-gray-600">Mike Johnson</td>
                <td className="px-4 py-3 text-sm text-gray-600">Pro Package</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">Processing</span>
                </td>
                <td className="px-4 py-3 text-sm font-semibold text-gray-900">$499.00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}