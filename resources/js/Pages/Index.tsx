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

  return (
    <div>
      <h1>Stud Records</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {studs.map((student: Student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.mobile}</td>
              <td>{student.address}</td>
              <td>
                <InertiaLink href={route('stu.edit', { stu: student.id })}>Edit</InertiaLink>{' '}
                <button
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this record?')) {
                      Inertia.delete(route('stu.destroy', { stu: student.id }));
                    }
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
