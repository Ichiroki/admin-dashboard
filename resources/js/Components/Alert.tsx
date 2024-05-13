import clsx from 'clsx';
import React, { useState } from 'react'
import { Icon } from './Icons';

interface AlertProps {
    message: string
}

function Alert({message}: AlertProps) {
    const [show, setShow] = useState(true)

    return (
        <div className={show ? clsx('flex items-center justify-between border-2 border-slate-50 rounded-lg p-4') : clsx('hidden')}>
            <span>{message}</span>
            <Icon iconName='X' color='white' onClick={() => setShow(false)} className='w-8 h-8'/>
        </div>
    );
}

export default Alert;
