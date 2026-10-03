import { fetchPosts } from "@/app/_postActions/post";
import { post } from "@/app/_types/post.types";
import Card from "../card/card";
import "./card-list.scss";
const CardList = async () => {
  const data: post[] = await fetchPosts();
  return (
    <div className="card-list">
      {data.map(({ id, title, body }: post) => (
        <Card key={id} id={id} title={title} body={body} />
      ))}
    </div>
  );
};
export default CardList;
