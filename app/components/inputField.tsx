import { HTMLInputTypeAttribute } from "react";

/**********************************************************************************/

type Props = {
  title: string;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder: string;
};

/**********************************************************************************/

export default function ({ title, id, type, placeholder }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1" htmlFor={id}>
        {title}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full p-2 border rounded"
      />
    </div>
  );
}
