import { Outlet } from "react-router-dom";
import NavbarHeader from "../components/AppHeader";

const MainLayout = () => {
    return (
        <>
            <div className="container">
                <NavbarHeader />
                <Outlet />
                <h1>Footer</h1>
            </div>
        </>
    );
};

export default MainLayout;