import React, { useState } from 'react';
import { CountryDropdown } from 'react-country-region-selector';
import { FaUserAlt, FaTransgender, FaMapMarkerAlt, FaMobileAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

function DelegateAdd() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');

  const handleCountryChange = (val) => {
    setCountry(val);
  };

  return (
    <div className="m-4 md:m-1 flex flex-col justify-center items-center  h-[100vh]">
      <div className="z-5 relative flex flex-col rounded-[20px] max-w-[600px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-6 3xl:p-![18px]        undefined">
        <div className="mb-6 flex flex-row justify-center">
          <h4 className="text-xl text-center font-bold text-navy-700 dark:text-white mb-3">
            REGISTER
          </h4>
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 col-gap-6 row-gap-4">
          <div className="mb-3 mr-1">
            <label htmlFor="firstName" className="text-sm text-navy-700 dark:text-white font-bold flex items-center">
              <FaUserAlt className="mr-2 h-5 w-5" />
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter first name"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="lastName" className="text-sm text-navy-700 dark:text-white font-bold flex items-center">
              <FaUserAlt className="mr-2 h-5 w-5" />
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter last name"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3 mr-1">
            <label htmlFor="gender" className="text-sm text-navy-700 dark:text-white font-bold flex items-center">
              <FaTransgender className="mr-2 h-5 w-5" />
              Gender
            </label>
            <select
              id="gender"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 pl-3 pr-10 text-sm outline-none border-gray-200"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="text-sm text-navy-700 dark:text-white font-bold flex items-center">
              <FaMapMarkerAlt className="mr-2 h-5 w-5" />
              Address
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter address"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="mb-3 mr-1">
            <label htmlFor="phoneNumber" className="text-sm text-navy-700 dark:text-white font-bold flex items-center">
              <FaMobileAlt className="mr-2 h-5 w-5" />
              Phone Number
            </label>
            <input
              type="number"
              id="phoneNumber"
              placeholder="Enter phone number"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="text-sm text-navy-700 dark:text-white font-bold flex items-center">
              <FaEnvelope className="mr-2 h-5 w-5" />
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="country" className="text-sm text-navy-700 dark:text-white font-bold flex items-center">
              <FaGlobe className="mr-2 h-5 w-5" />
              Country
            </label>
            <CountryDropdown
              id="country"
              value={country}
              onChange={handleCountryChange}
              className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 pl-3 pr-10 text-sm outline-none border-gray-200"
            />
          </div>
        </div>
        <div className='text-center mt-5'>
          <button className="w-1/3 bg-light-blue-400 hover:bg-light-blue-700 text-white font-bold py-3 px-6 rounded-full">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default DelegateAdd;