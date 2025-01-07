import React, { useState, useEffect } from 'react';
import styles from '@/styles/ClassForm.module.css';

interface ClassFormProps {
  initialData?: { // Optional prop for editing
    className: string;
    teacherName: string;
    schoolFees: number;
  };
  onSave: (data: { className: string; teacherName: string; schoolFees: number }) => void;
  onCancel: () => void;
}

const ClassForm: React.FC<ClassFormProps> = ({ initialData, onSave, onCancel }) => {
  const [className, setClassName] = useState(initialData?.className || '');
  const [teacherName, setTeacherName] = useState(initialData?.teacherName || '');
  const [schoolFees, setSchoolFees] = useState(initialData?.schoolFees || '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ className, teacherName, schoolFees: Number(schoolFees) });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.heading}>{initialData ? 'Edit Class' : 'Add New Class'}</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Class*</label>
          <input 
            type="text" 
            placeholder="Enter name of class" 
            value={className} 
            onChange={(e) => setClassName(e.target.value)} 
          />
        </div>
        <br />
        <div className={styles.formGroup}>
          <label>Assigned Teacher*</label>
          <input 
            type="text" 
            placeholder="Enter class teacher name" 
            value={teacherName} 
            onChange={(e) => setTeacherName(e.target.value)} 
          />
        </div>
        <br />
        <div className={styles.formGroup}>
          <label>School Fees for Each Student*</label>
          <input 
            type="number" 
            placeholder="Enter amount of school fees" 
            value={schoolFees} 
            onChange={(e) => setSchoolFees(e.target.value)} 
          />
        </div>
        <div className={styles.formActions}>
          <button type="submit" className={styles.saveBtn}>
            Save
          </button>
          <button type="button" className={styles.cancelBtn} onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ClassForm;
