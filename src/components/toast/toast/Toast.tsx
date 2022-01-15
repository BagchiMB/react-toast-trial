import { useCallback, useEffect, useRef } from "react";

// Styles
import "./Toast.css";

export interface ToastProps {
  id: string;
  content: string;
  type: "success" | "error";
}

interface ToastComponentProps extends ToastProps {
  removeToast: (id: string) => void;
  delayInMs?: number;
}

const Toast = ({
  id,
  content,
  type,
  removeToast,
  delayInMs,
}: ToastComponentProps) => {
  const toastRef = useRef<HTMLDivElement>(null);

  const closeToast = useCallback(() => {
    toastRef.current?.classList.add("remove-toast");
    setTimeout(() => {
      removeToast(id);
    }, 300);
  }, [id, removeToast]);

  useEffect(() => {
    if (delayInMs) {
      const timer = setTimeout(() => {
        closeToast();
      }, delayInMs);

      return () => clearInterval(timer);
    }
  }, [delayInMs, closeToast]);

  return (
    <div className={`toast ${type}`} ref={toastRef}>
      <p>{content}</p>
      <button type="button" onClick={closeToast}>
        X
      </button>
    </div>
  );
};

export default Toast;
