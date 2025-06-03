import {Outlet} from 'react-router';
import Splash from '@/components/Splash.jsx';
import Sonner from '@/utilities/sonner.js';

const Layout = () => {
    return (
        <>
            <Splash/>
            <Sonner richColors={true} position={'top-right'} expand={true} mobileOffset={{left: '5%', top: '1.5rem', right: '5%'}} offset={{left: '5%', top: '1.5rem', right: '5%'}} duration={1500} gap={10}/>
            <Outlet/>
        </>
    );
};

export default Layout;