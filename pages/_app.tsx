import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import store from '../store/store';
import type { AppProps } from 'next/app';
import MainLayout from '@/components/MainLayout';
import { NON_MAIN_LAYOUT_LINKS } from '@/utils/constants';
import React, { Suspense } from 'react';


function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const useMainLayout = !NON_MAIN_LAYOUT_LINKS.includes(router.pathname);

    
    return (
        <Provider store={store}>
            {useMainLayout ? (
                <MainLayout>
                    {/* Suspense wraps the lazy-loaded Component */}
                    <Suspense fallback={<p>Loading page...</p>}>
                        <Component {...pageProps} />
                    </Suspense>
                </MainLayout>
            ) : (
                <Component {...pageProps} />
            )}
        </Provider>
    );
}

export default MyApp;
