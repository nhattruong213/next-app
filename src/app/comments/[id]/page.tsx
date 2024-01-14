import CommentDetailClient from "@/components/CommentDetailClinet";

export async function generateStaticParams() {
    const comments = await fetch("https://jsonplaceholder.typicode.com/comments").then((res) => res.json())
    return comments.map((comment: any) => ({
      id: String(comment.id),
    }))
}

const CommentDetail = async ( {params} : {params: {id: Number | String}} ) =>  {
    const {id} = params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);
    const comments = await res.json();
    const check: boolean = true;
    return <CommentDetailClient comment={comments} />;
}

export default CommentDetail