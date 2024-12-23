type Props = { upperText: string; lowerText: string };

/**********************************************************************************/

export default function ({ upperText, lowerText }: Props) {
  return (
    <div className="flex flex-col">
      <div>
        <div className="text-xs uppercase font-bold tracking-wide">
          {upperText}
        </div>
      </div>
      <div>
        <div className="text-sm uppercase font-bold tracking-wide">
          {lowerText}
        </div>
      </div>
    </div>
  );
}
