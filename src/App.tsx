import { FC, Suspense } from "react";

import { AppRouter, Spinner } from "./_components";

const App: FC = () => {
    return (
        <main className="page">
            <Suspense fallback={<Spinner />}>
                <AppRouter />
            </Suspense>
        </main>
    );
};

export default App;
