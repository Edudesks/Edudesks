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
    dispatch(setActivePage("class")); 
  })
  return (
    <div className={styles.pageContainer}>
        <ClassForm 
            onSave={(data) => router.push('/Edudesk/class')} 
            onCancel={() => console.log('Cancel Edit')} 
        />
    </div>
  );
};

export default AddClass;
