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
      <div className=' dark:bg-gray-900 h-screen bg-sky-50'>
        <NavbarComponent />
        <div className='flex flex-col justify-center items-center p-5'>
          <div className='max-w-4xl bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
            <a href='#'>
              <Image className='rounded-t-lg' width={1920} height={1080} src='/Cover+Home+3.png' alt='' />
            </a>
            <div className='p-2'>
              <a
                href='#' className='inline-flex items-center py-2 px-3 text-center text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm'
              >
                Donar
                <svg aria-hidden='true' className='ml-2 -mr-1 w-4 h-4' fill='currentColor' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z' clip-rule='evenodd' /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Section: Who we are */}
      <div className=' dark:bg-gray-900 h-auto'>
        <div className='flex justify-center p-5'>
          <div className='max-w-full bg-white rounded-lg border border-gray-200 drop-shadow-lg dark:bg-gray-800 dark:border-gray-700 ring-2 ring-blue-400'>
            <div className='p-12'>
              <blockquote className='py-4 text-xl font-sans font-semibold text-center md:text-lg tracking-tight text-gray-900 dark:text-white'>
                <p>TRABAJAMOS CON ENTUSIASMO Y ALEGRÍA PARA QUE TODA LA NIÑEZ GUATEMALTECA TENGA ACCESO A UNA EDUCACIÓN DE CALIDAD, INCLUYENTE Y CON TECNOLOGÍA, DIGNA DEL SIGLO XXI.</p>
              </blockquote>
              <blockquote className='text-base font-sans font-normal text-center md:text-lg tracking-tight text-gray-900 dark:text-white'>
                <p>Somos una fundación que busca contribuir al desarrollo de Guatemala, mejorando la educación a través de la tecnología. En el futuro que nosotros imaginamos, todos los niños y adolescentes tienen acceso a los mismos recursos educativos y a docentes con capacidades que les permitan crecer y aprender aún más. Por eso trabajamos apasionadamente por ser la organización pionera, líder e innovadora y trascender en el desarrollo de Guatemala.</p>
              </blockquote>
            </div>
          </div>
        </div>

        <div className='flex justify-center p-5'>
          <div className='flex flex-col items-center bg-gradient-to-r from-red-500 to-red-600 rounded-lg border shadow-md md:flex-row md:max-w-6xl md:bg-gradient-to-b dark:border-gray-700 dark:bg-gray-800'>
            <div className='flex flex-col justify-between p-4 leading-normal'>
              <h5 className='mb-2 text-2xl font-mon font-2xl font-bold tracking-tight text-white dark:text-white'>NUESTRA MISIÓN</h5>
              <p className='mb-3 font-normal text-white text-left dark:text-gray-400 max-w-xl'>Contribuir al desarrollo de Guatemala, mejorando la educación a través de la tecnología.</p>
            </div>
            <Image className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src='/Misión+-+Home+2.png' alt='mision' width={1500} height={807} />
          </div>
        </div>

        <div className='flex justify-center p-5'>
          <div className='flex flex-col items-center bg-gradient-to-r from-sky-800 to-sky-900 rounded-lg border shadow-md md:flex-row md:max-w-6xl md:bg-gradient-to-b dark:border-gray-700 dark:bg-gray-800'>
            <Image className='object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg' src='/Misión+-+Home+2.png' alt='mision' width={1500} height={807} />
            <div className='flex flex-col justify-between p-4 leading-normal'>
              <h5 className='mb-2 text-2xl font-mon font-2xl font-bold tracking-tight text-white dark:text-white'>NUESTRA VISIÓN</h5>
              <p className='mb-3 font-normal text-white text-left dark:text-gray-400 max-w-xl'>Despertar el conocimiento para transformar la vida de los niños guatemaltecos, logrando su desarrollo integral y alcanzando su máximo potencial.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
