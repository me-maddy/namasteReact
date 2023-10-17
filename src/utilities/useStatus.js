import { useEffect, useState } from "react";

const useStatus = () => {
  const [status, setStatus] = useState(true);

  useEffect(() => {
    const handleOffline = window.addEventListener("offline", (e) => {
      setStatus(false);
    });
    const handleOnline = window.addEventListener("online", (e) => {
      setStatus(true);
    });
    return () => {
      removeEventListener("online", handleOnline);
      removeEventListener("offline", handleOffline);
    };
  });

  return status;
};

export default useStatus;
