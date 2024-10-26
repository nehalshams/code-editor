import { lazy, Suspense } from "react";

export function lazyLoad(path: string){
    const File = lazy(() => import(path))
    return <Suspense fallback={<div>Loading</div>}>
        <File/>
    </Suspense>
}