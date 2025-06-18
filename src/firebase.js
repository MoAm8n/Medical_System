import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDWccvPxbWZvFvST5wDzt9IfnzvVeQaMG0",
    authDomain: "project1-amen.firebaseapp.com",
    databaseURL: "https://project1-amen-default-rdb.firebaseio.com",
    projectId: "project1-amen",
    storageBucket: "project1-amen.appspot.com",
    messagingSenderId: "361078671231",
    appId: "1:361078671231:web:8c5611a7f2652d527fbc4a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };