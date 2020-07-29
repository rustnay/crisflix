import React from "react";

function FormField({label, type, name, value, onChange}) {

    if(type === 'textarea'){
        return(
            <div>
                <label>
                    {label}
                    <textarea
                    name={name}
                    value={value}
                    onChange={onChange }
                    minLength="3"
                    
                    />
                </label>
            </div>
        );
    }

    return(
        <div>
            <label>
                {label}
                <input
                type={type}
                name={name}
                value={value}
                onChange={onChange }
                />
            </label>
        </div>
    );
}

export default FormField;

