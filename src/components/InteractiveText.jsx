import { useEffect, useState } from "preact/hooks";

const InteractiveText = () => {
  const [email, setEmail] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("email");
    setEmail(email);
  }, []);
  return (
    <p>
      A confirmation email has been sent to{" "}
      <span class="font-semibold text-gray-1">{email}</span>. Please open it and
      click the button inside to confirm your subscription
    </p>
  );
};

export default InteractiveText;
