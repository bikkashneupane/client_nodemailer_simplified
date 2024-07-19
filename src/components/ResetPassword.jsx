import { requestOTP } from "../utils/axiosHelper";

const dummyEmail = "edubikkash@gmail.com";

const ResetPassword = () => {
  const handlerequestOTP = async () => {
    const res = await requestOTP({ email: dummyEmail });
    console.log(res);
  };

  return (
    <div>
      <h1>Reset Password</h1>
      <button onClick={handlerequestOTP}>Request OPT</button>
    </div>
  );
};

export default ResetPassword;
