import Link from "next/link";

type Props = { link: string; btnText: string };

/**********************************************************************************/

export default function ({ link, btnText }: Props) {
  return (
    <Link
      href={link}
      className="w-3/12 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 self-end mt-6"
    >
      <button type="submit">{btnText}</button>
    </Link>
  );
}
