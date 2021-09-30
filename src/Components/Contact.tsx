import React from 'react'

interface Props {
    name: string,
}

export const Contact:React.FC<Props> = ({name}) => {
    return (
        <div className="contact bg-secondary p-3 rounded-3 my-3 text-white fs-3">
            <p className="name">{name}</p>
        </div>
    )
}
