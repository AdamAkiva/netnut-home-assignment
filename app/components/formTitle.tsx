type Props = { title: string; desc: string };

/**********************************************************************************/

export default function ({ title, desc }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-3">{title}</h1>
      <p className="text-gray-500 mb-5">{desc}</p>
    </div>
  );
}
