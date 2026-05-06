import { Link, useLocation } from 'react-router-dom'

export default function () {
    const location = useLocation()

    const isActive = (path) => {
        return location.pathname === path ? "nav-item active" : "nav-item"
    }

    const isDropdownActive = (path) => {
        return location.pathname.startsWith(path) ? "nav-item dropdown active" : "nav-item dropdown"
    }

    return (
        <nav className="navbar navbar-expand-lg navbar bg-light">
            <Link className="navbar-brand" to="/">MAHIN.</Link>

            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span
                    className="navbar-toggler-icon"
                    style={{
                        backgroundImage:
                            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e\")"
                    }}
                ></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className={isActive("/")}>
                        <Link className="nav-link" to="/">
                            Home <span className="sr-only">(current)</span>
                        </Link>
                    </li>

                    <li className={isActive("/about-me")}>
                        <Link className="nav-link" to="/about-me">About Me</Link>
                    </li>

                    <li className={isDropdownActive("/lllp")}>
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="lllpDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            LLLP
                        </a>

                        <div className="dropdown-menu" aria-labelledby="lllpDropdown">
                            <Link className="dropdown-item" to="/lllp">LLLP</Link>
                            <Link className="dropdown-item" to="/lllp/1">LLLP #1</Link>
                            <Link className="dropdown-item" to="/lllp/2">LLLP #2</Link>
                            <Link className="dropdown-item" to="/lllp/3">LLLP #3</Link>
                            <Link className="dropdown-item" to="/lllp/4">LLLP #4</Link>
                            <Link className="dropdown-item" to="/lllp/5">LLLP #5</Link>
                        </div>
                    </li>

                    <li className={isDropdownActive("/presentations")}>
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="presentationsDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Presentations
                        </a>

                        <div className="dropdown-menu" aria-labelledby="presentationsDropdown">
                            <Link className="dropdown-item" to="/presentations">Presentations</Link>
                            <Link className="dropdown-item" to="/presentations/1">Presentation #1</Link>
                            <Link className="dropdown-item" to="/presentations/2">Presentation #2</Link>
                        </div>
                    </li>

                    <li className={isDropdownActive("/posters")}>
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="postersDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Posters
                        </a>

                        <div className="dropdown-menu" aria-labelledby="postersDropdown">
                            <Link className="dropdown-item" to="/posters">Posters</Link>
                            <Link className="dropdown-item" to="/posters/1">Poster #1</Link>
                            <Link className="dropdown-item" to="/posters/2">Poster #2</Link>
                        </div>
                    </li>

                    <li className={isDropdownActive("/data-projects")}>
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="dataProjectsDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Data Projects
                        </a>

                        <div className="dropdown-menu" aria-labelledby="dataProjectsDropdown">
                            <Link className="dropdown-item" to="/data-projects">Data Projects</Link>
                            <Link className="dropdown-item" to="/data-projects/1">Data Project #1</Link>
                            <Link className="dropdown-item" to="/data-projects/2">Data Project #2</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}