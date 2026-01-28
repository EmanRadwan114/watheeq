import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const AuthCard: React.FC<IProps> = ({children}) => {
  return <>
  <div className="h-full bg-white rounded-lg p-8">
  {children}
</div>

  </>;
};

export default AuthCard;