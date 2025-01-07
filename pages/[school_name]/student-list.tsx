import StudentFilterProfile from "@/components/StudentComponent/StudentFilterProfile";
import StudentTable from "@/components/StudentComponent/StudentTable";
import StudentTableMedia from "@/components/StudentComponent/StudentTableMedia";
import { inter, openSans } from "@/app/fonts/fonts";
import { useState, useEffect } from "react";
import { setActivePage } from "@/store/slices/sidebarSlice";
import { useAppDispatch } from "@/store/hooks";
import withProtectedRoute from "@/hoc/ProtectedRoute";
function StudentList (){
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
          setWindowWidth(window.innerWidth);
          const updateWindowWidth = () => setWindowWidth(window.innerWidth);
          window.addEventListener("resize", updateWindowWidth);
          return () => window.removeEventListener("resize", updateWindowWidth);
        }
      }, []);
      const dispatch = useAppDispatch();
      useEffect(()=>{
        dispatch(setActivePage({active:"student-list", parentNav: "student"})); 
      })
      const isBelow1184 = windowWidth <= 1184;
      const isAbove1184 = windowWidth > 1184;
    return(
        <>
            <div className={`${openSans.className}`}>
            <StudentFilterProfile/>
            {isAbove1184 && (<StudentTable/>)}
            {isBelow1184 && (<StudentTableMedia/>)}
            </div>
        </>
    )
}

export default withProtectedRoute(StudentList)