import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

const Add: React.FC = () => {
  const initialFormData = {
    Name: '',
    email: '',
    mobile: '',
    Address: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
          await Inertia.post('/studs/store', formData);
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };


  return (
    <form onSubmit={handleSubmit} action="/studs/store" className=' box-border h-32 w-80 mx-auto'>
      <div>
        <h1 className="text-center text-2xl font-semibold mb-6">Form</h1>
        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
          First name
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="Name"
            id="name"
            autoComplete="given-name"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
            value={formData.Name}
          />
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          Email address
        </label>
        <div className="mt-2">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="mobile" className="block text-sm font-medium leading-6 text-gray-900">
          Mobile number
        </label>
        <div className="mt-2">
          <input
            id="mobile"
            name="mobile"
            type="tel"
            autoComplete="tel"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
            value={formData.mobile}
          />
        </div>
      </div>

      <div className="col-span-full">
        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
          address
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="Address"
            id="address"
            autoComplete="street-address"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
            value={formData.Address}
          />
        </div>
      </div>


      <div className="mt-6 flex items-center justify-start gap-x-6">
      <button
            type="button"
            className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-gray-900"
            onClick={handleCancel}
          >
            Cancel
          </button>
        <button
          type="submit"
          className="rounded-md px-3 py-2 text-sm font-semibold  text-gray-900 bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  
  );
};

export default Add;
