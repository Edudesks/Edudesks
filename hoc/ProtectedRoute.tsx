import { useAppSelector, useAppDispatch } from '@/store/hooks';
import { useRouter } from 'next/router';
import { RootState } from '@/store/store'; // Ensure the path to your store is correct
import { useEffect, useState } from 'react';
import { checkAuthToken } from '@/store/slices/authSlice';
import CircularProgress from '@mui/material/CircularProgress'; // Import Material-UI spinner
import Box from '@mui/material/Box'; // For centering the spinner

const withProtectedRoute = (WrappedComponent: React.ComponentType) => {
  const ProtectedRoutes: React.FC = (props) => {
    const { signinSuccess } = useAppSelector(
      (state: RootState) => state.auth
    );
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const verifyToken = async () => {
        try {
          const _ = await dispatch(checkAuthToken()).unwrap(); // Unwraps the response
        } catch (error) {
          router.push('/login'); // Redirect to login on failure
        } finally {
          setLoading(false); // Stop loading
        }
      };

      verifyToken();
    }, [dispatch, router]);

    if (loading) {
      return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh" // Full-screen centering
        >
          <CircularProgress />
        </Box>
      );
    }

    if (!signinSuccess) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  return ProtectedRoutes;
};

export default withProtectedRoute;
