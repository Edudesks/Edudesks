import { useState } from "react";
import Image from 'next/image';
import styles from '@/styles/TeacherProfile.module.css';
import Range from "rc-slider";
import "rc-slider/assets/index.css";

const ProgressBar = () => {
  const [range, setRange] = useState<number[]>([110000, 180000]); // Initial range values

  const handleChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      setRange(value); // Update the range in state
    }
  };

  return (
    <div style={{ width: "100%", margin: "20px auto" }}>
      <Range
        range
        min={100000}
        max={200000}
        step={1000}
        defaultValue={[110000, 180000]} // Initial slider positions
        value={range} // Controlled value
        onChange={handleChange} // Update state on slider move
        railStyle={{ backgroundColor: "#e4e9f2", height: 8 }} // Style for the rail
        trackStyle={[{ backgroundColor: "#3b82f6", height: 8 }]} // Style for the selected range
        handleStyle={[
          { borderColor: "#3b82f6", backgroundColor: "#3b82f6", width: 20, height: 20 },
          { borderColor: "#3b82f6", backgroundColor: "#3b82f6", width: 20, height: 20 },
        ]}
      />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10 }}>
        <span># {range[0]?.toLocaleString()}</span>
        <span># {range[1]?.toLocaleString()}</span>
      </div>
    </div>
  );
};

const TeacherProfile = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image 
          src="/images/profile.png" 
          alt="Teacher" 
          width={70} 
          height={70} 
          className={styles.avatar}
        />
        <div className={styles.teacherInfo}>
          <h2>Class teacher: Anita Nwosu</h2>
          <p>Assigned Class: JSS2</p>
          <p className={styles.sectionText}>Qualification/ Experience: B.Sc in Maths Edu</p>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.paymentStatus}>
          <span className={styles.sectionText}>Payment status:</span>
          <select className={styles.paymentSelect}>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
          </select>
        </div>

        <div className={styles.body}>
          <div className={styles.section}>
            <p className={styles.sectionText}>School fees Payment status for June</p>
            <ProgressBar />
          </div>

          <div className={styles.section}>
            <div className={styles.paymentDetails}>
              <span className={styles.sectionText}>Total expected Payment:</span>
              <span>₦730,000</span>
            </div>
            <div className={styles.paymentDetails}>
              <span className={styles.sectionText}>Payment Received:</span>
              <span>₦110,000</span>
            </div>
            <div className={styles.paymentDetails}>
              <span className={styles.sectionText}>Outstanding Payment:</span>
              <span>₦180,000</span>
            </div>
          </div>
          <div className={`${styles.paymentDetails} ${styles.paymentDue}`}>
            <span>Payment Due:</span>
            <span>₦180,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
