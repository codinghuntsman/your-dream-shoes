import React from 'react';
import { useMatch, useResolvedPath, Link } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{
                    color: match ? "HotPink" : 'black', textDecoration: "none",
                    fontWeight: "bold", padding: "10px"
                }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

export default CustomLink;