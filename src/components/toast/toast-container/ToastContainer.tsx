import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

// Styles
import "./ToastContainer.css";

// Types
import Toast, { ToastProps } from "../toast/Toast";

interface ToastContainerProps {
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  delayInMs?: number;
}

const ADD_TOAST_EVENT_NAME = "add-toast";

export const toast = ({ content, type }: Omit<ToastProps, "id">) => {
  const event = new CustomEvent(ADD_TOAST_EVENT_NAME, {
    detail: { content, type, id: uuid() },
  });
  document.dispatchEvent(event);
};

const ToastContainer = ({ position, delayInMs }: ToastContainerProps) => {
  const [toastList, setToastList] = useState<ToastProps[]>([]);

  const removeToast = (id: string) => {
    setToastList((prevState) => prevState.filter((toast) => toast.id !== id));
  };

  useEffect(() => {
    document.addEventListener(ADD_TOAST_EVENT_NAME, ((e: CustomEvent) => {
      setToastList((prevState) => [...prevState, e.detail]);
    }) as EventListener);

    return () => document.removeEventListener(ADD_TOAST_EVENT_NAME, () => {});
  }, []);

  return (
    <div className={`toast-container ${position}`}>
      {toastList.map((toast) => (
        <Toast
          key={toast.id}
          content={toast.content}
          type={toast.type}
          id={toast.id}
          removeToast={removeToast}
          delayInMs={delayInMs}
        />
      ))}
    </div>
  );
};

export default ToastContainer;
