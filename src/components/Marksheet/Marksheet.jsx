import React, { useState } from "react";

const MarkSheetForm = () => {
  const [user, setUser] = useState({
    name: "",
    fatherName: "",
    rollNo: "",
  });

  const [marks, setMarks] = useState({
    English: 0,
    Chemistry: 0,
    Math: 0,
    Biology: 0,
    Physics: 0,
  });

  const [invalidMarks, setInvalidMarks] = useState({
    English: false,
    Chemistry: false,
    Math: false,
    Biology: false,
    Physics: false,
  });

  const [nameError, setNameError] = useState(true);
  const [rollNoError, setRollNoError] = useState(true);
  const [isCalculateClicked, setIsCalculateClicked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    if (name === "name" && (value.trim() === "" || value.length <= 3)) {
      setNameError(true);
    } else {
      setNameError(false);
    }
    if (name === "rollNo" && (value.trim() === "" || value.length <= 5)) {
      setRollNoError(true);
    } else {
      setRollNoError(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const intValue = parseInt(value, 10);

    if (value.trim() === "" || (intValue >= 0 && intValue <= 100)) {
      setMarks((prevMarks) => ({
        ...prevMarks,
        [name]: intValue,
      }));
      setInvalidMarks((prevInvalidMarks) => ({
        ...prevInvalidMarks,
        [name]: false,
      }));
    } else {
      setInvalidMarks((prevInvalidMarks) => ({
        ...prevInvalidMarks,
        [name]: true,
      }));
    }
  };

  const calculateTotalMarks = () => {
    return Object.values(marks).reduce((total, mark) => total + mark, 0);
  };

  const calculatePercentage = () => {
    const totalMarks = calculateTotalMarks();
    return ((totalMarks / (Object.keys(marks).length * 100)) * 100).toFixed(2);
  };

  const calculateGrade = () => {
    const percentage = calculatePercentage();
    if (percentage >= 90) return "A+";
    if (percentage >= 80) return "A";
    if (percentage >= 70) return "B";
    if (percentage >= 60) return "C";
    if (percentage >= 50) return "D";
    return "F";
  };

  const isPass = () => {
    const percentage = calculatePercentage();
    return percentage >= 44.44;
  };

  const handleCalculate = () => {
    setIsCalculateClicked(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600">Mark Sheet Form</h1>

      <div className="grid grid-cols-2 gap-2 p-4 bg-slate-50">
        <div >
          <label className="block mb-2 text-gray-800">Name</label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
            className={`px-2 py-1 border rounded-md focus:outline-none focus:ring ${
              isCalculateClicked
                ? nameError
                  ? "border-red-500"
                  : "border-yellow-500"
                : "border-blue-500"
            }`}
          />

          <label className="block mt-2 text-gray-800">Father's Name</label>
          <input
            type="text"
            name="fatherName"
            value={user.fatherName}
            onChange={handleInputChange}
            className={`px-2 py-1 border rounded-md focus:outline-none focus:ring ${
              isCalculateClicked
                ? nameError
                  ? "border-red-500"
                  : "border-yellow-500"
                : "border-blue-500"
            }`}
          />

          <label className="block mt-2 text-gray-800">Roll No</label>
          <input
            type="number"
            name="rollNo"
            value={user.rollNo}
            onChange={handleInputChange}
            className={`px-2 py-1 border rounded-md focus:outline-none focus:ring ${
              isCalculateClicked
                ? rollNoError
                  ? "border-red-500"
                  : "border-yellow-500"
                : "border-blue-500"
            }`}
          />
       

        <div className="space-y-2">
          {Object.keys(marks).map((subject, index) => (
            <div key={index} className="block  items-center">
              <label htmlFor={subject} className="block mr-2 text-gray-800">
                {subject}
              </label>
              <input
                type="number"
                id={subject}
                name={subject}
                className={`flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring ${
                  isCalculateClicked
                    ? invalidMarks[subject]
                      ? "border-red-500"
                      : "border-gray-300"
                    : "border-blue-500"
                }`}
                value={marks[subject]}
                onChange={handleChange}
              />
              {isCalculateClicked && invalidMarks[subject] && (
                <p className="text-red-500 text-sm">
                  Invalid marks (0-100) allowed.
                </p>
              )}
            </div>
          ))}
          </div>
          <button
        className=" flex m-6 mx-8 text-white bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800 font-medium rounded-lg text-sm px-5 py-2.5"
        onClick={handleCalculate}
      >
        Calculate
      </button>
          </div>

     
      <div className="h-max ">
      {isCalculateClicked &&  (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Result:</h2>
          <div className="grid grid-cols-2 gap-4 mt-3">
            <div>
              <p>Name: {user.name}</p>
              <p>Father's Name: {user.fatherName}</p>
              <p>Roll No: {user.rollNo}</p>
              <p>Total Marks: {calculateTotalMarks()}</p>
              <p>Percentage: {calculatePercentage()}%</p>
              <p>Grade: {calculateGrade()}</p>
            </div>
            <div>
              <p>
                Status:{" "}
                {isPass() ? (
                  <span className="text-yellow-600">Pass</span>
                ) : (
                  <span className="text-red-600">Fail</span>
                )}
              </p>
            </div>
          </div>
        </div>
      )}
     

      </div>
      </div>
      </div>
  );
};

export default MarkSheetForm;
