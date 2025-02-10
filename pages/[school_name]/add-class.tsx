import React, { useState, useEffect } from 'react';
import styles from '@/styles/ClassForm.module.css';
import ClassForm from '@/components/ClassComponent/ClassForm';
import { useRouter } from 'next/router'
import { setActivePage } from '@/store/slices/sidebarSlice';
import { useAppDispatch } from '@/store/hooks';

const AddClass = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(setActivePage({active:"add-class", parentNav: "class"})); 
  })
  const teachersList = ["Mr. John", "Ms. Jane", "Dr. Smith"];
  const classCategoriesList = ["Kindergarten", "Primary", "Secondary"];

  return (
    <div className={styles.pageContainer}>
        <ClassForm
          teachers={teachersList}
          classCategories={classCategoriesList}
          onSave={(data) => console.log("Saved data:", data)}
          onCancel={() => console.log("Cancelled")}
        />;
    </div>
  );
};

export default AddClass
