type Props = { text: string };

/**********************************************************************************/

export default function ({ text }: Props) {
  return (
    <div className="w-8 h-8 rounded-full bg-white text-blue-600 font-bold flex items-center justify-center">
      {text}
    </div>
  );
}
