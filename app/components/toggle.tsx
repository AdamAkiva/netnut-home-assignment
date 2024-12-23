type Props = { leftText: string; rightText: string };

/**********************************************************************************/

export default function ({ leftText, rightText }: Props) {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <span className="me-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {leftText}
      </span>
      <input type="checkbox" value="" className="sr-only peer" />
      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {rightText}
      </span>
    </label>
  );
}