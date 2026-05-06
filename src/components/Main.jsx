import NavBar from './NavBar'

export default function ({ children }) {
    return (
        <main>
            <div className="container mainContainer">
                <NavBar />
                {children}
            </div>
        </main>
    )
}