import React from 'react'
import {NavLink} from 'react-router-dom'
const HeaderBody = ({title, description, button, location}) => {
    return (
        <div> 
                <p className='text-3xl font-bold pb-2'>{title}</p>
            <div className='flex max-sm:flex-col justify-between sm:items-center pb-8 '>
                <p className='text-base lg:text-2xl font-normal' style={{color: '#787878'}}>{description}</p>
                {(button && location) && (
                    <NavLink to={location}>
                        <button className='BtnHome font-bold text-xl max-sm:float-left' style={{borderColor: '#887856', color: '#887856' }}>{button}</button>
                    </NavLink>
                )}
            </div>
        </div>
    )
}

export default HeaderBody