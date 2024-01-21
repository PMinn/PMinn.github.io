export default function Index() {
  return (
    <main className='w-full max-w-[1920px] mx-auto relative'>
      <div className='w-full h-svh flex flex-col md:flex-row-reverse justify-center items-center gap-9 md:gap-0'>
        <div className='md:w-full md:h-full flex justify-center items-center'>
          <img src='/avatar.jpg' alt='avatar' className='rounded-full border border-black w-[80%] max-w-[500px]' width='500' height='500' />
        </div>
        <div className='md:w-full md:h-full flex flex-col justify-center items-center gap-5'>
          <div className='text-5xl mb-2 font-black'>P'Min</div>
          <div className='text-2xl font-light'>A full-stack engineer.</div>
        </div>
      </div>
    </main>
  );
}
