import Head from 'next/head'
import NavbarComponent from '../components/Navbar'
import Image from 'next/image'

export default function Home () {
  return (
    <div>
      <Head>
        <title>Sonrisas Angelicales</title>
        <meta name='description' content='Sonrisas angelicales' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className=' dark:bg-gray-900 h-auto'>
        <NavbarComponent />
        <div className='flex flex-col justify-center items-center p-5'>
          <div className='max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <Image className='rounded-t-lg' height={549} width={976} src='/fortnite-x-avengers-stormbreaker-3068.jpg' alt='' />
            </a>
            <div className='p-2'>
              <a href='#' className='inline-flex items-center py-2 px-3 text-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm '>
                Donar
                <svg aria-hidden='true' className='ml-2 -mr-1 w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Section: Who we are */}
      <div className=' dark:bg-gray-900 h-auto'>
        <div className=' items-center p-5'>
          <div className='max-w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-2'>
              <h1 className='text-3xl font-bold text-center text-gray-800 dark:text-white'>¿Quiénes somos?</h1>
              <p className='text-center text-gray-600 dark:text-gray-400'>Lorem impsum.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
