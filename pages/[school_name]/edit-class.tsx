import React, { useState, useEffect } from 'react';
import styles from '@/styles/ClassForm.module.css';
import ClassForm from '@/components/ClassComponent/ClassForm';
import { useAppDispatch } from '@/store/hooks';
import { setActivePage } from '@/store/slices/sidebarSlice';
import withProtectedRoute from '@/hoc/ProtectedRoute';


const EditClass = () => {
 const dispatch = useAppDispatch();
   useEffect(()=>{
    dispatch(setActivePage({active:"edit-class", parentNav: "class"}));
     
   })
  return (
    <div className={styles.pageContainer}>
    <ClassForm 
    initialData={{
      className: 'JSS1',
      teacherName: 'John Doe',
      schoolFees: 50000,
    }}
    onSave={(data) => console.log('Edit Class Data:', data)} 
    onCancel={() => console.log('Cancel Edit')} 
  />
  </div>
  );
};

export default withProtectedRoute(EditClass);
