import { http, HttpResponse, delay } from 'msw';
import { data } from './data';

let count = 0;

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/slugs`, () => {
    count++;
    console.log(count);

    return HttpResponse.json([
      {
        pageId: 123,
        title: 'Terms & conditions',
        slug: 'terms-and-conditions',
      },
      {
        pageId: 3532,
        title: 'Privacy Policy',
        slug: 'privacy-policy',
      },
      {
        pageId: 3532,
        title: 'Password Reset',
        slug: 'password-reset',
      },
      {
        pageId: 3532,
        title: 'Login',
        slug: 'login',
      },
    ]);
  }),

  http.get(`${import.meta.env.VITE_API_URL}/logo`, () => {
    return HttpResponse.json({
      logoSrc: '../../public/portfolio-card-generator-logo.png',
      alt: 'The logo alt description',
    });
  }),

  http.get(`${import.meta.env.VITE_API_URL}/pages/terms-and-conditions`, async () => {
    await delay(1000);

    return HttpResponse.json(data.termsAndConditions);
  }),

  http.get(`${import.meta.env.VITE_API_URL}/pages/privacy-policy`, async () => {
    await delay(1000);
    return HttpResponse.json(data.privacyPolicy);
  }),

  http.post(`${import.meta.env.VITE_API_URL}/auth/password-reset-request`, async ({ request }) => {
    await delay(4000);
    const { email } = (await request.json()) as {
      email: string;
    };

    console.log('Password reset requested for email: "%s"', email);
    return HttpResponse.json({
      message: 'Password reset request sent successfully',
    });
  }),
];
