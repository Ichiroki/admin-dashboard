import {
    HouseDoor,
    PersonLinesFill,
    Bag
} from 'react-bootstrap-icons'
import {IconProps} from 'react-bootstrap-icons'
import clsx from 'clsx'
import React from 'react'

export const icons = {
    HouseDoor,
    PersonLinesFill,
    Bag
}

interface Props extends IconProps {
    iconName: keyof typeof icons
    className?: string
    color: string
}

export const Icon = ({iconName, color, className, ...props}: Props) => {
    const BootstrapIcon = icons[iconName]
    return <BootstrapIcon className={clsx(className)} color={color} {...props} />
}
