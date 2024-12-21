// /pages/[school_name]/[...slug].tsx
import { useRouter } from "next/router";
import { useEffect } from "react";

const CatchAll = () => {
    const router = useRouter();
    const { school_name } = router.query;

    useEffect(() => {
        router.replace(`/${school_name}/page-not-found`);
    }, [router, school_name]);

    return null;
};

export default CatchAll;
