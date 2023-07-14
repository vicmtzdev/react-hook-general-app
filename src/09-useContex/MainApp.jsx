import { Navigate, Route, Routes } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { Navbar } from './Navbar';

export const MainApp = () => {
    return (
        <>

            {/* <h1>Main Page</h1> */}

            <Navbar />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />


                {/* <Route path="/*" element={<LoginPage />} /> */}
                <Route path="/*" element={<Navigate to="/about" />} />


            </Routes>

        </>
    )
}
