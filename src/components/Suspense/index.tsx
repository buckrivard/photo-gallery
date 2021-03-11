import { FunctionComponent } from "react";

interface ISuspenseProps {
  loading: boolean | JSX.Element;
  error: boolean | JSX.Element;
}

const SuspenseComponent: FunctionComponent<ISuspenseProps> = ({ loading, error, children }) => {
  let body = error || loading || children;

  return <>{body}</>;
};

export default SuspenseComponent;
