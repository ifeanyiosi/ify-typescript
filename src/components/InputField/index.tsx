import { ErrorMessage } from "formik";
import { FormItem, Input, InputNumber } from "formik-antd";
import React from "react";

type Props = {
  label: string;
  name: string;
  disabled: boolean;
  placeholder: string;
  maxLength: string;
  type: string;
  prefix: React.ReactNode;
  suffix: React.ReactNode;
  required: boolean;
  passwordToggle: boolean;
  onChange: (value: string) => void
  value: string
};

const InputField = ({label, prefix, suffix, type, name, placeholder, required, passwordToggle, disabled, maxLength, onChange, value}: Props) => {
  switch (type) {
    case 'text':
      return (
        <FormItem
          name={name}
          disabled={disabled}
          label={
            <span className="font-Karla text-[16px] text-primary-9 font-bold">
              {label}
            </span>
          }
          required={required}
          maxLength={maxLength}
        >
          <Input
            name={name}
            placeholder={placeholder}
            prefix={prefix}
            suffix={suffix}
            disabled={disabled}
            maxLength={maxLength}
            onChange={onChange}
            value={ value}
            
          />
          <ErrorMessage
            render={(msg) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
    case 'number':
      return (
        <FormItem
          name={name}
          disabled={disabled}
          label={
            <span className="font-Karla text-[16px] text-primary-9 font-bold">
              {label}
            </span>
          }
          required={required}
          maxLength={maxLength}
        >
          <InputNumber
            disabled={disabled}
            name={name}
            prefix={prefix}
            controls={false}
            maxLength={maxLength}
            onChange={onChange}
            value={ value}
          />
          <ErrorMessage
            render={(msg) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
    case 'password':
      return (
        <FormItem
          name={name}
          disabled={disabled}
          label={
            <span className="font-Karla text-[16px] text-primary-9 font-bold">
              {label}
            </span>
          }
          required={required}
          maxLength={maxLength}
        >
          <Input.Password
            name={name}
            disabled={disabled}
            placeholder={placeholder}
            visibilityToggle={passwordToggle}
            prefix={prefix}
            suffix={suffix}
            maxLength={maxLength}
            onChange={onChange}
            value={value}
          />
          <ErrorMessage
            render={(msg) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
    default:
      return (
        <FormItem
          disabled={disabled}
          name={name}
          label={
            <span className="font-Karla text-[16px] text-primary-9 font-bold">
              {label}
            </span>
          }
          maxLength={maxLength}
        >
          <Input
            disabled={disabled}
            prefix={prefix}
            suffix={suffix}
            name={name}
            placeholder={placeholder}
            maxLength={maxLength}
            onChange={onChange}
            value={value}
          />
          <ErrorMessage
            render={(msg) => (
              <div className="text-red-700 text-xs mt-1">{msg}</div>
            )}
            name={name}
          />
        </FormItem>
      );
  }
};


export default InputField;
