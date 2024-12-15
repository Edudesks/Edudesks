import React from 'react';
import styles from '@/styles/Class.module.css';
import withProtectedRoute from '@/hoc/ProtectedRoute';
import ClassTable from '@/components/ClassComponent/ClassTable';

import ClassStats from '@/components/ClassComponent/ClassStats';
import TeacherProfile from '@/components/ClassComponent/TeacherProfile';



const ClassPage: React.FC = () => {
  return (
    <div className={styles.container}>
        <ClassStats />
        <div className={styles.section}>
            <ClassTable/>
            <TeacherProfile/>
        </div>
    </div>
  );
};

export default ClassPage;
