"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useTranslations } from "next-intl";
import reapet from "@/assets/icons/repeat.svg"
import  Image  from 'next/image';
interface IProps {
  durationSeconds?: number;
  autoStart?: boolean;

  onResend?: () => Promise<void> | void;

  className?: string;
  timerPrefixText?: string; 
  resendText?: string;      
}

const OtpExpireTimer: React.FC<IProps> = ({
  durationSeconds = 60,
  autoStart = true,
  onResend,
  className = "",
  timerPrefixText,
  resendText,
}) => {
  const t = useTranslations();

  const [startKey, setStartKey] = useState(0);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const start = () => {
    setStartKey((k) => k + 1);
    setCanResend(false);
    setIsRunning(true);
  };

  useEffect(() => {
    if (autoStart) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleComplete = () => {
    setIsRunning(false);
    setCanResend(true);
  };

  const handleResend = async () => {
    if (!canResend || isResending) return;

    try {
      setIsResending(true);
      await onResend?.();
      start();
    } finally {
      setIsResending(false);
    }
  };

  const prefix = timerPrefixText ?? t("otp.timerPrefix");
  const resendLabel = resendText ?? t("otp.resend");   
  const renderer = ({
    minutes,
    seconds,
    completed,
  }: {
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) return null;
    const mm = String(minutes).padStart(2, "0");
    const ss = String(seconds).padStart(2, "0");

    return (
      <p className="text-sm text-primary-foreground text-center">
        {prefix} <span className="font-medium">{mm}:{ss}</span>
      </p>
    );
  };

  return (
    <div className={`flex flex-col items-center gap-3 text-amber-300 ${className}`}>
      {/* Timer line */}
      {isRunning ? (
        <Countdown
          key={startKey}
          date={Date.now() + durationSeconds * 1000}
          renderer={renderer}
          onComplete={handleComplete}
        />
      ) : (
  
        <p className="text-sm text-fifth-foreground text-center opacity-0">
          {prefix} <span className="font-medium">00:00</span>
        </p>
      )}

     
      <button
        type="button"
        onClick={handleResend}
        disabled={!canResend || isResending}
        className={`inline-flex items-center gap-2 text-fourth-foreground text-sm font-medium ${
          canResend && !isResending
            ? "text-fifth-foreground  cursor-pointer"
            : "text-gray-400 cursor-not-allowed"
        }`}
      >
    
        
        <Image src={reapet} alt="repeat" width={16} height={16} />
        {isResending ? t("otp.resending") : resendLabel}
      </button>
    </div>
  );
};

export default OtpExpireTimer;
