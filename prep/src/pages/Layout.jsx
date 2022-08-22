import { SideBar } from "../components/shared/SideBar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="mainPage">
            <SideBar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}