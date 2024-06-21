import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { verifyUserAxios } from "../utils/axiosHelper";
import { toast } from "react-toastify";

export const VerifyAccount = () => {
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState("");

  const c = searchParams.get("c");
  const e = searchParams.get("e");

  const handleOnVerify = async () => {
    const response = await verifyUserAxios({ c, e });
    setResponse(response);
    toast[response?.status](response?.message);
  };

  return (
    <div>
      <div>
        {response?.status !== "success" && (
          <button style={{ background: "green" }} onClick={handleOnVerify}>
            Verify Account
          </button>
        )}
      </div>
    </div>
  );
};
