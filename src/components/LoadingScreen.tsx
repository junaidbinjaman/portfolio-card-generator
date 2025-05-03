import { Mosaic } from 'react-loading-indicators';

const LoadingScreen = () => {
  return (
    <section className='w-screen h-[70vh] flex items-center justify-center'>
      <Mosaic
        color={['#d4a5ff', '#6ab0ff']}
        size="large"
        text="Loading.."
        textColor="#d4a5ff"
      />
    </section>
  );
};

export default LoadingScreen;
