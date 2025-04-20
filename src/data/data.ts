// data type
import { DataProps } from '../types/types';

const cache = new Map<string, Promise<DataProps[]>>();

export default async function fetchData(url: string): Promise<DataProps[]> {
  if (!cache.has(url)) {
    cache.set(url, getData(url));
  }

  const data = await cache.get(url);
  if (!data) {
    throw new Error(`No data found for URL: ${url}`); // Ensure no undefined is returned
  }

  return data;
}

async function getData(url: string): Promise<DataProps[]> {
  if (url === 'data') {
    return await getAlbums();
  } else {
    throw new Error('Something went wrong');
  }
}

async function getAlbums(): Promise<DataProps[]> {
  // Add a fake delay to make waiting noticeable.
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  return [
    {
      id: 13,
      title: 'Let It Be',
      year: 1970,
    },
    {
      id: 12,
      title: 'Abbey Road',
      year: 1969,
    },
    {
      id: 11,
      title: 'Yellow Submarine',
      year: 1969,
    },
    {
      id: 10,
      title: 'The Beatles',
      year: 1968,
    },
    {
      id: 9,
      title: 'Magical Mystery Tour',
      year: 1967,
    },
    {
      id: 8,
      title: "Sgt. Pepper's Lonely Hearts Club Band",
      year: 1967,
    },
    {
      id: 7,
      title: 'Revolver',
      year: 1966,
    },
    {
      id: 6,
      title: 'Rubber Soul',
      year: 1965,
    },
    {
      id: 5,
      title: 'Help!',
      year: 1965,
    },
    {
      id: 4,
      title: 'Beatles For Sale',
      year: 1964,
    },
    {
      id: 3,
      title: "A Hard Day's Night",
      year: 1964,
    },
    {
      id: 2,
      title: 'With The Beatles',
      year: 1963,
    },
    {
      id: 1,
      title: 'Please Please Me',
      year: 1963,
    },
  ];
}
