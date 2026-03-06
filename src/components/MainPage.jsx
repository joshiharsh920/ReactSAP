import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import DataTable from "react-data-table-component";
import FragmentPopup from "./FragmentData";

function MainPage() {
  const [records, setRecords] = useState([]);
  const [showFragment, setShowFragment] = useState(false);
  const [weather, setWeather] = useState(null);

  const WEATHER_API_KEY = '983ff4f9d3d6d34f89b99e0ed0525f60';
  const columns = [
    {
      name: "First Name",
      selector: row => row.nameFirst,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: row => row.nameLast,
      sortable: true,
    },
    {
      name: "Email",
      selector: row => row.email,
      sortable: true,
    },
    {
      name: "Phone",
      selector: row => row.phoneNumber,
    },
    {
      name: "Bank",
      selector: row => row.bankName,
    },
    {
      name: "Account",
      selector: row => row.accountNumber,
    },
    {
      name: "Currency",
      selector: row => row.Currency_code,
    },
    {
      name: "Salary",
      selector: row => row.salaryAmount,
      sortable: true,
    },
    {
      name: "Sex",
      selector: row => row.sex,
    },
  ];
  const callCapService = async () => {
    try {
      const response = await fetch("http://localhost:4004/odata/v4/CatalogService/EmployeeSet"); // replace with your CAP endpoint
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json(); // parse JSON response
      setRecords(data.value);
    } catch (error) {
      console.error("Error calling CAP service:", error);
    }
  };

  useEffect(() => {
    callCapService();
    userLocation();

  }, []);

  function userLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const apiKey = "913f164ecbb1c0d670e0375fd890644b";

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      )
        .then(
          (res) => res.json()
        )
        .then(
          (data) => setWeather(data)
        );
    });
  }

  return (
    <>
      <section id="section1" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 top-20 left-20"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30 bottom-20 right-20"></div>


        <div className="text-center z-10 ">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Gateway for SAP Service
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8">
            Using the SAP CAPM service to consume data on React.
          </p>

          <div className="w-full flex flex-col items-center gap-4 mt-4">
            <button style={{ cursor: "pointer" }}
              onClick={callCapService}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg transition"
            >
              Get Data
            </button>

            <button style={{ cursor: "pointer" }} onClick={() => setShowFragment(true)}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg transition"
            >
              Enter Data
            </button>
            {showFragment && <FragmentPopup close={() => setShowFragment(false)} />}
          </div>
        </div>

      </section>

      <section
        id="section2"
        className="w-full bg-gray-900 text-white py-12 px-4 md:px-8 overflow-x-auto"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Employee Records</h2>

          <DataTable
            columns={columns}
            data={records}
            pagination
            highlightOnHover
            striped
            responsive
            noHeader
            customStyles={{
              rows: {
                style: {
                  minHeight: '60px', // default row height
                }
              },
              headCells: {
                style: {
                  fontWeight: 'bold',
                  fontSize: '16px',
                  backgroundColor: '#1f2937', // Tailwind gray-800
                  color: 'white',
                },
              },
              cells: {
                style: {
                  fontSize: '14px',
                  paddingLeft: '16px',
                  paddingRight: '16px',
                },
              },
            }}
          />
        </div>
      </section>
    </>
  );
}

export default MainPage;