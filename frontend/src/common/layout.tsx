import { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
    <div className="space-y-4 w-full max-w-2xl">
      <h1 className="text-2xl font-bold text-gray-800 text-center">
        User Management App
      </h1>
      {children}
    </div>
  </main>
);

export default Layout;
