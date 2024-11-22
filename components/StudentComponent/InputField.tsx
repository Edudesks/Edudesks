import React, { ElementType } from "react";

interface InputFieldProps {
  label: string;
  className: string;
  icon?: ElementType;
  id: string;
  placeholder: string;
  value: string;
  type: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  divClass?: string
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  className,
  icon: Icon,
  id,
  placeholder,
  value,
  type,
  divClass,
  onChange,
}) => {
  return (
      <div className={`flex flex-col gap-[0.4375rem] ${divClass}`}>
        <label
          htmlFor={id}
          className=" text-sm text-[var(--primary-text-color)] whitespace-nowrap"
        >
          {label}
        </label>
        <div className="w-full flex relative items-center text-[var(--grey)]">
          {Icon && (
            <span className="absolute left-2.5">
              <Icon size={18} />
            </span>
          )}
          <input
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`border border-solid border-[var(--border)] placeholder:text-[var(--grey] placeholder:opacity-60 placeholder:text-sm placeholder:lg:text-normal rounded-[0.625rem] w-full focus:outline-none autofill:bg-none shadow-form-shadow ${className}`}
          />
        </div>
      </div>
  );
};

export default InputField;
