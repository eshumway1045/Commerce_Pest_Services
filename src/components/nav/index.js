

import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        isSelected,
        currentCategory,
        setisSelected,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header className="flex-row px-1 ">
            
            <nav className='module_2'>
                <ul className="flex-row center">
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && isSelected && 'navActive'
                                }`}
                            key={category.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentCategory(category);
                                    setisSelected(true);
                                }}
                            >
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                    
                </ul>
            </nav>
        </header>
    );
}

export default Nav;