import React, { useState } from "react";

const withLogin = (Component) => (props) => {
    const [isLogin, setIsLogin] = useState();
    // useEffect(() => {
    //   localStorage.getItem("user") ? setIsLogin(true) : setIsLogin(false);
    // }, [isLogin]);
    const handleClickOn = () => {
        localStorage.setItem("user", "user");
        setIsLogin(true);
    };
    const handleClickOut = () => {
    localStorage.removeItem("user");
    setIsLogin(false);
  };
    return (
        <Component
        {...props}
        isAuth={isLogin}
        onLogin={handleClickOn}
        onLogOut={handleClickOut}
        />
    );
};

export default withLogin;
