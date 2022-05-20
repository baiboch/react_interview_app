import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <span>{(new Date()).toDateString()}</span>
                </div>
            </footer>
        </>
    );
}
