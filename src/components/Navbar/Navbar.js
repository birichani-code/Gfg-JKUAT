import React from 'react';
import logo from '../../assets/images/gfg.png';
import NavbarItems from './NavbarItems';
import { FaGithub, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const github = 'https://github.com/gfgjkuat-kenya';
const instagram = 'https://www.instagram.com/gfgjkuat_student_chapter/';

function Navbar() {
	return (
		<div
			style={{
				backgroundColor: '#f9fafb',
				top: 0,
				position: 'sticky',
				paddingTop: '1rem',
				zIndex: '10',
			}}
		>
			<div className='navbar'>
				<div className='navbar-logo'>
					<Link to='/'>
						<img src={logo} alt='GfG' />
					</Link>
				</div>
				<div className='navbar-items-container'>
					<NavbarItems link='/' className='head-item'>
						Home
					</NavbarItems>
					<NavbarItems link='/about'>About</NavbarItems>
					<NavbarItems link='/teams'>Team</NavbarItems>
					<a
						href={github}
						className='navbar-items'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithub size={18} />
					</a>
					<a
						href={instagram}
						className='navbar-items'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaInstagram size={18} />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
