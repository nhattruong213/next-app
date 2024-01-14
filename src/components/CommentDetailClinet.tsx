"use client";
interface Comments {
  PostId: number;
  id: number;
  email: string;
  body: string;
}
const CommentDetailClient = (props: { comment: Comments }) => {
  const { comment } = props;
  return (
    <>
      <table className="border-collapse border border-slate-500 ...">
        <thead>
          <tr>
            <th className="border border-slate-600 ...">ID</th>
            <th className="border border-slate-600 ...">Email</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td className="border border-slate-700 ...">{comment.id}</td>
              <td className="border border-slate-700 ...">{comment.email}</td>
            </tr>
        </tbody>
      </table>
    </>
  );
};

export default CommentDetailClient;
