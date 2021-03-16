import Loader from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    // borrow modal class to center spinner
    <div className="modal" data-testid="loading">
      <Loader type="TailSpin" />
    </div>
  )
};

export default LoadingSpinner;
