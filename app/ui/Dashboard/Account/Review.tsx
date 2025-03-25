import React from "react";
import { CgNotes } from "react-icons/cg";

export default function Review() {
  return (
    <div>
      <CgNotes fontSize={50}/>
      <span>You do not have any reviews</span>
      <span>
        You have no completed reviews or your reviews have been deleted.
      </span>
    </div>
  );
}
