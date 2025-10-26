import React from "react";

// In case the data in the json file keeps growing. Want to ensure it performs well.
const AIProjectCard = React.lazy(() => {
  return import("../components/AIProjectCard");
});
//Gets code from the card.
// Using React.Suspense in case it takes long to pull the data in.
export default function aiProjects() {
  return (
    <React.Suspense fallback={<h2>Loading...</h2>}>
      <div className="devproject-wrapper">
        <AIProjectCard />
      </div>
    </React.Suspense>
  );
}
