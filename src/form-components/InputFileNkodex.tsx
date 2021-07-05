import axios from "axios";
import { FormEvent } from "react";

function InputFileNkodex({
  input,
  onChange,
  placeholder,
  label,
}: {
  input: string | undefined | number;
  onChange: (name: string, f: FileList | null) => void;
  placeholder: string;
  label: string;
}) {
  function handleChange(e: FormEvent<HTMLInputElement>) {
    let fileName = e.currentTarget.value;
    let file = e.currentTarget.files;
    
    onChange(fileName, file);
  }
  return (
    <>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          {/* <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 sm:text-sm">$</span>
          </div> */}
          <input
            type="file"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-3 pr-3 sm:text-sm border-gray-300 rounded-md text-left"
            placeholder={placeholder}
            value={input}
            onChange={handleChange}
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            {/* <select
            id="currency"
            name="currency"
            className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
          >
            <option>USD</option>
            <option>CAD</option>
            <option>EUR</option>
          </select> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default InputFileNkodex;
