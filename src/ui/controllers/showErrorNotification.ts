import { showNotification } from "@mantine/notifications";
import { useCallback } from "react";

interface IShowErrorNotification {
  title?: string;
  message?: string;
}

export function useShowErrorNotification() {
  return useCallback(({ title, message }: IShowErrorNotification = {}) => {
    showNotification({
      title: title ?? "Error de conexión",
      message: message ?? "Comprueba tu conexión e inténtalo de nuevo.",
      color: "red",
    });
  }, []);
}
