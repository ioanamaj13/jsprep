import { Link } from "react-router-dom"

export const SideBar = () => {
    return (
        <aside className="sideMenu">
            <h1>Header here</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/fizzbuzz">FizzBuzz</Link></li>
                <li><Link to="/palindrome">Palindrome</Link></li>
                <li><Link to="/brackets">Brackets</Link></li>
            </ul>
        </aside>

    )
}