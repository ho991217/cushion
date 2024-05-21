import Router from './router';

export default function App() {
  return (
    <div className='w-screen h-screen flex flex-col items-center justify-start bg-black text-white p-5 overflow-y-scroll overflow-x-hidden'>
      <Router />
    </div>
  );
}
