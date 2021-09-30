import React from 'react'
import { Contact } from "./Contact"

export const Contacts:React.FC = () => {
    return (
        <div className="contacts mt-4">
            <Contact name="Jozo" />
            <Contact name="Jozo"/>
            <Contact name="Jozo"/>
        </div>
    )
}
