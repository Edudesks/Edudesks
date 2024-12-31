import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/DashboardComponent/Sidebar';
import Navbar from '@/components/DashboardComponent/NavBar';
import Page404 from '@/components/404';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material'; // Import CircularProgress from Material UI
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { checkSchoolExist } from '@/store/slices/schoolSlice'; // Action to check if school exists
import { activePage } from '@/store/slices/sidebarSlice';


const MainLayout = ({ children, schoolName }: { children: React.ReactNode, schoolName: string | undefined}) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const schoolExists = useAppSelector((state) => state.school.schoolExists); // Selector for school existence
  const active = useAppSelector(activePage);

  useEffect(() => {

    if (schoolName) {
      dispatch(checkSchoolExist(schoolName as string)); // Check if the school exists
    } 
  }, [dispatch, schoolName]);

  if (schoolExists === null) {
    // Show loading spinner while checking
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (schoolExists === false) {
    // Show a message if the school doesn't exist
    return (
      <Page404 />
    );
  }

  return (
    <div className="flex bg-[var(--secondary-text-color)]">
      <Sidebar 
        activeSection={active.active} 
        activeParentNav={active.parentNav} 
        isMobileSidebarOpen={isMobileSidebarOpen} 
        setIsMobileSidebarOpen={setIsMobileSidebarOpen} 
      />
      <div className="h-screen flex-1 overflow-y-scroll overflow-x-hidden">
        <Navbar setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
