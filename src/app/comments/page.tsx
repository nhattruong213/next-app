import CommentClient from "@/components/Comment";

const Comment = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments = await res.json();
  return <CommentClient comments={comments} />;
};
export default Comment;
