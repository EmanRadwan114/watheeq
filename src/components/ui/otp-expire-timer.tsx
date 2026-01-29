"use client";
import React from "react";
import Countdown from "react-countdown";
import { useTranslations } from "next-intl";
type Props = {
  durationSeconds?: number;
  startKey: number;          
  onComplete?: () => void;   
};

export default function OtpExpireTimer({
  durationSeconds = 60,
  startKey,
  onComplete,
}: Props) {
  const t = useTranslations("otp");

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
      <p className="text-sm text-third-foreground text-center">
        {t("timer")} <span className="font-medium">{mm}:{ss}</span>
      </p>
    );
  };

  return (
    <Countdown
      key={startKey} 
      date={Date.now() + durationSeconds * 1000}
      renderer={renderer}
      onComplete={onComplete}
    />
  );
}
