import React from 'react';

const Button = (props) => {
   
    return (
        <button onClick={props.onClick} className="btn">
            {props.text}
        </button>
    );
};

//Permet de passer des valeur par defaut lors de la creation d'un button
Button.defaultProps = {
    text: 'Default text',
    color: 'orange'
}

export default Button;