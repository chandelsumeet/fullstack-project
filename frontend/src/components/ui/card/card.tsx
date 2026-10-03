import "./card.scss";
import { Lato } from "next/font/google";
import Link from "next/link";

interface CardProps {
  id: number;
  title: string;
  body: string;
}

const lato = Lato({
  weight: ["400", "700"],
  style: "italic",
  display: "swap",
  subsets: ["latin"],
});

const Card = ({ title, body, id }: CardProps) => {
  return (
    <Link href={`post/${id}`}>
      <div className={`${lato.className} card`}>
        <h3 className={`${lato.className} text-center m-0`}>{title}</h3>
        <h6 className={`${lato.className} m-0`}>{body}</h6>
      </div>
    </Link>
  );
};
export default Card;
