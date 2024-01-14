export default function Home() {
  async function create(formData: FormData) {
    "use server";
    console.log(">>> check formData: ", formData.get("username"));
    // mutate data
    // revalidate cache
  }

  return (
    <div>
      <form action={create}>
        <input name="username" type="text" />
        <button type="submit"> Save</button>
      </form>
    </div>
  );
}
