import React from "react";

interface IProps {}

const LoginButton: React.FC<IProps> = ({}) => {
  return (
    <>
      <div className="container">
        <div className="inner">
          <div className="forgetPassword flex justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 cursor-pointer"
              />
              <span className="text-gray-700">تذكرني</span>
            </label>
            <a href="" className="text-primary">
                هل نسيت كلمة المرور
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginButton;
