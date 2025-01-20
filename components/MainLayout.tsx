import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/NavBar'
import { useRouter } from 'next/router';
import { CircularProgress } from '@mui/material'; // Import CircularProgress from Material UI
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { checkAuthToken } from '@/store/slices/authSlice';
import { activePage } from '@/store/slices/sidebarSlice';


const MainLayout = ({ children, schoolName }: { children: React.ReactNode, schoolName: string | undefined}) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const router = useRouter();
  const [loading, setLoading ] = useState(true)
  const dispatch = useAppDispatch();

  const active = useAppSelector(activePage);

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const payload = await dispatch(checkAuthToken()).unwrap();
        if (payload.school.schoolName !== schoolName) {
          router.push({
            pathname: '/404',
            query: { dashboard: payload.school.schoolName },
          });
        }
      } catch (error) {
        router.push('/login');
      } finally {
        setLoading(false);
      }
    };
  
    verifyToken();
  }, [dispatch, router, schoolName]);
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <CircularProgress />
      </div>
    );
  }else {
   
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
}

export default MainLayout;
