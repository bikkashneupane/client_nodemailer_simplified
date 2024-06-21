import { toast } from "react-toastify";
import { registerUserAxios } from "../utils/axiosHelper";

const dummyUser = {
  fullName: "Jon Doe",
  email: "jon@gmail.com",
  password: "Jon123",
};

export const Register = () => {
  const handleOnSubmit = async () => {
    const { status, message } = await registerUserAxios(dummyUser);
    toast[status](message);
  };

  return (
    <div>
      <h4>Register User Now!!</h4>
      <hr />
      <button onClick={handleOnSubmit} style={{ marginTop: "1.5rem" }}>
        Register
      </button>
    </div>
  );
};
