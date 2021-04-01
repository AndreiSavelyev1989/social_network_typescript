import React, { Suspense } from "react";
import {Preloader} from "../common/preloader/Preloader";


export const withSuspense = (Component: any) => {
    return (props: any) => {
        return <Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </Suspense>
    }
}