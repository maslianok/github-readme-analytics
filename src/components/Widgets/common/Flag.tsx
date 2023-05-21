const U200D = String.fromCharCode(8205);
const UFE0Fg = /\uFE0F/g;

function toCodePoint(unicodeSurrogates: string) {
  const r = [];
  let c = 0,
    p = 0,
    i = 0;

  while (i < unicodeSurrogates.length) {
    c = unicodeSurrogates.charCodeAt(i++);
    if (p) {
      r.push((65536 + ((p - 55296) << 10) + (c - 56320)).toString(16));
      p = 0;
    } else if (55296 <= c && c <= 56319) {
      p = c;
    } else {
      r.push(c.toString(16));
    }
  }
  return r.join("-");
}

const getIconCode = (char: string) =>
  toCodePoint(char.indexOf(U200D) < 0 ? char.replace(UFE0Fg, "") : char);

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

interface FlagProps {
  code: string;
  name?: string;
  size?: number;
  inline?: boolean;
}

const Flag: React.FC<FlagProps> = ({
  code,
  name,
  size = 24,
  inline = false,
}) => {
  const flagEmoji = getFlagEmoji(code);

  if (inline) {
    return <>{flagEmoji}</>;
  }

  const iconCode = getIconCode(flagEmoji);

  return (
    <img
      src={`https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/${iconCode}.svg`}
      alt={`${name} flag`}
      height={size}
      width={size}
    />
  );
};

export default Flag;
