import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header className='sticky-header'>
        <nav className='menu-horizontal'>
            <Link to={'/'}><img className='logo' src='/src/assets/img/Logo/LOGO CORIUM NEW.png' alt='Logo'/></Link>
            <Link to={'/'}>Inico</Link>
            <Link to={'/quienesSomos'}>quienes somos </Link>
            <Link to={'/vehiculos'}>Vehiculos</Link>
            <Link to={'/materiales'}>Materiales</Link>
            <Link to={'/contacto'}>Contacto</Link>
            <Link to={'/lista-trabajos'}>Listado Trabajos</Link>
            <Link to={'/crear-trabajo'}>crear Trabajo</Link>
        </nav>
    </header>
  )
}

export default Header