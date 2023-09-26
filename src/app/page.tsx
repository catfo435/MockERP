import InputField from "./components/InputField"

export default function Page() {
  return (
    <div className=" relative h-screen w-screen bg-gradient-to-r from-cyan-500 to-purple-500 flex justify-center items-center">
        <div className="loginInPane bg-white w-1/3 h-2/3 rounded-2xl">
          <span className="my-16 flex justify-center items-center text-4xl font-bold">User Login</span>
          <form>
            <InputField label='Username' type="text"/>
            <InputField label='Password' type="password"/>
          </form>
        </div>
    </div>
  )
}