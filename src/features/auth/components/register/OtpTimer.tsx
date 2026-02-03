"use client";

import React from "react";
import CodeResendTimer from "./CodeResendTimer";

type SingleCodeWithTimerProps = {
  code: string | number;
  storageKey: string;
  durationSeconds?: number;
  onResend?: () => Promise<void> | void;
  hiddenTimer?: boolean;
};

const SingleCodeWithTimer: React.FC<SingleCodeWithTimerProps> = ({
  code,
  storageKey,
  durationSeconds = 60,
  onResend,
  hiddenTimer = false,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center text-xl font-semibold">
        {code}
      </div>
      <CodeResendTimer
        storageKey={storageKey}
        durationSeconds={durationSeconds}
        onResend={onResend}
        hiddenTimer={hiddenTimer}
      />
    </div>
  );
};


export default SingleCodeWithTimer;