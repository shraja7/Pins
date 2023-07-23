import React, { useEffect } from "react";
import app from "../../Shared/firebaseConfig";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import PinItem from "./PinItem";

const PinList = ({ listOfPins }) => {
  console.log("list of pins", listOfPins);

  return (
    <div
      className="mt-7 px-2 md:px-5 columns-2
        md:columns-3 lg:columns-4 xl:columns-5
        space-y-6 mx-auto 
    
    "
    >
      {listOfPins.map((pin, index) => (
        <div key={index} className="flex flex-col">
          <PinItem pin={pin} />
        </div>
      ))}
    </div>
  );
};

export default PinList;
