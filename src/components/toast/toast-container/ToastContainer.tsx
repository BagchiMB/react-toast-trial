import { useState } from "react";
import { v4 as uuid } from "uuid";

// Styles
import "./ToastContainer.css";

// Types
import Toast, { ToastProps } from "../toast/Toast";

interface ToastContainerProps {
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}
const ToastContainer = ({ position }: ToastContainerProps) => {
  const [toastList, setToastList] = useState<ToastProps[]>([
    { id: uuid(), content: "Hi", type: "success" },
    { id: uuid(), content: "Hello", type: "error" },
  ]);

  const removeToast = (id: string) => {
    setToastList((prevState) => prevState.filter((toast) => toast.id !== id));
  };

  return (
    <div className={`toast-container ${position}`}>
      {toastList.map((toast) => (
        <Toast
          key={toast.id}
          content={toast.content}
          type={toast.type}
          id={toast.id}
          removeToast={removeToast}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
