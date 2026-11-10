"use client";

import { forwardRef, useState, type InputHTMLAttributes, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  success?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  hint?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      success,
      leftIcon,
      rightIcon,
      hint,
      className = "",
      id,
      disabled,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(
      Boolean(props.value || props.defaultValue)
    );

    const isFloating = isFocused || hasValue;
    const inputId = id ?? `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

    const borderColor = error
      ? "border-red-500/60 focus-within:border-red-500"
      : success
      ? "border-emerald-500/60 focus-within:border-emerald-500"
      : "border-white/10 focus-within:border-blue-500/80";

    const glowColor = error
      ? "shadow-red-500/10"
      : success
      ? "shadow-emerald-500/10"
      : "shadow-blue-500/10";

    return (
      <div className={`relative w-full ${className}`}>
        {/* Input wrapper */}
        <div
          className={`
            relative flex items-center overflow-hidden rounded-xl border bg-white/4 backdrop-blur-sm
            transition-all duration-300
            ${borderColor}
            ${isFocused ? `shadow-lg ${glowColor}` : ""}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
        >
          {/* Left icon */}
          {leftIcon && (
            <div className="pl-4 text-slate-500 shrink-0 transition-colors duration-200 group-focus-within:text-blue-400">
              {leftIcon}
            </div>
          )}

          {/* Input + floating label */}
          <div className="relative flex-1">
            {/* Floating label */}
            <motion.label
              htmlFor={inputId}
              className="pointer-events-none absolute left-4 origin-left select-none text-slate-500 transition-colors duration-200"
              animate={{
                y: isFloating ? -20 : 0,
                scale: isFloating ? 0.78 : 1,
                color: isFocused
                  ? error
                    ? "#ef4444"
                    : success
                    ? "#10b981"
                    : "#60a5fa"
                  : "#64748b",
              }}
              transition={{ duration: 0.18, ease: [0.4, 0, 0.2, 1] }}
              style={{ top: "50%", translateY: "-50%" }}
            >
              {label}
            </motion.label>

            <input
              ref={ref}
              id={inputId}
              disabled={disabled}
              className={`
                w-full bg-transparent pt-3 pb-2 ${leftIcon ? "px-3" : "px-4"} pr-3
                text-sm text-white placeholder-transparent outline-none
                font-medium tracking-wide
              `}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(e) => {
                setHasValue(e.target.value.length > 0);
                props.onChange?.(e);
              }}
              aria-describedby={
                error
                  ? `${inputId}-error`
                  : hint
                  ? `${inputId}-hint`
                  : undefined
              }
              aria-invalid={Boolean(error)}
              {...props}
            />
          </div>

          {/* Right icon / status icon */}
          <div className="pr-4 shrink-0">
            {error ? (
              <AlertCircle size={16} className="text-red-400" aria-hidden="true" />
            ) : success ? (
              <CheckCircle2 size={16} className="text-emerald-400" aria-hidden="true" />
            ) : (
              rightIcon && (
                <span className="text-slate-500">{rightIcon}</span>
              )
            )}
          </div>

          {/* Focus glow line at bottom */}
          <motion.div
            className={`absolute bottom-0 left-0 h-0.5 ${
              error
                ? "bg-red-500"
                : success
                ? "bg-emerald-500"
                : "bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500"
            }`}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isFocused ? 1 : 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{ originX: 0, width: "100%" }}
          />
        </div>

        {/* Feedback messages */}
        <AnimatePresence mode="wait">
          {error && (
            <motion.p
              id={`${inputId}-error`}
              key="error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="mt-1.5 flex items-center gap-1.5 text-xs text-red-400"
              role="alert"
            >
              <AlertCircle size={12} aria-hidden="true" />
              {error}
            </motion.p>
          )}
          {success && !error && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              className="mt-1.5 flex items-center gap-1.5 text-xs text-emerald-400"
            >
              <CheckCircle2 size={12} aria-hidden="true" />
              {success}
            </motion.p>
          )}
          {hint && !error && !success && (
            <motion.p
              id={`${inputId}-hint`}
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-1.5 text-xs text-slate-600"
            >
              {hint}
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
export default Input;
