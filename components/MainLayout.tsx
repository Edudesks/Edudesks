import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/DashboardComponent/Sidebar';
import Navbar from '@/components/DashboardComponent/NavBar';
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material'; // Import CircularProgress from Material UI
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchSchoolName, selectSchoolName, selectSchoolStatus } from '@/store/slices/schoolSlice';
import { activePage } from '@/store/slices/sidebarSlice';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  
  const schoolName = useAppSelector(selectSchoolName);
  const status = useAppSelector(selectSchoolStatus);
  const active = useAppSelector(activePage);
  
  // useEffect(() => {
  //   const { school_name } = router.query;
  //   const name = localStorage.getItem('schoolName');
  //   console.log(name, school_name)
  //   if (school_name === name ) {
  //     dispatch(fetchSchoolName());
  //   } else {
  //     router.push('404')
  //   }
  // }, [dispatch, router]);

  // if (schoolName === 'Not Found') {
  //   return <p>School not found</p>;
  // }

  // if (status === 'loading') {
  //   return (
  //     <div className="flex bg-[var(--secondary-text-color)]">
  //       <Sidebar 
  //         activeSection={active.active} 
  //         isMobileSidebarOpen={isMobileSidebarOpen} 
  //         setIsMobileSidebarOpen={setIsMobileSidebarOpen} 
  //       />
  //       <div className="h-screen flex-1 overflow-y-scroll overflow-x-hidden">
  //         <Navbar setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
  //         <div className="flex justify-center items-center w-full h-full"> {/* Center the loader */}
  //           <CircularProgress color="primary" /> 
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

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
  )
};

export default MainLayout;
