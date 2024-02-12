import { Link } from "react-router-dom"

const SideBar = () => {
    return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="">
                        <i className="bi bi-grid" />
                        <span>Dashboard</span>
                    </Link>
                </li>{/* End Dashboard Nav */}

                <li className="nav-item">
                    <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                        <i className="bi bi-basket" /><span>Products</span><i className="bi bi-chevron-down ms-auto" />
                    </a>
                    <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <Link to="/products">
                                <i className="bi bi-circle" /><span>View All Products</span>
                            </Link>
                        </li>
                        <li>
                            <a href="icons-remix.html">
                                <i className="bi bi-circle" /><span>Add Product</span>
                            </a>
                        </li>
                    </ul>
                </li>{/* End Icons Nav */}
                <li className="nav-heading">Pages</li>
                <li className="nav-item">
                    <a className="nav-link collapsed" href="users-profile.html">
                        <i className="bi bi-person" />
                        <span>Profile</span>
                    </a>
                </li>{/* End Profile Page Nav */}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="pages-faq.html">
                        <i className="bi bi-question-circle" />
                        <span>F.A.Q</span>
                    </a>
                </li>{/* End F.A.Q Page Nav */}

            </ul>
        </aside>
    )
}

export default SideBar
