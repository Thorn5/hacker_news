import { ProgressBar } from "react-loader-spinner";

 function LoadingSpinner() {
  return (
    <div
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ProgressBar
       height="80"
       width="80"
       ariaLabel="progress-bar-loading"
       wrapperStyle={{}}
       wrapperClass="progress-bar-wrapper"
       borderColor = '#F4442E'
       barColor = "#023047"
/>
    </div>
  );
}

export default LoadingSpinner;