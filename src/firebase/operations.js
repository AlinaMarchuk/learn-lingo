import { db } from "./config";
import { ref, set, onValue, update } from "firebase/database";

export const checkUser = (uid) => {
  const userRef = ref(db, "users/" + uid);
  let result;
  console.log(userRef);
  onValue(userRef, (snapshot) => {
    console.log("snapshot:", snapshot.size);
    if (snapshot.size === 0) {
      result = false;
    } else {
      result = true;
    }
  });
  return result;
};

export const addUserDb = (uid, email, displayName) => {
  console.log("operation:", uid, email, displayName);
  set(ref(db, "users/" + uid), {
    email,
    name: displayName || "",
    favorites: [""],
  });
};

export const addFavoriteTeacher = (uid, name, surname) => {
  const userRef = ref(db, "users/" + uid);
  const teacher = name + " " + surname;
  let arr = [];
  onValue(userRef, (snapshot) => {
    const favorites = snapshot.val().favorites;
    console.log(favorites);
    const index = favorites.findIndex((el) => el === teacher);
    if (index === -1) {
      arr = [...favorites, teacher];
    } else {
      arr = favorites.filter((el) => el !== teacher);
    }
    console.log(arr);
  });
  update(userRef, { favorites: [...arr] });

  console.log(userRef);
  // update(userRef, {
  //     favorites:[...favorites, teacher]
  // })
};
