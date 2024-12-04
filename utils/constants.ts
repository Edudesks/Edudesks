import dotenv from 'dotenv';

dotenv.config();

const API_ROOT_URL = process.env.API_ROOT_URL

const NON_MAIN_LAYOUT_LINKS = [
    '/',
    '/pricing-plan',
    '/login',
    '/signup',
    '/forgot-password',
    '/forgot-verification-page',
    '/forgot-verification-success',
    '/otp-confirmation',
    '/pricing-confirmation',
    '/pricing-payment',
    '/privacy-policy',
    '/reset-password',
    '/terms-of-service',
    '/verification'
]

export {API_ROOT_URL, NON_MAIN_LAYOUT_LINKS }