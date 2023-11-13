import React from 'react';
import Image from 'next/image';

interface CInputProps {
  icon?: string;
  placeholder?: string;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  errorMsg?: string;
  border?: boolean;
  value?: string | number | any;
  disabled?: boolean;
}

const CInput = ({
  icon,
  placeholder,
  className,
  error,
  errorMsg,
  onChange,
  border,
  value,
  disabled,
  ...props
}: CInputProps) => {
  return (
    <div className={className}>
      <div className="relative w-full">
        {icon && (
          <div className="absolute bottom-4 left-3.5">
            <Image src={icon} width={22} height={22} alt="inputIcon" />
          </div>
        )}

        <input
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          className={`${icon ? 'px-12' : 'px-4'}
           self-stretch rounded-xl placeholder-mutedBlue text-midnightBlue text-base w-full xxl:h-14 h-12 p-4 bg-neutral-100 justify-start items-center inline-flex outline-none border
           ${border ? 'focus:border-darkBlue' : 'border-transparent'}  
           ${error && 'border !border-error'}
           ${disabled && 'cursor-not-allowed !select-none text-mutedBlue'}
          `}
          value={value}
          disabled={disabled}
          {...props}
        />

        <div className="h-[20px] absolute mt-[6px] ml-1">
          {error && errorMsg && <span className="text-error text-sm">{errorMsg}</span>}
        </div>
      </div>
    </div>
  );
};

export default CInput;