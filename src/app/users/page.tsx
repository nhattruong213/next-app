import UserTable from "@/components/UserTable";

const User = async (props: any) => {
  const page = props?.searchParams?.page ?? 1;
  const limit = 10;
  const res = await fetch(
    `http://localhost:8000/users?_page=${page}&_limit=${limit}` , {
      next: { tags: ['user']}
    }
  );
  const total = +(res.headers?.get("X-Total-Count") ?? 0);
  const users = await res.json();

  return (
    <UserTable
      users={users ? users : []}
      meta={{
        current: +page,
        pageSize: limit,
        total: total,
      }}
    />
  );
};
export default User;
