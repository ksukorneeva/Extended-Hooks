import React, { useEffect, useState } from "react";

const withLogin = (Component) => (props) => {
    const [isLogin, setIsLogin] = useState(null);
    useEffect(() => {
      setIsLogin(localStorage.getItem("user"));
    }, []);
    const handleClickOn = () => {
        localStorage.setItem("user", "user");
    };
    const handleClickOut = () => {
    localStorage.removeItem("user");
  };
  if (isLogin) {
    return (
        <Component
        {...props}
        isAuth={true}
        onLogin={handleClickOn}
        onLogOut={handleClickOut}
        />
    );
  } else {
    return (
      <Component
      {...props}
      isAuth={false}
      onLogOut={handleClickOut}
      onLogin={handleClickOn}/>
    );
  }
};

export default withLogin;
