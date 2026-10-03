import Link from "next/link";
import Image from "next/image";
import error from "../../assets/error.svg";
const NotFound = () => {
  return (
    <div>
      <div className="flex justify-center flex-col gap-5">
        <h2 className="text-center">
          Could not find requested posts. Please check the post id
        </h2>
        <div className="flex justify-center">
          <Image src={error} alt="error" width={200} />
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Link href="/">Return Home</Link>
      </div>
    </div>
  );
};
export default NotFound;
