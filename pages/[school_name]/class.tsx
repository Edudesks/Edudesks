// components/Dashboard.js
import Sidebar from '@/components/DashboardComponent/Sidebar';
import Navbar from '@/components/DashboardComponent/NavBar';
import CircularChart from '@/components/DashboardComponent/CircularChart';
import { useState } from 'react';
import styles from '@/styles/Dashboard.module.css';
import ClassTable from '@/components/ClassComponent/ClassTable';


const Class = () => {  
  return (
        <div className="container">
            <ClassTable/>
        </div>
  );
};

export default Class;


