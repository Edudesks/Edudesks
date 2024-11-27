import { useAppSelector } from '@/store/hooks';
import { useRouter } from 'next/router';
import { RootState } from '@/store/store'; // Ensure correct path to your store setup
import { useEffect } from 'react';
import { useAppDispatch } from '@/store/hooks';
import { checkAuthToken } from '@/store/slices/authSlice';

const withProtectedRoute = (WrappedComponent: React.ComponentType) => {
  const ProtectedRoutes =  (props: any) => {
    const { signinSuccess } = useAppSelector((state: RootState) => state.auth);
    const router = useRouter();
    const dispatch = useAppDispatch();

    useEffect(() => {
      dispatch(checkAuthToken());
    }, [dispatch]);

    useEffect(() => {
      if (!signinSuccess) {
        router.push('/login');
      }
    }, [signinSuccess, router]);

    if (!signinSuccess) {
      return null;
    }
    return <WrappedComponent {...props} />;
  };
  return ProtectedRoutes
};

export default withProtectedRoute;
