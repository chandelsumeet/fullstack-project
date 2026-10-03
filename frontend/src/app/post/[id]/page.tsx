import { fetchPost } from "@/app/_postActions/post";
import "./createPost.scss";
import Form from "@/components/ui/form/form";
import { post } from "@/app/_types/post.types";
import { notFound } from "next/navigation";

import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = (await params).id;

  // fetch data
  const post: post = await fetchPost(parseInt(id));

  return {
    description: post.body,
    title: post.title,
  };
}

const Post = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const post: post = await fetchPost(parseInt(id));
  if (!post.id) {
    return notFound();
  }
  return (
    <div className="form-container">
      <Form postData={post} id={parseInt(id)} />
    </div>
  );
};
export default Post;
