const UserLayout = ({children} : {children: React.ReactNode}) => {
    return (
        <>
            <h1>User</h1>
            <div>{ children }</div>
        </>
    )
}

export default UserLayout