import admin from "firebase-admin";
import serviceAccount from "../moodflow-key.json";

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount)
});
  
export const db = admin.firestore();
export const auth = admin.auth();
export const storage = admin.storage();