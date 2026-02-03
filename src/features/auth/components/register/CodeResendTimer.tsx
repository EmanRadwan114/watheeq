"use client";

import React, { useEffect, useState, useCallback } from "react";
import Countdown from "react-countdown";
import Image from "next/image";
import { useTranslations } from "next-intl";
import reapet from "@/assets/icons/repeat-register.svg";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/redux-toolkit/hooks";
import { changeStep } from "../../store/register.slice";

type CodeResendTimerProps = {
  storageKey: string;
  durationSeconds?: number;
  hiddenTimer?: boolean;
  onResend?: () => Promise<void> | void;
  timerPrefixText?: string;
  resendText?: string;
  className?: string;
};
const CodeResendTimer: React.FC<CodeResendTimerProps> = ({
  storageKey,
  durationSeconds = 60,
  hiddenTimer = false,
  onResend,
  timerPrefixText,
  resendText,
  className = "",
}) => {
  const t = useTranslations("otp");
  const [endAt, setEndAt] = useState<number | null>(null);
  const [isResending, setIsResending] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);
    if (saved) {
      const ts = Number(saved);
      if (!Number.isNaN(ts) && ts > Date.now()) {
        setEndAt(ts);
        return;
      }
      sessionStorage.removeItem(storageKey);
    }

    const ts = Date.now() + durationSeconds * 1000;
    sessionStorage.setItem(storageKey, String(ts));
    setEndAt(ts);
  }, [storageKey, durationSeconds]);

  const prefix = timerPrefixText ?? t("timerPrefix");
  const resendLabel = resendText ?? t("resending-activation");
  const canResend = endAt === null;

  // handle api submit => code matching
  const handleCodeMatch = () => {
    dispatch(changeStep(2));
  };

  const handleComplete = useCallback(() => {
    sessionStorage.removeItem(storageKey);
    setEndAt(null);

    handleCodeMatch(); //temporary
  }, [storageKey]);

  const handleResendClick = useCallback(async () => {
    if (isResending || !canResend) return;

    try {
      setIsResending(true);
      await onResend?.();

      // restart timer
      const ts = Date.now() + durationSeconds * 1000;
      sessionStorage.setItem(storageKey, String(ts));
      setEndAt(ts);
    } finally {
      setIsResending(false);
    }
  }, [isResending, canResend, onResend, durationSeconds, storageKey]);

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
        {prefix}{" "}
        <span className="font-medium">
          {mm}:{ss}
        </span>
      </p>
    );
  };
  const isDisabled = isResending || !canResend;
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {!hiddenTimer && endAt && (
        <Countdown
          date={endAt}
          renderer={renderer}
          onComplete={handleComplete}
        />
      )}

      <Button
        type="button"
        variant="outlined"
        onClick={() => {
          if (isDisabled) return;
          handleResendClick();
        }}
        className={`inline-flex items-center gap-2 text-sm font-medium
    ${
      isDisabled
        ? "opacity-40 cursor-not-allowed pointer-events-auto"
        : "opacity-100 cursor-pointer"
    }
  `}
      >
        <Image src={reapet} alt="repeat" width={16} height={16} />
        {isResending ? t("resending-activation") : resendLabel}
      </Button>
    </div>
  );
};

export default CodeResendTimer;
