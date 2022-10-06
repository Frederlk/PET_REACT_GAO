import { IHub } from "./../models/models";
import { db } from "../firebaseConfig";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

export const formAPI = createApi({
    reducerPath: "formAPI",
    baseQuery: fakeBaseQuery(),
    endpoints: (build) => ({
        getData: build.query({
            async queryFn(label: string) {
                try {
                    const data: IHub[] = [];
                    const querySnapshot = await getDocs(collection(db, label));
                    querySnapshot?.forEach((doc) => {
                        data.push(doc.data() as IHub);
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
