import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {FiChevronLeft, FiChevronRight, FiFileText, FiLogOut} from 'react-icons/fi';
import {useDispatch, useSelector} from "react-redux";
import {resetUserData} from "../../redux/slices/userSlice.js";
import {LiaClipboardListSolid, LiaFileAltSolid, LiaFileInvoiceDollarSolid, LiaLinkSolid} from "react-icons/lia";
import {clearSpacing} from "../../redux/slices/reportSpacing.js";

const Sidebar = () => {
    const user = useSelector((store) => store.user);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const logoutUser = () => {
        dispatch(resetUserData());
        dispatch(clearSpacing());
        navigate('/');
    }

    const commonRoutes = [
        {
            id: "job-quotation",
            route: '/job-quotation',
            subRoutes: ['/job-quotation', '/add-quotation', '/preview-invoice', '/edit-report'],
            name: 'Job Quotation',
            icon: <FiFileText size={24}/>,
        },
        {
            id: 'invoices',
            route: '/invoices',
            subRoutes: ['/invoices', '/add-invoice', '/edit-invoice', '/preview-invoice'],
            name: 'Invoices',
            icon: <LiaFileInvoiceDollarSolid size={20}/>,
        },
        {
            id: 'logout',
            route: '/logout',
            subRoutes: ['/logout'],
            name: 'Logout',
            icon: <FiLogOut size={24}/>,
            callback: logoutUser
        },
    ]

    const adminRoutes = [
        commonRoutes[0],
        {
            id: 'reports',
            route: '/reports',
            subRoutes: ['/reports', '/add-report', '/edit-report', '/preview-report'],
            name: 'Reports',
            icon: <LiaFileAltSolid size={20}/>,
        },
        {
            id: 'connected-reports',
            route: '/connected-reports',
            subRoutes: ['/connected-reports'],
            name: 'Connected Reports',
            icon: <LiaLinkSolid size={20}/>,
        },
        {
            id: 'checklists',
            route: '/checklists',
            subRoutes: ['/checklists', '/add-checklist', '/edit-checklist', '/preview-checklist'],
            name: 'Checklists',
            icon: <LiaClipboardListSolid size={20}/>,
        },
        commonRoutes[1],
        commonRoutes[2],
    ];


    let routes = commonRoutes;
    if (user.user_role === 1) {
        routes = adminRoutes
    }

    const excludedRoutes = ['logout']

    const handleNavigate = (route, id, callback) => {
        if (excludedRoutes.includes(id)) {
            callback();
        } else {
            navigate(route);
        }
    }

    return (
        <div
            className={`bg-[#38AE29] text-white w-${isSidebarOpen ? '64' : '12'} flex flex-col p-4 transition-all ease-in-out duration-300`}
        >
            <button className="mb-4" onClick={toggleSidebar}>
                {isSidebarOpen ? <FiChevronLeft size={25}/> : <FiChevronRight size={25}/>}
            </button>
            <h1 className="text-2xl font-semibold mb-4">
                {isSidebarOpen &&
                    <>
                        <span className="ml-2">Admin Dashboard</span>
                    </>
                }
            </h1>
            <ul>
                {routes.map((elt, index) => (
                    <li
                        className={`cursor-pointer flex items-center ${
                            elt.subRoutes.includes(location.pathname) ? 'font-bold' : ''
                        } mb-2`}
                        onClick={() => handleNavigate(elt?.route, elt?.id, elt?.callback)}
                        key={index}
                    >
                        {elt.icon} {isSidebarOpen && <span className="ml-2">{elt.name}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
