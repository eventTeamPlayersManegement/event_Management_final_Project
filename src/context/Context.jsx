import React, { createContext } from 'react';

export const EventContext = createContext();

function Context({ children }) {


    return (
        <EventContext.Provider value={{

            }}>
                {children}
        </EventContext.Provider>
        
    )
}

export default Context;