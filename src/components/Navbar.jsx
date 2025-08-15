import reactLogo from '../assets/react.svg'

export default function Navbar() {
  return (
    <header>
        <nav>
            <img src={reactLogo} className="logoImage" alt="React logo" />
            <span className='logoText'>React Facts</span>
        </nav>
    </header>
  )
}