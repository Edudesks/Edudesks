import React from 'react';
import styles from '@/styles/Class.module.css';

const ClassPage: React.FC = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Add New Class</h2>
        <form>
          <div className={styles.formGroup}>
            <label>Class*</label>
            <input type="text" placeholder="Enter name of class" />
          </div><br></br>
          <div className={styles.formGroup}>
            <label>Assigned Teacher*</label>
            <input type="text" placeholder="Enter class teacher name" />
          </div>
          <br></br>
          <div className={styles.formGroup}>
            <label>School Fees for Each Student*</label>
            <input type="number" placeholder="Enter amount of school fees" />
          </div>
          <div className={styles.formActions}>
            <button type="submit" className={styles.saveBtn}>
              Save
            </button>
            <button type="button" className={styles.cancelBtn}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClassPage;
