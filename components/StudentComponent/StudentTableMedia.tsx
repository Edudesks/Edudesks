import Link from "next/link";
import Image from "next/image";
import {Box,} from "@mui/material";
interface TableValue {
    image: JSX.Element;
    name:JSX.Element;
    studentID: JSX.Element;
    idClass: JSX.Element;
    linkIt: JSX.Element;
  }
export default function StudentTableMedia (){

    const tableValue: TableValue[] = [
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Joseph Olawole</p>
          ),
          studentID: <p>A2-001</p>,
          idClass: <p>JSS 1A</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Grace Adebayo</p>
          ),
          studentID: <p>A2-002</p>,
          idClass: <p>JSS 1A</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },

        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Chuka Okafor</p>
          ),
          studentID: <p>A2-003</p>,
          idClass: <p>JSS 1A</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Uche Ibe</p>
          ),
          studentID: <p>A2-004</p>,
          idClass: <p>JSS 1A</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Mary Johnson</p>
          ),
          studentID: <p>A2-005</p>,
          idClass: <p>JSS 1B</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Solomon Adeyemi</p>
          ),
          studentID: <p>A2-006</p>,
          idClass: <p>JSS 1B</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name :(
            <p>Rachel Okoye</p>
          ),
          studentID: <p>A2-007</p>,
          idClass: <p>JSS 1B</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Adebayo Olatunji</p>
          ),
          studentID: <p>A2-008</p>,
          idClass: <p>JSS 1B</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Shola Akinola</p>
          ),
          studentID: <p>A2-009</p>,
          idClass: <p>JSS 2A</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Femi Ajayi</p>
          ),
          studentID: <p>A2-010</p>,
          idClass: <p>JSS 2A</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>David Adebayo</p>
          ),
          studentID: <p>A2-011</p>,
          idClass: <p>JSS 2A</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Olivia Adeola</p>
          ),
          studentID: <p>A2-012</p>,
          idClass: <p>JSS 2B</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
        { 
          image: (
              <div className='w-[50px] h-[50px]'>
                <Image src={"/student_profile_icon.svg"} alt="employees icon" width={1000} height={1000} loading="lazy" quality={75} />
              </div>
          ),
          name:(
            <p>Victoria Ofo</p>
          ),
          studentID: <p>A2-013</p>,
          idClass: <p>JSS 2B</p>,
          linkIt: <Link href="#" className="text-white no-underline text-[14px]">View Profile</Link>
        },
      ];

    return(
        <>
            <Box className='p-4 flex flex-col gap-4' sx={{ maxWidth: "100%", marginTop:'3rem' }}>
            {tableValue.map((row, index) => (
              <section key={index} className="flex items-center justify-between">
                <div className="flex items-start gap-4 w-full">
                <p>
                    {row.image}
                </p>
                <div className="flex flex-col w-full">
                    <p>{row.name}</p>
                    <div className="flex items-center gap-1">{row.studentID} / {row.idClass}</div> 
                </div>
                </div>
                <button className="w-[8rem] h-auto p-2 bg-[var(--secondary)] rounded-[15px]">{row.linkIt}</button>
              </section>))}
            </Box>
        </>
    )
} 