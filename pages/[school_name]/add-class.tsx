import React, { useState, useEffect } from 'react';
import styles from '@/styles/ClassForm.module.css';
import ClassForm from '@/components/ClassComponent/ClassForm';
import { useRouter } from 'next/router'

const AddClass = () => {
    const router = useRouter()
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
