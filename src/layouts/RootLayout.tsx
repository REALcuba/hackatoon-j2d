import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"

export interface RootLayoutProps { }
export const RootLayout: React.FC<RootLayoutProps> = () => {
    return (
        <div className="root-layout h-screen bg-green-200">
            <Header />

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout