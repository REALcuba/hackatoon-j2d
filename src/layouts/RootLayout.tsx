import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
// import GetEpisodesList from "../components/getEpisodesList/GetEpisodesList"
// import { useState } from "react"

export interface RootLayoutProps { }
export const RootLayout: React.FC<RootLayoutProps> = () => {

    return (
        <div className="root-layout bg-green-200 ">
            <Header />
            <div className="flex justify-around">

                {/* <GetEpisodesList handleEpisodeClick={handleEpisodeClick} /> */}
                <main className="  flex">
                <Outlet />
            </main>
            </div>
        </div>
    )
}

export default RootLayout