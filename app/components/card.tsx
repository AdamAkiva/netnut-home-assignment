import Image from "next/image";

/**********************************************************************************/

type Props = { src: string; alt: string; type: string; price: number };

/**********************************************************************************/

export default function ({ src, alt, type, price }: Props) {
  return (
    <div className="flex basis-1/3 flex-col border rounded-lg p-4 cursor-pointer hover:border-blue-500 transition">
      <Image
        className="mt-2"
        src={src}
        alt={alt}
        height={40}
        width={40}
      ></Image>
      <div className="text-base mt-4">{type}</div>
      <div className="text-xs">${price}/mo</div>
    </div>
  );
}

// {
//   ["Arcade", "Advanced", "Pro"].map((plan, index) => (
//     <div
//       key={index}
//       className="border rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition"
//     >
//       <div className="text-2xl mb-2">{plan}</div>
//       <div className="text-gray-500">${index * 3 + 9}/mo</div>
//     </div>
//   ));
// }
