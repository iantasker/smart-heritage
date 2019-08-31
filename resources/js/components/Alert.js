import React from 'react'

const Alert = ({ children }) => (
    <div className="alert alert-warning alert-dismissible fade show m-2" role="alert">
        {children}
        <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
)

export default Alert
