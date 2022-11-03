import { Navbar, Button } from 'flowbite-react'

export default function NavbarComponent () {
  return (
    <Navbar
      className='bg-blue-50 border border-gray-400 dark:bg-gray-800'
      fluid
      rounded
    >
      <Navbar.Brand href='/'>
        <span className='self-center whitespace-nowrap text-ms font-semibold dark:text-white'>
          Sonrisas Angelicales
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2 justify-center'>
        <Button type='button' class='text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm text-center'>
          Donar
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          className='active:text-red-500'
          href='/navbars'
        >
          Sobre SA
        </Navbar.Link>
        <Navbar.Link href='/navbars'>
          Nuestro Trabajo
        </Navbar.Link>
        <Navbar.Link href='/navbars'>
          Nuestro Impacto
        </Navbar.Link>
        <Navbar.Link href='/navbars'>
          Recaudación
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
