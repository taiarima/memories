import Button from "../components/Button";

export default function SignUp() {
  return (
    <form className="mx-auto my-24 flex w-fit flex-col space-y-8 rounded-xl border-4 border-customYellow bg-customTeal p-8 font-title">
      <h1 className="text-center text-4xl text-white">Sign up</h1>
      <p className="my-4 max-w-lg text-center">
        ❗DISCLAIMER: This is a demo site. Data will only be stored in local
        storage. Do not enter any sensitive information.
      </p>
      <div className="mx-auto flex flex-col space-y-4 text-xl">
        <span className="flex flex-row items-center space-x-2">
          <label className="flex-1">Create username: </label>
          <input className="flex-1 rounded p-2" type="text" />
        </span>
        <span className="flex flex-row items-center space-x-2">
          <label className="flex-1">Create password: </label>
          <input className="flex-1 rounded p-2" type="password" />
        </span>
      </div>
      <div className="p-4 text-center">
        <Button>Register</Button>
      </div>
    </form>
  );
}
