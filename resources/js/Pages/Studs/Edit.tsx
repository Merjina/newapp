import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

interface Student {
  id: number;
  name: string;
  email: string;
  mobile: string;
  address: string;
}

interface Props {
  stud: Student;
}

const Edit: React.FC<Props> = ({ stud }) => {
  const [formData, setFormData] = useState<Student>({
    id: stud.id,
    name: stud.name,
    email: stud.email,
    mobile: stud.mobile,
    address: stud.address,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      Inertia.post(`/studs/update/${formData.id}`, formData);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleCancel = () => {
    setFormData(formData);
    // Handle cancel action if needed
  };

  return (
    <form onSubmit={handleSubmit} className="box-border w-96 mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
          Mobile
        </label>
        <input
          type="text"
          name="mobile"
          id="mobile"
          value={formData.mobile}
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="mr-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Edit;
