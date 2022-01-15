import { useRef } from "react";

// Styles
import "./Toast.css";

export interface ToastProps {
  id: string;
  content: string;
  type: "success" | "error";
}

interface ToastComponentProps extends ToastProps {
  removeToast: (id: string) => void;
}

const Toast = ({ id, content, type, removeToast }: ToastComponentProps) => {
  const toastRef = useRef<HTMLDivElement>(null);

  const handleCrossClick = () => {
    toastRef.current?.classList.add("remove-toast");
    setTimeout(() => {
      removeToast(id);
    }, 300);
  };

  return (
    <div className={`toast ${type}`} ref={toastRef}>
      <p>{content}</p>
      <button type="button" onClick={handleCrossClick}>
        X
      </button>
    </div>
  );
};

export default Toast;
