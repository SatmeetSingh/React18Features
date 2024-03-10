import React, { Suspense } from "react";
import Spinner from "../../utils/spineer";
const Datatable = React.lazy(() => import("../Table/Datatable"));

function Hero() {
  return (
    <div>
      <Suspense fallback={<Spinner />}>
        <Datatable />
      </Suspense>
    </div>
  );
}

export default Hero;
