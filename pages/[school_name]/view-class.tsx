import React, { useEffect } from 'react';
import styles from '@/styles/Class.module.css';
import ClassTable from '@/components/ClassComponent/ClassTable';
import { useRouter } from "next/router";
import ClassStats from '@/components/ClassComponent/ClassStats';
import TeacherProfile from '@/components/ClassComponent/TeacherProfile';
import { useAppDispatch } from '@/store/hooks';
import { setActivePage } from '@/store/slices/sidebarSlice';



const ClassPage: React.FC = () => {
  const router = useRouter();
  const name = Array.isArray(router.query.school_name)
  ? router.query.school_name[0]
  : router.query.school_name;
  const dispatch = useAppDispatch();
    useEffect(()=>{
      dispatch(setActivePage({active:"class", parentNav: "class"}));
    })
  return (
    <div className={styles.container}>
        <ClassStats school_name={name}/>
        <div className={styles.section}>
          <div className={styles.classTable}>
            <ClassTable/>
          </div>
          <div className={styles.teacherProfile}>
            <TeacherProfile/>
          </div>
        </div>
    </div>
  );
};

export default ClassPage
