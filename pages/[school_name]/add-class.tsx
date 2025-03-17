import React, { useEffect } from 'react';
import styles from '@/styles/ClassForm.module.css';
import ClassForm from '@/components/ClassComponent/ClassForm';
import { useRouter } from 'next/router';
import { setActivePage } from '@/store/slices/sidebarSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addClass, ClassData } from '@/store/slices/classSlice'; // Import from your slice

const AddClass = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.class); // Get loading and error state
  
  useEffect(() => {
    dispatch(setActivePage({ active: "add-class", parentNav: "class" }));
  }, [dispatch]);

  const teachersList = ["Mr. John", "Ms. Jane", "Dr. Smith"];
  const classCategoriesList = ["Kindergarten", "primary", "secondary"];
  
  const handleSave = async (data: {
    className: string;
    teacherName: string;
    schoolFees: number;
    classCategory: string;
  }) => {
    try {
      // Map the form data to match the ClassData interface from the slice
      const classData: ClassData = {
        className: data.className,
        classCategory: data.classCategory,
        classTeacher: data.teacherName, // Map teacherName to classTeacher
        classFee: data.schoolFees     // Map schoolFees to classFee
      };

      // Dispatch the addClass thunk and wait for the result
      const result = await dispatch(addClass(classData)).unwrap();
      
      console.log("Class added successfully:", result);
      router.push('/success-page'); // Adjust the route as needed
      
    } catch (err) {
      console.error("Error adding class:", err);
      // Error is already in the Redux state, no need to handle it separately unless you want custom UI
    }
  };

  const handleCancel = () => {
    console.log("Cancelled");
    router.push('/previous-page'); // Adjust the route as needed
  };

  return (
    <div className={styles.pageContainer}>
      <ClassForm
        teachers={teachersList}
        classCategories={classCategoriesList}
        onSave={handleSave}
        onCancel={handleCancel}
        // isLoading={isLoading} // Pass loading state to the form
        // error={error}        // Pass error state to the form
      />
      {isLoading && <p>Adding class...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
    </div>
  );
};

export default AddClass;