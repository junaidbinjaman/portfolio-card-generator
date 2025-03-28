import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/slugs`, () => {
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
      logoSrc:
        'https://raw.githubusercontent.com/junaidbinjaman/portfolio-card-generator/refs/heads/main/public/portfolio-card-generator-logo.png',
      alt: 'The logo alt description',
    });
  }),
];
