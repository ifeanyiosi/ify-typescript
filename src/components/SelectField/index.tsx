import React from 'react'
import { Select, FormItem } from "formik-antd";
import { ErrorMessage } from "formik";

type Props = {
  onSearch: () => void;
  showSearch: boolean;
  children: React.ReactNode;
  label: string;
  onChange: () => void;
  name: string;
  listHeight: number;
  listItemHeight: number;
  placeholder: string;
  options: string
  
}

export const { Option } = Select;

const SelectField = ({
  onSearch,
  showSearch,
  children,
  label,
  onChange,
  name,
  listHeight,
  listItemHeight,
  placeholder,
  options,
}: Props) => (
  <FormItem name={name} label={label}>
    <Select
      className="border rounded-lg"
      showSearch={showSearch}
      onSearch={onSearch}
      name={name}
      placeholder={placeholder}
      options={options}
      optionFilterProp="children"
      filterOption={(input: any, option: any) =>
        option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
      size="large"
      listHeight={listHeight}
      listItemHeight={listItemHeight}
      onChange={onChange}
      style={{
        width: '100%',
        fontSize: '16px',
        ':placeholder': { fontWeight: 400 },
      }}
      bordered={false}
    >
      {children}
    </Select>
    <ErrorMessage
      render={(msg) => <div className="text-red-700 text-xs mt-1">{msg}</div>}
      name={name}
    />
  </FormItem>
)


export default SelectField