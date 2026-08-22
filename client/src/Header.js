import React, { Children } from 'react';

export default function Header({children}){
    return (
        <div>
            <h1>{children}</h1>
        </div>
    )
}