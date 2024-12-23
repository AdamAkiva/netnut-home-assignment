type Props = { type: string; price: string };

/**********************************************************************************/

export default function ({ type, price }: Props) {
  return (
    <div className="flex justify-between text-gray-600">
      <span>{type}</span>
      <span>{price}</span>
    </div>
  );
}
