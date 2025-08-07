import React from "react";

const DevProjectCard = React.lazy(() => {
  return import("../components/DevProjectCard");
});
//Gets code from the card.
export default function developmentProjects() {
  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <div className="devproject-wrapper">
        <DevProjectCard />
      </div>
    </React.Suspense>
  );
}
