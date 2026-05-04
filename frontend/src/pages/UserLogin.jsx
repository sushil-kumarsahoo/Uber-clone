
const UserLogin = () => {
  return (
    <div className="p-4">
      <form>
        <h3 className="text-xl mb-2">Whats your email</h3>
        <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="email" placeholder="email@example.com" required />

        <h3>Enter password</h3>
        <input className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base" type="password" placeholder="password" required />
        <button className="bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base">Login</button>
      </form>
    </div>
  );
};

export default UserLogin;
