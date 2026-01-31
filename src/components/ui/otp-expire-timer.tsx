"use client";

import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";
import { useTranslations } from "next-intl";
import reapet from "@/assets/icons/repeat.svg";
import Image from "next/image";

interface IProps {
  durationSeconds?: number;
  autoStart?: boolean;

  // ✅ يبدأ العداد لما القيمة دي تتغير
  startSignal?: number;

  // ✅ يناديها لما العداد يخلص (عشان تفتح زرار Verify)
  onFinished?: () => void;

  // ✅ يناديها لما المستخدم يضغط Resend
  onResend?: () => Promise<void> | void;

  // ✅ لتثبيت العداد عبر تغيير اللغة (sessionStorage)
  storageKey?: string;

  className?: string;
  timerPrefixText?: string;
  resendText?: string;
}

const OtpExpireTimer: React.FC<IProps> = ({
  durationSeconds = 60,
  autoStart = true,
  startSignal = 0,
  onFinished,
  onResend,
  storageKey = "otp_end_at",
  className = "",
  timerPrefixText,
  resendText,
}) => {
  const t = useTranslations("otp");

  const [endAt, setEndAt] = useState<number | null>(null);
  const [canResend, setCanResend] = useState(false);
  const [isResending, setIsResending] = useState(false);

  // ✅ اقرأ endAt من sessionStorage عند mount (عشان تغيير اللغة ما يعملش reset)
  useEffect(() => {
    const saved = sessionStorage.getItem(storageKey);

    if (saved) {
      const ts = Number(saved);

      // لو لسه ماخلصش
      if (!Number.isNaN(ts) && ts > Date.now()) {
        setEndAt(ts);
        setCanResend(false);
        return;
      }

      // لو انتهى
      sessionStorage.removeItem(storageKey);
      setEndAt(null);
      setCanResend(true);
      return;
    }

    // مفيش endAt مخزن
    if (autoStart) {
      const ts = Date.now() + durationSeconds * 1000;
      sessionStorage.setItem(storageKey, String(ts));
      setEndAt(ts);
      setCanResend(false);
    } else {
      setEndAt(null);
      setCanResend(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ✅ يبدأ لما startSignal يتغير (Verify اتضغط)
  useEffect(() => {
    if (!autoStart && startSignal > 0) {
      const ts = Date.now() + durationSeconds * 1000;
      sessionStorage.setItem(storageKey, String(ts));
      setEndAt(ts);
      setCanResend(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startSignal]);

  const handleComplete = () => {
    sessionStorage.removeItem(storageKey);
    setEndAt(null);
    setCanResend(true);
    onFinished?.();
  };

  const prefix = timerPrefixText ?? t("timerPrefix");
  const resendLabel = resendText ?? t("resend");

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
    if (!canResend || isResending) return;

    try {
      setIsResending(true);
      await onResend?.();

      // ✅ بعد resend: ابدأ عداد جديد
      const ts = Date.now() + durationSeconds * 1000;
      sessionStorage.setItem(storageKey, String(ts));
      setEndAt(ts);
      setCanResend(false);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* ✅ العداد يظهر فقط أثناء التشغيل */}
      {endAt && (
        <Countdown
          date={endAt}
          renderer={renderer}
          onComplete={handleComplete}
        />
      )}

      {/* ✅ Resend يظهر فقط بعد انتهاء العداد (مفصول زي الأول) */}
      {canResend && (
        <button
          type="button"
          onClick={handleResendClick}
          disabled={isResending}
          className={`inline-flex items-center gap-2 text-fourth-foreground text-sm font-medium ${
            !isResending
              ? "text-fifth-foreground cursor-pointer"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          <Image src={reapet} alt="repeat" width={16} height={16} />
          {isResending ? t("resending") : resendLabel}
        </button>
      )}
    </div>
  );
};

export default OtpExpireTimer;
