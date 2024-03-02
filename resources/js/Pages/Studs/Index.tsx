import React from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';

interface Student {
  id: number;
  name: string;
  email: string;
  mobile: string;
  address: string;
}

interface Props {
  studs: Student[];
}

const Index: React.FC<Props> = ({ studs }) => {
  if (!studs || studs.length === 0) {
    return <div>No student records found.</div>;
  }
  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this record?')) {
      try {
        await Inertia.delete(`/studs/${id}`);
      } catch (error) {
        console.error('Error deleting record:', error);
      }
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-4xl font-bold my-8">Stud Records</h1>
      <div className="w-full lg:w-3/4 xl:w-2/3 mx-auto">
        <div className="bg-white shadow-lg rounded-lg">
          <div className="card-body">
            <h5 className="text-center text-2xl font-semibold mb-4">Student List</h5>
            <div className="p-3">
              <div className="p-3">
                <InertiaLink
                  href="/studs/add"
                  className="rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white"
                >
                  Add Student
                </InertiaLink>
              </div>
            </div>
            <table className="table-auto w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Mobile</th>
                  <th className="py-2 px-4">Address</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {studs.map((student: Student) => (
                  <tr key={student.id}>
                    <td className="py-2 px-4">{student.name}</td>
                    <td className="py-2 px-4">{student.email}</td>
                    <td className="py-2 px-4">{student.mobile}</td>
                    <td className="py-2 px-4">{student.address}</td>
                    <td className="py-2 px-4">
                      <InertiaLink
                        href={`/studs/edit/${student.id}`}
                        className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-gray-900"
                      >
                        Edit
                      </InertiaLink>
                      <button
                        className="rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
