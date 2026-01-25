import { useState } from "react";
import Sidebar from "./components/sidebar";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-500">
      {/* Main Content */}
      <div className="p-6 ">
        <h1 className="text-2xl font-bold mb-4">Main Page</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Open Sidebar
        </button>
      </div>
      
      {/* Sidebar */}
       <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}

export default App;
