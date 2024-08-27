import React, { useState, useEffect } from "react";
import DeleteButton from "../Delete/delete";
import Checkbox from "./Checkbox";
import Alert from "@mui/material/Alert";
import "./Student.css";

function Enrollment() {
  const [users, setUsers] = useState([]);
  const [emailError, setEmailError] = useState(false);
  const [inputError, setInputError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    dob: "",
    email: "",
    contact: "",
    Fname: "",
    address: "",
    city: "",
    education: "",
    image: "",
    skills: [],
    gender: "",
  });
  const [imageUploaded, setImageUploaded] = useState(false);

  useEffect(() => {
    // Check if there is any data in LocalStorage when the page loads
    const storedData = localStorage.getItem("enrolledStudents");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUsers(parsedData);
    }
  }, []);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setUser((prevUser) => ({ ...prevUser, image: reader.result }));
      setImageUploaded(true);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleInputs = (e) => {
    const { name, value } = e.target;
    const capitalizedValue = name === "email" ? value : value.replace(/\b\w/g, (c) => c.toUpperCase());
    setUser((prevUser) => ({ ...prevUser, [name]: capitalizedValue }));
    if (name === "email") {
      const isValid = validateEmail(value);
      setEmailError(!isValid); 
    }
  };  const handleLabelClick = (event) => {
    const input = event.target.nextElementSibling;
    input.focus();
  };
  const check = (e) => {
    const { value, checked } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      skills: checked
        ? [...(prevUser.skills || []), value]
        : prevUser.skills.filter((skill) => skill !== value),
    }));
  };
  const radio = (e) => {
    const { value } = e.target;
    setUser((prevUser) => ({ ...prevUser, gender: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
  !user.name ||
  !user.dob ||
  !user.email ||
  !user.contact ||
  !user.Fname ||
  !user.address ||
  !user.city ||
  !user.education ||
  !imageUploaded ||
  !user.skills.length ||
  !user.gender
) {
  setInputError(true);
  return;
} else {
  setInputError(false); 
}

    setUsers((prevUsers) => [...prevUsers, user]);
    setUser({
      name: "",
      dob: "",
      email: "",
      contact: "",
      Fname: "",
      address: "",
      city: "",
      education: "",
      image: "",
      skills: [],
      gender: "",
    });
    localStorage.setItem("enrolledStudents", JSON.stringify([...users, user]));
    setImageUploaded(false);
  };

  const Clear = () => {
    setUser({
      name: "",
      dob: "",
      email: "",
      contact: "",
      Fname: "",
      address: "",
      city: "",
      education: "",
      image: "",
      skills: [],
      gender: "",
    });
    setImageUploaded(false);
    setInputError(false);
    setEmailError(false);
    
  };

  const handleDeleteUser = (index) => {
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
    localStorage.setItem("enrolledStudents", JSON.stringify(newUsers));
  };

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return regex.test(email);
  };

  return (
    <div className="App p-2">
      <div className="bg-gradient-to-r from-green-500 via-rose-400 to-green-500 font-serif p-4 my-4">
        
        <h1 className="text-3xl text-white font-bold text-center">
          Student Enrollment Form
        </h1>
      </div>
      {emailError && (
        <Alert severity="error" className="my-4">
          Please correct email.
        </Alert>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
        {inputError && (
        <Alert  severity="error" className="my-4">
          Please fill all fields
        </Alert>
      )}
          <form>
  <div className="grid grid-cols-2 gap-4 space-y-5">
    <div className="relative">
      <input
        id="name"
        name="name"
        type="text"
        value={user.name}
        onChange={handleInputs}
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
      />
      <label
        htmlFor="name"
        className={`absolute left-0 top-1 cursor-text transition-all peer-focus:text-xs ${user.name ? '-top-4 text-blue-700' : 'peer-focus:-top-4'}`}
        onClick={handleLabelClick}
      >
        Name
      </label>
    </div>
    <div className="relative">
  <label>Date Of Birth</label>
  <input
    type="date"
    name="dob"
    value={user.dob}
    onChange={handleInputs}
    placeholder="Enter Date Of Birth"
    className="border-b mx-2 border-gray-300 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
  />
</div>
    <div className="relative">
      <input
        id="Fname"
        type="text"
        name="Fname"
        value={user.Fname}
        onChange={handleInputs}
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
      />
      <label
        htmlFor="Fname"
        className={`absolute left-0 top-1 cursor-text transition-all peer-focus:text-xs ${user.Fname ? '-top-4 text-blue-700' : 'peer-focus:-top-4'}`}
        onClick={handleLabelClick}
      >
        Father's Name
      </label>
    </div>
    <div className="relative">
      <input
        id="email"
        type="email"
        name="email"
        value={user.email}
        onChange={handleInputs}
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
      />
      <label
        htmlFor="email"
        className={`absolute left-0 top-1 cursor-text transition-all peer-focus:text-xs ${user.email ? '-top-4 text-blue-700' : 'peer-focus:-top-4'}`}
        onClick={handleLabelClick}
      >
        Email
      </label>
    </div>
    <div className="relative">
      <input
        type="number"
        name="contact"
        value={user.contact}
        onChange={handleInputs}
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
      />
      <label
        htmlFor="contact"
        className={`absolute left-0 top-1 cursor-text transition-all peer-focus:text-xs ${user.contact ? '-top-4 text-blue-700' : 'peer-focus:-top-4'}`}
        onClick={handleLabelClick}
      >
        Contact
      </label>
    </div>
    <div className="relative">
      <input
        type="text"
        name="address"
        value={user.address}
        onChange={handleInputs}
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
      />
      <label
        htmlFor="address"
        className={`absolute left-0 top-1 cursor-text transition-all peer-focus:text-xs ${user.address ? '-top-4 text-blue-700' : 'peer-focus:-top-4'}`}
        onClick={handleLabelClick}
      >
        Address
      </label>
    </div>
    <div className="relative">
      <input
        type="text"
        name="city"
        value={user.city}
        onChange={handleInputs}
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
      />
      <label
        htmlFor="city"
        className={`absolute left-0 top-1 cursor-text transition-all peer-focus:text-xs ${user.city ? '-top-4 text-blue-700' : 'peer-focus:-top-4'}`}
        onClick={handleLabelClick}
      >
        City
      </label>
    </div>
    <div className="relative">
      <input
        type="text"
        name="education"
        value={user.education}
        onChange={handleInputs}
        className="border-b border-gray-300 py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit"
      />
      <label
        htmlFor="education"
        className={`absolute left-0 top-1 cursor-text transition-all peer-focus:text-xs ${user.education ? '-top-4 text-blue-700' : 'peer-focus:-top-4'}`}
        onClick={handleLabelClick}
      >
        Educational Level
      </label>
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="imageInput"
                  className="text-gray-700 font-bold my-2 cursor-pointer relative"
                >
                  Upload Image
                  <div className="loader-container absolute top-0 left-0 w-full h-full flex justify-center items-center">
                    <div className="loader"></div>
                  </div>
                </label>
                <input
                  id="imageInput"
                  className="hidden"
                  type="file"
                  name="image"
                  onChange={handleImageUpload}
                />
              </div>
              {imageUploaded && (
                <Alert severity="success" className="my-4">
                  Image uploaded successfully!
                </Alert>
              )}
              <div className="col-span-2">
                <label className="text-gray-700 font-bold my-2">Gender</label>
                <div className="my-2 flex space-x-5">
                  <input
                    type="radio"
                    value="male"
                    name="gender"
                    onChange={radio}
                  />
                  Male
                  <input
                    type="radio"
                    value="female"
                    name="gender"
                    onChange={radio}
                  />
                  Female
                </div>
              </div>
              <div className="col-span-2 flex">
                <label className="text-gray-700 font-bold my-2">Skills</label>
                <div className="my-2 flex space-x-10 m-10">
        <Checkbox
          label="Java"
          name="skills"
          value="Java"
          checked={user.skills.includes('Java')}
          onChange={check}
        />
        <Checkbox
          label="Python"
          name="skills"
          value="Python"
          checked={user.skills.includes('Python')}
          onChange={check}
        />
        <Checkbox
          label="ReactJS"
          name="skills"
          value="ReactJS"
          checked={user.skills.includes('ReactJS')}
          onChange={check}
        />
      </div>
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 z-30 py-4 bg-green-500 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-green-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:2px_2px_2px_#fda4af;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
              >
                Enroll Student
              </button>
              <button
                type="button"
                onClick={Clear}
                className="px-8 z-30 py-4 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-2xl"
              >
                Clear
              </button>
            </div>
          </form>
        </div>

        <div className="">
          <span className="flex justify-start border-l-4 border-green-400 h-52 absolute"></span>
          <h1 className="font-bold text-center">Enrolled Student</h1>
          <div className="flex justify-center box-border border-2 border-black border-solid font-bold mx-8 mt-2">
            <h1 className="bg-gray-400 w-3/5 mb-0 box-border border-2 border-solid pl-2">
              Description
            </h1>
            <h1 className="bg-gray-400 w-2/5 mb-0 pl-2">Image</h1>
          </div>

          {users.map((user, i) => (
            <div
              key={i}
              className="border-4 box-border border-black mx-8 flex items-center justify-between border-t-0 relative"
            >
              <div className="p-1 box-border h-full w-3/5 border-r-2">
                <DeleteButton
                  onClick={() => handleDeleteUser(i)}
                  className="cursor-pointer"
                />
                <h1>Name: {user.name}</h1>
                <h1>Date Of Birth: {user.dob}</h1>
                <h1>Email: {user.email}</h1>
                <h1>gender: {user.gender}</h1>
                <h1>contact: {user.contact}</h1>
                <h1>Father's Name: {user.Fname}</h1>
                <h1>Address: {user.address}</h1>
                <h1>City: {user.city}</h1>
                <h1>Education: {user.education}</h1>
                <h1>Skills: {user.skills && user.skills.join(", ")}</h1>
              </div>
              <div className="imageContainer flex justify-center items-center p-1 box-border w-2/5 h-full">
                <img src={user.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Enrollment;
