import Image from "next/image";
import { PersonOutline } from "@mui/icons-material";

interface EmployeeCardProps {
  title: string; 
  value: number; 
}

const EmployeeCard: React.FC<EmployeeCardProps> = ({ title, value }) => {
  return (
    <div className="flex w-full items-center justify-between p-4 mt-4 bg-white shadow-md rounded-lg">
      <div className="w-full">
        <div className="flex w-full justify-between">
          <div>
            <p className="text-gray-500 text-sm">{title}</p>
            <h2 className="text-2xl font-bold text-gray-800">{value}</h2>
          </div>
          <div className="flex justify-center items-center p-1 w-[30px] h-[30px] bg-[var(--secondary)] rounded-xl">
            <PersonOutline className="text-white text-[20px]"/>
          </div>
        </div>
        <div className="flex -space-x-2 mt-2">
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
            <Image
              src="/icons/avatar-icon.svg"
              alt="Staff 1"
              width={32}
              height={32}
              objectFit="cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
            <Image
              src="/icons/avatar-icon.svg"
              alt="Staff 2"
              width={32}
              height={32}
              objectFit="cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
            <Image
              src="/icons/avatar-icon.svg"
              alt="Staff 3"
              width={32}
              height={32}
              objectFit="cover"
            />
          </div>
          <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
            <Image
              src="/icons/avatar-icon.svg"
              alt="Staff 4"
              width={32}
              height={32}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EmployeeCard;
