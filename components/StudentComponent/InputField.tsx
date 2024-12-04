import React, { ElementType, forwardRef } from "react";

interface InputFieldProps {
  label: string;
  className: string;
  icon?: ElementType;
  id: string;
  placeholder: string;
  type: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  divClass?: string;
  error?: string;
  value?: string;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      className,
      icon: Icon,
      id,
      placeholder,
      type,
      divClass,
      onChange,
      error,
      ...rest
    },
    ref
  ) => {
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
            ref={ref}
            // value={value}
            onChange={onChange}
            className={`border border-solid border-[var(--border)] placeholder:text-[var(--grey] placeholder:opacity-60 placeholder:text-sm placeholder:lg:text-normal rounded-[0.625rem] w-full focus:outline-none autofill:bg-none shadow-form-shadow ${className}`}
            {...rest}
          />
        </div>
        {error && <p className="text-sm text-[var(--danger)] mt-1">{error}</p>}
      </div>
    );
  }
);

InputField.displayName = "InputField";

export default InputField;
