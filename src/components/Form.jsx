import { useState } from "preact/hooks";

const Form = () => {
  const [email, setEmail] = useState("");
  const [invalid, setInvalid] = useState(false);

  const reExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (reExp.test(email)) {
      setInvalid(false);
      localStorage.setItem("email", email);
      window.location.href = "/success";
    } else {
      setInvalid(true);
      setTimeout(() => {
        setInvalid(false);
      }, 3000);
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form onSubmit={onSubmitForm} class="flex flex-col gap-y-4">
      <label class="flex flex-col text-gray-1 font-semibold text-sm">
        <div class="flex justify-between items-center">
          <p>Email address</p>
          {invalid ? <p class="text-red-1">Valid email required</p> : null}
        </div>
        <input
          type="text"
          name="email"
          placeholder="email@company.com"
          class={`p-4 rounded-lg border mt-2 outline-none ${
            invalid ? "bg-red-1/20 border-red-1 text-red-1" : "border-gray-2"
          }`}
          value={email}
          onChange={handleInputChange}
        />
      </label>
      <button
        class="bg-gray-1 text-white p-4 rounded-lg font-bold"
        type="submit"
      >
        Subscribe to monthly newsletter
      </button>
    </form>
  );
};

export default Form;
