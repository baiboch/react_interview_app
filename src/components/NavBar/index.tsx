import React from "react";

export default function NavBar() {
    const title = 'Interview participants';
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">{title}</a>
                    </div>
                </nav>
            </header>
        </>
    );
}
