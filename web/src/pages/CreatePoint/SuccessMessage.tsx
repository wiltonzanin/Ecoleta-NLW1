import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

function SuccessMessage(){
    return(
        <div className="success">
            <FiCheckCircle />
            <span>Cadastro Conluído!</span>
        </div>
    );
}

export default SuccessMessage;