import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";


export const ConstructionPage = () => {

    const image = require('../shared/imgs/const.avif')

    const style : React.CSSProperties = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <div className="main">
            <Card style={style}>
            </Card>
        </div>
    )
};