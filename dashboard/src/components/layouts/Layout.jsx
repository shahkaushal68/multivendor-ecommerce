
import Header from './Header'
import SideBar from './SideBar'
import Footer from './Footer'
import useLayoutHook from '../../hooks/useLayoutHook'

const Layout = ({ children }) => {
    const { handleCollapse, collapse } = useLayoutHook();
    return (
        <div className={collapse ? 'toggle-sidebar' : ''}>
            <Header handleCollapse={handleCollapse} />
            <SideBar collapse={collapse} />
            <main id="main" className="main">
                {children}
            </main>
            <Footer />

        </div>
    )
}

export default Layout
