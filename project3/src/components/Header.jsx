import logo from '../assets/troll-face.png'


export default function Header() {
    return (
        <nav className='nav-header'>
            <img src={logo} alt="" className='nav-logo' />
            <h3 className='nav-title'>Meme Generator</h3>
            <h4>React Course - Project 3</h4>
        </nav>
    )
}