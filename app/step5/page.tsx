import Image from "next/image";

/**********************************************************************************/

type Props = { iconPath: string; iconAlt: string; title: string; desc: string };

/**********************************************************************************/

export default function ({ iconPath, iconAlt, title, desc }: Props) {
  return (
    <div className="flex flex-col w-2/3 p-10 gap-2 justify-center items-center">
      <Image
        className="mt-2"
        src={iconPath}
        alt={iconAlt}
        height={52}
        width={52}
      />
      <h1 className="text-3xl">Thank you!</h1>
      <span>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </span>
    </div>
  );
}
