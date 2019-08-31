import React from 'react'

const Error = ({ children }) => (
    <div className="alert alert-danger m-2" role="alert">
        {children}
    </div>
)

export default Error
