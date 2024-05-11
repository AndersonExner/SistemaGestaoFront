import React, { useState } from "react";
import  Card  from "react-bootstrap/Card";


export const NotFoundPage = () => {

    const image = require('../Shared/imgs/404.jpg')

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