import { db } from "../firebaseConfig";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";

export const formAPI = createApi({
    reducerPath: "formAPI",
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        getData: build.query({
            async queryFn(label: string) {
                try {
                    const data: any = [];
                    const querySnapshot = await getDocs(collection(db, label));
                    querySnapshot?.forEach((doc) => {
                        data.push(doc.data());
                    });

                    return { data: data };
                } catch (e) {
                    return { error: e };
                }
            },
        }),
        // getUserById: build.query({
        //     async queryFn(id: string) {
        //         try {
        //             const docRef = doc(db, "users", id);
        //             const docSnap = await getDoc(docRef);
        //             return { data: docSnap.data() };
        //         } catch (e) {
        //             return { error: e };
        //         }
        //     },
        // }),
        // changeInfo: build.mutation({
        //     async queryFn({ id, data }) {
        //         try {
        //             await setDoc(doc(db, "users", id), {
        //                 ...data,
        //             });
        //             return { data: "ok" };
        //         } catch (e) {
        //             return { error: e };
        //         }
        //     },
        // }),

        //========================================================================================================================================================
        // addOrder: build.query({
        //     async queryFn(data) {
        //         try {
        //             await addDoc(collection(db, "users"), {
        //                 ...data,
        //                 timestamp: serverTimestamp(),
        //             });
        //             return { data: "ok" };
        //         } catch (e) {
        //             return { error: e };
        //         }
        //     },
        // }),
    }),
});
