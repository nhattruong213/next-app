const CommentLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <h1>Comment</h1>
            <div>{ children }</div>
        </>
    )
}

export default CommentLayout