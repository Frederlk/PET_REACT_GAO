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
    }),
});
