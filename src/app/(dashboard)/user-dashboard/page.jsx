
const Dashboard = () => {

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Dashboard</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Logout
          </button>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
              <p className="mt-2 text-2xl font-bold text-blue-600">$12,340</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">New Users</h3>
              <p className="mt-2 text-2xl font-bold text-green-600">1,245</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-gray-700">Orders</h3>
              <p className="mt-2 text-2xl font-bold text-purple-600">567</p>
            </div>
          </div>

          {/* Placeholder for charts or tables */}
          <div className="mt-8 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">Sales Analytics</h3>
            <p className="text-gray-500 mt-2">[Insert chart here]</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
