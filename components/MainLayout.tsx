import React, { useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/NavBar';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchSchoolName, selectSchoolName, selectSchoolStatus } from '@/store/slices/schoolSlice';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { school_name } = router.query;

  const schoolName = useAppSelector(selectSchoolName);
  const status = useAppSelector(selectSchoolStatus);

  useEffect(() => {
    if (school_name && school_name === 'Edudesk') {
      dispatch(fetchSchoolName('Edudesk'));
    } else if (school_name && school_name !== 'Edudesk') {
      dispatch(fetchSchoolName('Not Found'));
    }
  }, [school_name, dispatch]);

  if (schoolName === 'Not Found') {
    return <p>School not found</p>;
  }

  if (status === 'loading') {
    return <p>Loading school details...</p>;
  }

  return (
    <div className="flex bg-[var(--secondary-text-color)]">
      <Sidebar 
        activeSection={router.pathname.split("/")[1]} 
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
