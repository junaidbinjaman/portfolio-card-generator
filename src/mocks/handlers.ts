import { http, HttpResponse } from 'msw';

let requestCount = 0;
 
export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/slugs`, () => {
    requestCount++;

    console.log('API count ' + requestCount + 'times');

    return HttpResponse.json([
      {
        pageId: 123,
        title: 'Terms & conditions',
        slug: 'terms-and-conditions'
      },
      {
        pageId: 3532,
        title: 'Privacy Policy',
        slug: 'privacy-policy'
      }
    ])
  }),
]
