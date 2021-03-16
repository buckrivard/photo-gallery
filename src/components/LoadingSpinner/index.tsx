import Loader from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <div className="modal">
      <Loader type="TailSpin" />
    </div>
  )
};

export default LoadingSpinner;
