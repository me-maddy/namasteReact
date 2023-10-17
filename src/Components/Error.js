import { useRouteError } from "react-router-dom";

const Error = () => {
  const errorInfo = useRouteError();
  return (
    <div>
      <h1>{errorInfo?.status} Error!</h1>
      <h2>{errorInfo?.statusText}</h2>
      <h3>{errorInfo?.error?.message}</h3>
    </div>
  );
};

export default Error;
