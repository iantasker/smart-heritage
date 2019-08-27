import React from 'react'

const Alert = ({ children }) => (
    <div className="alert alert-danger m-2" role="alert">
        {children}
    </div>
)

export default Alert
