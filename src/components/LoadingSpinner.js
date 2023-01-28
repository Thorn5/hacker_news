import { ThreeDots } from "react-loader-spinner";

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
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#023047"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default LoadingSpinner;