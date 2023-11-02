import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useStore } from "../store/useStore"


export interface RootLayoutProps { }
export const RootLayout: React.FC<RootLayoutProps> = () => {

    const { darkMode } = useStore()
    const className = darkMode ? 'bg-slate-800 text-slate-100' : 'bg-white '
    return (
        <div className={className} >
            <Header  />
            <div className="flex justify-around max-h-screen">
                <main className="text font-creepster  flex  min-w-full">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default RootLayout