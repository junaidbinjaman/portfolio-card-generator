import { http, HttpResponse } from 'msw'
 
export const handlers = [
  http.get(`${import.meta.env.VITE_API_URL}/slugs`, () => {
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
