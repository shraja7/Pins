"use client";

import React, { useEffect, useState } from "react";
import app from "../Shared/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import UserInfo from "../components/UserInfo.jsx";
import PinList from "../components/Pins/PinList.jsx";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const Profile = ({ params }) => {
  const db = getFirestore(app);
  const [userInfo, setUserInfo] = useState();
  const [listOfPins, setListOfPins] = useState([]);
  useEffect(() => {
    console.log(params.userId.replace("%40", "@"));
    if (params) {
      getUserInfo(params.userId.replace("%40", "@"));
    }
  }, [params.userId]);

  const getUserInfo = async (email) => {
    const docRef = doc(db, "user", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      /// console.log("Document data:", docSnap.data());
      setUserInfo(docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  //getuserPins

  useEffect(() => {
    if (userInfo) {
      getUserPins();
    }
  }, [userInfo]);

  const getUserPins = async () => {
    const q = query(
      collection(db, "pinterest-post"),
      where("email", "==", userInfo.email)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        setListOfPins((listOfPins) => [...listOfPins, doc.data()]);
      });
    } catch (error) {
      console.error("Error getting user pins:", error);
    }
  };

  return (
    <div>
      {userInfo ? <UserInfo userInfo={userInfo} /> : null}

      <PinList listOfPins={listOfPins} />
    </div>
  );
};

export default Profile;
