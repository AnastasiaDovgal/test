import React from 'react';
import './form.css';

// function Form() {
//     return (
//         <div className="form">
//             <header className="form-header">
//                 <h1>Form</h1>
//             </header>
//         </div>
//     );
// }

// ОДНО И ТО ЖЕ

class Form extends React.Component {
    render() {
        return (
            <div className="form">
                <header className="form-header">
                    <h1>Form</h1>
                </header>
            </div>
        );
    }
}

// прописывать экспортируемые компоненты
export default Form;