import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (proPage) => {
  // eslint-disable-next-line react/prop-types
  const { Comp } = proPage;
  console.log("COMP ", Comp, "ppppppppppp ", proPage);
  const navigate = useNavigate();

  useEffect(() => {
    const loginStatus =
      localStorage.getItem("isLogin")?.toLocaleLowerCase() === "true";

    console.log("loginStatus have ", typeof loginStatus);
    if (!loginStatus) {
      navigate("/signin");
    }
  }, []);

  return (
    <div>
      <Comp />
    </div>
  );
};

export default Protected;
