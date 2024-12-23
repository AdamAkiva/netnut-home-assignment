type Props = { title: string; desc: string; price: number };

/**********************************************************************************/

export default function ({ title, desc, price }: Props) {
  return (
    <div className="flex border rounded-lg p-4 my-3 cursor-pointer hover:border-blue-500 transition">
      <div className="flex justify-center items-center basis-1/6">
        {/* TODO Insert checkbox */}
      </div>
      <div className="flex-col basis-4/6">
        <div className="text-base">{title}</div>
        <div className="text-xs">{desc}</div>
      </div>
      <div className="flex justify-center items-center text-xs basis-1/6">
        +${price}/mo
      </div>
    </div>
  );
}
