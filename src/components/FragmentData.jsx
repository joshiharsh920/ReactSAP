import { useState } from "react";
function FragmentPopup({ close }) {

    const [error, setError] = useState(""); // To store error messages
    const [loading, setLoading] = useState(false); // Optional: to disable button while posting


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        bank: "",
        account: "",
        currency: "",
        salary: "",
        sex: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.placeholder]: e.target.value });
        // Using placeholder as key (you can also use 'name' attribute)
    };

    const handleSave = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "http://localhost:4004/odata/v4/CatalogService/EmployeeSet", // Your CAP endpoint
                {
                    method: "POST",
                    credentials: 'include',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        ID: formData.ID,
                        nameFirst: formData.firstName,
                        nameLast: formData.lastName,
                        email: formData.email,
                        phoneNumber: formData.phone,
                        bankName: formData.bank,
                        accountNumber: formData.account,
                        // Currency: formData.currency,
                        salaryAmount: formData.salary,
                        sex: formData.sex
                    })
                }
            );

            if (!response.ok) {
                throw new Error(`Failed to save data: ${response.status}`);
            }

            const result = await response.json();
            console.log("Data posted successfully:", result);

            close(); // Close the fragment only if POST succeeds
        } catch (err) {
            console.error("Error posting data:", err);
            setError("Failed to save. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">

            <div className="bg-gray p-6 rounded-lg w-96">

                <h2 className="text-xl font-bold mb-4">Add Employee</h2>

                <div className="grid grid-cols-2 gap-3">
                    <input
                        type="text"
                        placeholder="ID"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="firstName"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="lastName"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="email"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="phone"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="bank"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="account"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="currency"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="salary"
                        className="border p-2 w-full"
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="sex"
                        className="border p-2 w-full"
                        onChange={handleChange}
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
                        onClick={handleSave}
                        disabled={loading} // disable while saving
                    >
                        {loading ? "Saving..." : "Save"}
                    </button>

                </div>

            </div>
        </div>
    );
}




export default FragmentPopup;