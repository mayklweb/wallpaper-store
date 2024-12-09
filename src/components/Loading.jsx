import React from "react";
import ContentLoader from "react-content-loader";

function Loading() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"

    >
      <rect x="25" y="17" rx="0" ry="0" width="82" height="103" />
    </ContentLoader>
  );
}

export default Loading;
