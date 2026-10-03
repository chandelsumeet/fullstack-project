"use client";
import { MdOutlineModeEdit } from "react-icons/md";
import Label from "../label/label";
import InputElement from "../input/inputElement";
import { post } from "@/app/_types/post.types";
import { IoMdAdd } from "react-icons/io";
import { Suspense, useState } from "react";
import { createNewPost, updatePost } from "@/app/_postActions/post";
import { toast } from "@/hooks/use-toast";
const Form = ({ postData, id }: { postData: post; id: number }) => {
  const [editing, setEditing] = useState<boolean>(false);
  const [newPost, setNewPost] = useState<boolean>(false);
  const [formData, setFormData] = useState<post>(postData);

  const handleFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev: post) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNewPost = () => {
    setFormData({ title: "", body: "", id: -10, userId: -10 });
    setNewPost(true);
    setEditing(true);
  };

  const submitPostData = async () => {
    setEditing(false);
    if (newPost) {
      const { message } = await createNewPost(formData);
      toast({
        title: "Success",
        description: message,
      });
    } else {
      const { message } = await updatePost(id, formData);
      toast({
        title: "Success",
        description: message,
      });
    }
  };

  return (
    <>
      <Suspense>
        <div className="flex justify-end">
          <button
            className="flex items-center gap-1"
            onClick={() => handleNewPost()}
          >
            <IoMdAdd size={20} /> New Post
          </button>
        </div>
        {formData ? (
          <div className="flex justify-center">
            <form action={submitPostData}>
              <div className="flex flex-col gap-4">
                <div className="flex justify-end ">
                  <button
                    className="text-xl border-spacing-2 cursor-pointer flex justify-center gap-1"
                    type="button"
                    onClick={() => setEditing((prev: boolean) => !prev)}
                  >
                    <MdOutlineModeEdit size={25} />
                    Edit
                  </button>
                </div>
                <div>
                  <Label labelText="Title" />
                  <InputElement
                    title="Click on edit button to update the post"
                    name="title"
                    value={formData?.title}
                    disabled={!editing}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleFormData(e)
                    }
                  />
                </div>
                <div>
                  <Label labelText="Body" />
                  <textarea
                    title="Click on edit button to update the post"
                    name="body"
                    rows={5}
                    className="h-auto disabled:cursor-not-allowed"
                    value={formData?.body}
                    disabled={!editing}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleFormData(e)
                    }
                  />
                </div>
                <div className="flex justify-center items-center max-w-full">
                  <button
                    type="submit"
                    disabled={!editing}
                    className="text-xl border-spacing-2 cursor-pointer disabled:cursor-not-allowed"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : null}
      </Suspense>
    </>
  );
};

export default Form;
