import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import GetEpisodesList from "../components/getEpisodesList/GetEpisodesList"

export interface RootLayoutProps { }
export const RootLayout: React.FC<RootLayoutProps> = () => {
    return (
        <div className="root-layout bg-green-200 ">
            <Header />
            <div className="flex">

            <GetEpisodesList />
            <main className=" w-2/3">
                <Outlet />
            </main>
            </div>
        </div>
    )
}

export default RootLayout