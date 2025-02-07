import React, { useState } from "react";

interface ClassFormProps {
  initialData?: {
    className: string;
    teacherName: string;
    schoolFees: number;
    classCategory: string;
  };
  teachers: string[]; // List of teachers for the dropdown
  classCategories: string[]; // List of class categories for the dropdown
  onSave: (data: { className: string; teacherName: string; schoolFees: number; classCategory: string }) => void;
  onCancel: () => void;
}

const ClassForm: React.FC<ClassFormProps> = ({ initialData, teachers, classCategories, onSave, onCancel }) => {
  const [className, setClassName] = useState(initialData?.className || "");
  const [teacherName, setTeacherName] = useState(initialData?.teacherName || "");
  const [schoolFees, setSchoolFees] = useState(initialData?.schoolFees || "");
  const [classCategory, setClassCategory] = useState(initialData?.classCategory || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ className, teacherName, schoolFees: Number(schoolFees), classCategory });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f7fafc] border-[red]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-[#4B8BBE] mb-4">
          {initialData ? "Edit Class" : "Add New Class"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Class Name Input */}
          <div>
            <label className="block text-sm font-medium text-[#041822]">Class*</label>
            <input
              type="text"
              placeholder="Enter name of class"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-[#e2e8f0] rounded-md shadow-sm focus:outline-none focus:ring-[#3182ce] focus:border-[#3182ce]"
            />
          </div>

          {/* Class Category Dropdown */}
          <div>
            <label className="block text-sm font-medium text-[#041822]">Class Category*</label>
            <select
              value={classCategory}
              onChange={(e) => setClassCategory(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-[#e2e8f0] text-[#9f9d9d] rounded-md shadow-sm focus:outline-none focus:ring-[#3182ce] focus:border-[#3182ce] bg-white"
            >
              <option value="" disabled>Select a category</option>
              {classCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Assigned Teacher Dropdown */}
          <div>
            <label className="block text-sm font-medium text-[#041822]">Assigned Teacher*</label>
            <select
              value={teacherName}
              onChange={(e) => setTeacherName(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-[#e2e8f0] text-[#9f9d9d] rounded-md shadow-sm focus:outline-none focus:ring-[#3182ce] focus:border-[#3182ce] bg-white"
            >
              <option value="" disabled>Select a teacher</option>
              {teachers.map((teacher) => (
                <option key={teacher} value={teacher}>
                  {teacher}
                </option>
              ))}
            </select>
          </div>

          {/* School Fees Input */}
          <div>
            <label className="block text-sm font-medium text-[#041822]">School Fees for Each Student*</label>
            <input
              type="number"
              placeholder="Enter amount of school fees"
              value={schoolFees}
              onChange={(e) => setSchoolFees(e.target.value)}
              className="mt-1 w-full px-3 py-2 border border-[#e2e8f0] rounded-md shadow-sm focus:outline-none focus:ring-[#3182ce] focus:border-[#3182ce]"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-6 gap-8">
            <button
              type="submit"
              className="w-40 bg-[#002F49F2] text-white px-4 py-2 rounded-full text-lg font-medium hover:bg-[#2c5282] transition duration-300"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onCancel}
              className="w-40 bg-[#f7fafc] text-[#4a5568] border border-[#002F49F2] px-4 py-2 rounded-full text-lg font-medium hover:bg-[#edf2f7] transition duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ClassForm
