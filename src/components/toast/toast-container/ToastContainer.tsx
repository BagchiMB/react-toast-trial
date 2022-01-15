import { useState, useEffect, useCallback } from "react";
import { v4 as uuid } from "uuid";

// Styles
import "./ToastContainer.css";

// Types
import Toast, { ToastProps } from "../toast/Toast";

interface ToastContainerProps {
  position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
  delayInMs?: number;
  id?: string | number;
}

const ADD_TOAST_EVENT_NAME = "add-toast";

interface toastFnParamsTypes extends Omit<ToastProps, "id"> {
  toastContainerId?: string | number;
}

export const toast = ({
  content,
  type,
  toastContainerId = "",
}: toastFnParamsTypes) => {
  const event = new CustomEvent(`${ADD_TOAST_EVENT_NAME}${toastContainerId}`, {
    detail: { content, type, id: uuid(), toastContainerId },
  });
  document.dispatchEvent(event);
};

const ToastContainer = ({
  position,
  delayInMs,
  id = "",
}: ToastContainerProps) => {
  const [toastList, setToastList] = useState<ToastProps[]>([]);
  const [isComponentMounted, setIsComponentMounted] = useState(true);

  const removeToast = useCallback(
    (id: string) => {
      if (isComponentMounted)
        setToastList((prevState) =>
          prevState.filter((toast) => toast.id !== id)
        );
    },
    [isComponentMounted]
  );

  useEffect(() => {
    document.addEventListener(`${ADD_TOAST_EVENT_NAME}${id}`, ((
      e: CustomEvent
    ) => {
      setToastList((prevState) => [e.detail, ...prevState]);
    }) as EventListener);

    return () => document.removeEventListener(ADD_TOAST_EVENT_NAME, () => {});
  }, [id]);

  useEffect(() => {
    return () => setIsComponentMounted(false);
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
