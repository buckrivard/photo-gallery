import { FunctionComponent } from "react";

interface ISuspenseProps {
  loading: boolean | JSX.Element;
  error: boolean | JSX.Element;
}

// naive "poor man's" suspense -- configurable handles possible component states
const SuspenseComponent: FunctionComponent<ISuspenseProps> = ({ loading, error, children }) => {
  let body = error || loading || children;

  return <>{body}</>;
};

export default SuspenseComponent;
