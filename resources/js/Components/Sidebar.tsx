import clsx from 'clsx';
import React from 'react';
import route from 'ziggy-js';
import { Icon } from './Icons';
import NavLink from './NavLink';

function Sidebar() {
    return (
        <>
            <nav className={clsx('hidden justify-center text-lg bg-violet-400 h-screen')}>
            <ul className='w-9/12 flex gap-3 flex-col'>
                <li className='mt-6'>
                    <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                        <Icon color='white' iconName="HouseDoor" className='w-6 h-6 mr-4'/>
                        <span className='text-sm'>Home</span>
                    </NavLink>
                </li>
                <li className='flex gap-3 mt-3'>
                    <NavLink href="">
                        <Icon color='white' iconName="PersonLinesFill" className='w-6 h-6 mr-4' />
                        <span className='text-sm'>User</span>
                    </NavLink>
                </li>
                <li className='flex gap-3 mt-3'>
                    <NavLink href="">
                        <Icon color='white' iconName="Bag" className='w-6 h-6 mr-4'/>
                        <span className='text-sm'>Product</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
        </>
    );
}

export default Sidebar;
