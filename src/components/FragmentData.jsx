function FragmentPopup({ close }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

      <div className="bg-gray p-6 rounded-lg w-96">

        <h2 className="text-xl font-bold mb-4">Add Employee</h2>

         <div className="grid grid-cols-2 gap-3">

          <input
            type="text"
            placeholder="First Name"
            className="border p-2 w-full"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="border p-2 w-full"
          />

          <input
            type="text"
            placeholder="Email"
            className="border p-2 w-full"
          />

          <input
            type="text"
            placeholder="Phone"
            className="border p-2 w-full"
          />

          <input
            type="text"
            placeholder="Bank"
            className="border p-2 w-full"
          />

          <input
            type="text"
            placeholder="Account"
            className="border p-2 w-full"
          />

          <input
            type="text"
            placeholder="Currency"
            className="border p-2 w-full"
          />

          <input
            type="text"
            placeholder="Salary"
            className="border p-2 w-full"
          />

            <input
            type="text"
            placeholder="Sex"
            className="border p-2 w-full"
          />

        </div>

        <div className="flex py-4 justify-end gap-2">

          <button
            className="bg-gray-400 px-3 py-1 rounded"
            onClick={close}
          >
            Cancel
          </button>

          <button
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>

        </div>

      </div>
    </div>
  );
}

export default FragmentPopup;