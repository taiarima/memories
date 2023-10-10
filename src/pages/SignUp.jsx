function SignUp() {
  return (
    <form className="mx-auto my-24 flex w-fit flex-col rounded-xl bg-gray-500 p-8">
      <h1 className="mb-4 text-center font-title text-4xl text-white">
        Sign up
      </h1>
      <p>
        ❗DISCLAIMER: This is a demo site. All data will only be stored in local
        storage. Do not enter any sensitive information.
      </p>
      <span>
        <label>Username: </label>
        <input type="text" />
      </span>
      <span>
        <label>Password: </label>
        <input type="text" />
      </span>
    </form>
  );
}

export default SignUp;
