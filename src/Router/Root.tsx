// src/Root.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

const Root: React.FC = () => {
    return (
        <div className="flex">
            <main className="flex-1">
                {/* Render the child routes here */}
                <Outlet />
            </main>
        </div>
    );
};

export default Root;
