interface EmployeeCardProps {
    title: string; 
    value: number; 
}

interface EducationDetailsProps {
    education: string;
    institution: string;
}
interface ProfileContactProps {
    phoneNumber: string;
    address: string;
}
interface EmployeeData {
    _id: string;
    personal: {
        otherName: string;
        lastName: string;
        gender: ("Male" | "Female")[];
        expectedSalary: string
    };
    position: {
        role: string
    };
    contact: {
        phoneNumber: number
    };
    supportingDocuments: {
        profilePicture: string;
    };
    category: string
}

interface ViewEmployee {
    employeeName: string;
    gender: string;
    role: string;
    phoneNumber: string;
    salary: string;
    dot: string;
}

export type {
    EmployeeCardProps, EducationDetailsProps,
    ViewEmployee, EmployeeData, ProfileContactProps
}