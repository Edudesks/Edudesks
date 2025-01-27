import Image from 'next/image';
import { EmployeeCardProps } from "@/types/employee";
const EmployeeSearchFilter = ({ title, value }:EmployeeCardProps) => {
    return (
      <form className="flex items-center my-4 gap-4 py-4">
        {/* Input Container */}
        <div className="flex gap-4 flex-1">
          {/* Name Input */}
          <div className="flex-1">
            <div className="mb-2">Name</div>
            <div className="flex border gap-2 pl-4 bg-[var(--border)] border-gray-300 rounded-lg ">
                <Image
                    src="/icons/search-icon.svg"
                    alt="search icon"
                    width={20}
                    height={20}
                />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Type in a name..."
                className="w-full pr-4 py-2 bg-[var(--border)] outline-none"
              />
            </div>
          </div>
  
          {/* Department Dropdown */}
          <div className="flex-1">
            <div className="mb-2">Department</div>
            <select
              id="department"
              name="department"
              className="w-full px-4 py-2 bg-[var(--border)] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All</option>
              <option value="science">Science</option>
              <option value="arts">Arts</option>
              <option value="commerce">Commerce</option>
            </select>
          </div>
  
          {/* Level Dropdown */}
          <div className="flex-1">
            <div className="mb-2">Level</div>
            <select
              id="level"
              name="level"
              className="w-full px-4 py-2 bg-[var(--border)] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All</option>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="300">300</option>
              <option value="400">400</option>
            </select>
          </div>
        </div>
  
        {/* Search Button */}
        <button
          type="submit"
          className="flex items-center self-end w-[150px] gap-5 px-4 py-2 bg-[var(--primary)] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M11 17a6 6 0 100-12 6 6 0 000 12z"
            />
          </svg>
          Search
        </button>
      </form>
    );
  };
  
  export default EmployeeSearchFilter;
  