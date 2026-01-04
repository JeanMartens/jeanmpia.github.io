import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className="flex flex-col gap-4 p-4">
            <h1 className="text-3xl font-bold text-foreground">
                Menu
            </h1>
            <nav className="flex flex-col gap-2">
                <Link
                    to="/52-weeks-of-code"
                    className="text-lg text-primary hover:underline"
                >
                    Fifty Two Weeks Of Code
                </Link>
            </nav>
        </div>
    )
}