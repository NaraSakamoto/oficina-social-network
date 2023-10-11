import { db } from './firebaseConfig.js';
import { collection, query, where, onSnapshot } from "firebase/firestore";

export function lerPosts(){
    const q = query(collection(db, "posts"));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => {
          const obj = {
            textoDoPost: doc.data().text,
            dataDoPost: doc.data().date
          }
          posts.push(obj);
      });
      console.log("Posts: ", posts.join(", "));
    });
}

export function gravarPost(){
    
}


