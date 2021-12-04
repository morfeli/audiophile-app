import Image from "next/image";
import Link from "next/link";

const SpeakerCards = (props) => {
  return (
    <li id={props.id}>
      <div>
        <Image src={props.src} width={300} height={300} />
      </div>
      {props.new ? <p>New Product</p> : null}
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <Link href="/">
        <button>See Product</button>
      </Link>
    </li>
  );
};

export default SpeakerCards;
