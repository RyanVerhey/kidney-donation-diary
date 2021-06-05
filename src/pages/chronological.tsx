import * as React from "react";
import Homepage from "../components/homepage";

const ChronologicalPage: React.FC = (): JSX.Element => {
  return (
    <Homepage chronological={true} />
  );
}

export default ChronologicalPage;
