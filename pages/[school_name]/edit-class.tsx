import React, { useState, useEffect } from 'react';
import styles from '@/styles/ClassForm.module.css';
import ClassForm from '@/components/ClassComponent/ClassForm';


const EditClass = () => {
 
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

export default EditClass;
