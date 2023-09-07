
import logo from '../assets/medstore.png'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'JOBS', href: '#', current: false },
       { name: 'Sign up', href: '#', current: false },
    { name: 'Sign in', href: '#', current: false },

  ]
  
const NavBar = () => {
  return (
    <nav className='top-0 left-0 ml-10 mt-0 border-b-2'>
    <div className='flex justify-between'>
    <img src={logo} alt=""  className='w-24 h-24 rounded-lg mt-0'/>
    <div className="flex justify-end space-x-4  mt-14 align-baseline">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={item.current?'text-gray-500 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium':'text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
    </div>
    </nav>
  )
}

export default NavBar