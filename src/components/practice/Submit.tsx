import { useFormStatus } from 'react-dom';

export default function Submit() {
  const { pending, data } = useFormStatus();

  console.log(data?.get('firstName'))

  return (
    <button
      className="bg-blue-400 py-5 px-10 outline-0 border-0 rounded-xl text-white text-lg disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}>
      {pending ? 'Working..' : 'Submit'}
    </button>
  );
}
