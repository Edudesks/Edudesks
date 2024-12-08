import React from 'react';
import styles from '@/styles/Class.module.css';
import withProtectedRoute from '@/hoc/ProtectedRoute';
import ClassTable from '@/components/ClassComponent/ClassTable';

import { UserAccountIcon, CapIcon, SchoolIcon } from 'hugeicons-react'; // Update with the correct icons from hugeicons-react

interface StatCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for an SVG component
  count: number | string; // Allows both numbers and strings for flexibility
  label: string;
  className?: string; // Optional prop
}

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, count, label, className = '' }) => (
  <div className={`flex items-center gap-2 bg-white rounded-lg p-3 shadow ${className}`}>
    <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-md">
      <Icon className="w-5 h-5 text-blue-600" />
    </div>
    <div className="flex gap-1.5 items-baseline">
      <span className="text-lg font-semibold">{count}</span>
      <span className="text-gray-600 text-sm">{label}</span>
    </div>
  </div>
);


const TeacherProfile = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow max-w-md">
      <div className="flex items-center gap-4 mb-6">
        <img 
          src="/api/placeholder/48/48" 
          alt="Teacher" 
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="font-semibold">Class teacher: Anita Nwosu</h2>
          <p className="text-gray-600 text-sm">Assigned Class: JSS2</p>
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 text-gray-600 mb-1">
          <CapIcon className="w-4 h-4" />
          <span className="text-sm">Qualification/ Experience:</span>
        </div>
        <p className="text-sm ml-6">B.sc in Maths Edu</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">Payment status:</span>
          <select className="text-sm border rounded px-2 py-1">
            <option>Binary</option>
          </select>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">School fees Payment status for June</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div className="bg-blue-600 h-2 rounded-full w-3/5"></div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Total expected Payment:</span>
            <span>₦730,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Received:</span>
            <span>₦110,000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Outstanding Payment:</span>
            <span>₦180,000</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Payment Due:</span>
            <span>₦180,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};



const ClassStats = () => {
  return (
    <div className="bg-gray-50 p-4 w-full">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <StatCard icon={UserAccountIcon} count={24} label="Total Classes" />
          <StatCard icon={CapIcon} count={24} label="Total Students" />
          <StatCard icon={SchoolIcon} count={34} label="Class teachers" />
        </div>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm">
          <UserAccountIcon className="w-4 h-4" />
          Add new class
        </button>
      </div>
    </div>
  );
};



const ClassHeader = () => {
  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-medium text-gray-700">J.S.S.1.A</h2>
        <div className="flex gap-2">
          <button className="bg-blue-900 text-white px-4 py-2 text-sm rounded-lg flex items-center gap-2">
            <CapIcon className="w-4 h-4" />
            Edit Class Profile
          </button>
          <button className="border border-gray-300 bg-white px-4 py-2 text-sm rounded-lg flex items-center gap-2">
            <UserAccountIcon className="w-4 h-4" />
            Add new student
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-6">Assigned Class teacher: Mr Taiwo Adewuyi</p>

      <div className="grid grid-cols-5 gap-4">
        <StatCard2
          icon={<UserAccountIcon className="w-5 h-5 text-white" />}
          label="Total Expected Fees"
          value="₦5,060,000"
          bgColor="bg-blue-900"
        />
        <StatCard2
          icon={<UserAccountIcon className="w-5 h-5 text-white" />}
          label="Total Fees Received"
          value="₦2,000,000"
          bgColor="bg-blue-800"
        />
        <StatCard2
          icon={<UserAccountIcon className="w-5 h-5 text-blue-900" />}
          label="Total number of Students"
          value="22"
          bgColor="bg-white"
        />
        <StatCard2
          icon={<UserAccountIcon className="w-5 h-5 text-blue-900" />}
          label="Total number of Females"
          value="10"
          bgColor="bg-white"
        />
        <StatCard2
          icon={<UserAccountIcon className="w-5 h-5 text-blue-900" />}
          label="Total number of Male"
          value="12"
          bgColor="bg-white"
        />
      </div>
    </div>
  );
};

const StatCard2 = ({ icon, label, value, bgColor }) => (
  <div className={`${bgColor} p-4 rounded-lg shadow`}>
    <div className={`flex items-center justify-center w-10 h-10 mb-2 ${bgColor === 'bg-white' ? 'bg-blue-100' : 'bg-blue-800'} rounded-lg`}>
      {icon}
    </div>
    <div className="space-y-1">
      <p className={`text-sm ${bgColor === 'bg-white' ? 'text-gray-600' : 'text-blue-100'}`}>{label}</p>
      <p className={`text-xl font-semibold ${bgColor === 'bg-white' ? 'text-gray-900' : 'text-white'}`}>{value}</p>
    </div>
  </div>
);

const ClassPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <ClassStats />
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Add New Class</h2>
        <form>
          <div className={styles.formGroup}>
            <label>Class*</label>
            <input type="text" placeholder="Enter name of class" />
          </div><br></br>
          <div className={styles.formGroup}>
            <label>Assigned Teacher*</label>
            <input type="text" placeholder="Enter class teacher name" />
          </div>
          <br></br>
          <div className={styles.formGroup}>
            <label>School Fees for Each Student*</label>
            <input type="number" placeholder="Enter amount of school fees" />
          </div>
          <div className={styles.formActions}>
            <button type="submit" className={styles.saveBtn}>
              Save
            </button>
            <button type="button" className={styles.cancelBtn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
      <ClassHeader/>
      <TeacherProfile/>
      <ClassTable/>
    </div>
  );
};

export default ClassPage;
