"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useTranslations } from "next-intl";
import reapet from "@/assets/icons/repeat.svg";
import Image from "next/image";

interface IProps {
  durationSeconds?: number;
  autoStart?: boolean;
  onFinished?: () => void;
  onResend?: () => Promise<void> | void;
  storageKey?: string;
  hidden?: boolean;
  className?: string;
  timerPrefixText?: string;
  resendText?: string;
  forceExpired?: boolean;
  
}

const OtpExpireTimer: React.FC<IProps> = ({
  durationSeconds = 60,
  autoStart = true,
  onFinished,
  onResend,
  storageKey = "otp_end_at_otp_page",
  hidden = false,
  className = "",
  timerPrefixText,
  resendText,
  forceExpired = false,
}) => {
  const t = useTranslations("otp");
  const [endAt, setEndAt] = useState<number | null>(null);
  const [isResending, setIsResending] = useState(false);
  const prefix = timerPrefixText ?? t("timerPrefix");
  const resendLabel = resendText ?? t("resend");
  const isExpired = forceExpired || !endAt;

  useEffect(() => {
    if (forceExpired) {
      sessionStorage.removeItem(storageKey);
      setEndAt(null);
      return;
    }

    const saved = sessionStorage.getItem(storageKey);

    if (saved) {
      const ts = Number(saved);
      if (!Number.isNaN(ts) && ts > Date.now()) {
        setEndAt(ts);
        return;
      }
      sessionStorage.removeItem(storageKey);
    }

    if (autoStart) {
      const ts = Date.now() + durationSeconds * 1000;
      sessionStorage.setItem(storageKey, String(ts));
      setEndAt(ts);
    } else {
      setEndAt(null);
    }
  }, [autoStart, durationSeconds, storageKey, forceExpired]);



  const handleComplete = () => {
    sessionStorage.removeItem(storageKey);
    setEndAt(null);
    onFinished?.();
  };

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

  const handleResendClick = async () => {
    if (isResending) return;

    try {
      setIsResending(true);
      await onResend?.();

      const ts = Date.now() + durationSeconds * 1000;
      sessionStorage.setItem(storageKey, String(ts));
      setEndAt(ts);
    } finally {
      setIsResending(false);
    }
  };
    const shouldHideAll = hidden;
  return (
    <div className={`flex flex-col items-center gap-3 text-amber-300 ${className}`}>
      
      {!shouldHideAll && !isExpired && endAt && (
        <Countdown date={endAt} renderer={renderer} onComplete={handleComplete} />
      )}
      
       {!shouldHideAll && isExpired && (
      <button
        type="button"
        onClick={handleResendClick}
        disabled={isResending}
        className={`inline-flex items-center gap-2 text-fourth-foreground text-sm font-medium ${
          isResending ? "text-gray-400 cursor-not-allowed" : "text-fifth-foreground cursor-pointer"
        }`}
      >
        <Image src={reapet} alt="repeat" width={16} height={16} />
        {isResending ? t("resending") : resendLabel}
      </button>
       )}
    </div>
  )
};

export default OtpExpireTimer;