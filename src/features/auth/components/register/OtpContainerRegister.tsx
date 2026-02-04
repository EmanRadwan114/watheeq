import React, { useEffect, useState } from 'react';
import SingleCodeWithTimer from './OtpTimer';

const OtpContainerRegister = () => {

  const [code, setCode] = useState<number | null>(null);
   useEffect(() => {
    setCode(14); 
  }, []);
  const handleResend = async () => {
    const newCode = Math.floor(Math.random() * 90) + 10;
    setCode(newCode);
  };
    if (code === null) return null;
    return <>
    <SingleCodeWithTimer
          code={code}
          storageKey="nafath_code_endAt"
          durationSeconds={60}
          onResend={handleResend}
          />
          </> 
}




export default OtpContainerRegister;