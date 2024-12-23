import { useState } from "react";
import { PasswordIcon } from "../../Icons/PasswordIcon";
import "./Input.scss";

export const Input = ({value, setValue, type, icon, ...props}) => {
    const [inputType, setInputType] = useState(type);
    const [isActive, setIsActive] = useState(false);
    
    const handleChange = (e) => {
        if (setValue) {
            setValue(e.target.value);
        }
    };

    const togglePasswordVisibility = () => {
        setInputType((prev) => (prev === "password" ? "text" : "password"));
        setIsActive((prev) => !prev);
      };

    return (
        <label className="input-label">
            <div className="input-icon input-icon-left">{icon}</div>
            <input
                value={value}
                onChange={handleChange}
                {...props}
                type={inputType}
            />
            {type === "password" && (
                <div className="input-icon input-icon-right" onClick={togglePasswordVisibility}>
                    <PasswordIcon className={`password-icon ${isActive ? "active" : ""}`} />
                </div>
            )}
        </label>
    );
};

