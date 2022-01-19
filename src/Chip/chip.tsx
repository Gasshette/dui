import React from 'react';
import './chip.scss';

export interface ChipProps {
    /**
     * Size of the chip. Change the padding and font size
     */
    size?: 'lg' | 'md' | 'sm';
    /**
     * Color of the chip. Bootstrap color are overridden to match Pagily's color; Colors are choosen from Paleton
     */
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
    /**
     * a bootstrap (or else) icon to be displayed next to the text
     */
    icon?: string;
    /**
     * Where do you want to show the icon ?
     */
    iconSide?: 'right' | 'left';
    /**
     * Text contained in the chip
     */
    text: string;
}

export const Chip = ({
    size = 'md',
    color = 'secondary',
    icon,
    iconSide = 'left',
    text,
}: ChipProps) => {
    return (
        <div className={['chip-component', `bg-${color}`, size].join(' ')}>
            {iconSide === 'left' && <i className={['me-2', icon].join(' ')}></i>}
            <span>{text}</span>
            {iconSide === 'right' && <i className={['ms-2', icon].join(' ')}></i>}
        </div>
    )
}
