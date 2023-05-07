import Image from "next/image";

interface FlagProps {
  code: string;
  name?: string;
  size?: number;
}

const Flag: React.FC<FlagProps> = ({ code, name, size = 24 }) => (
  <Image
    src={`/flags/${code}.svg`}
    alt={`${name} flag`}
    height={size}
    width={size}
  />
);

export default Flag;
