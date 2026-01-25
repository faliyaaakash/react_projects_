function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0  z-40"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full md:w-sm   bg-white z-50
          transform transition-transform duration-20 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Right Sidebar</h2>
          <p className="mb-6 text-gray-600">
            This sidebar slides from the right 👉
          </p>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
