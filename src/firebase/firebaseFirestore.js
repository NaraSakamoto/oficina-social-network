import {
  collection,
  query,
  onSnapshot,
  orderBy,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from './firebaseConfig.js';

export function lerPosts(exibirPosts) {
  const q = query(collection(db, 'posts'), orderBy('date', 'asc'));

  onSnapshot(q, (querySnapshot) => {
    const posts = [];
    querySnapshot.forEach((document) => {
      const obj = {
        textoDoPost: document.data().text,
        dataDoPost: document.data().date,
        id: document.id,
      };
      posts.push(obj);
    });

    exibirPosts(posts);
  });
}

export function atualizaPost(postId, novoTexto) {
  const postRef = doc(db, 'posts', postId);
  return updateDoc(postRef, {
    text: novoTexto,
  });
}

export function gravarPost() {

}


