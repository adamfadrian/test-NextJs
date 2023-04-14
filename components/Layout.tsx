import React, { FC } from 'react'

interface Props {
    children?: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <div className="min-h-screen w-full overflow-auto ">
            <div className="h-full w-full overflow-auto bg-gray-100">{children}</div>
        </div>
    )
}

export default Layout