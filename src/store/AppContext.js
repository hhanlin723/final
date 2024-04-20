import { createContext } from "react";

export const AppContext = createContext(null);


export const initialState = {
    cities: [],
    user: {
        name: 'Hailey',
        age: 34,
        preferredclimate: 'Hot',
        validDiscount: false,
        email: 'haileyisthebest@getDefaultNormalizer.com',
        ticketsTo: ['Port Israel']
    },
    favoriteCity: {
        name: 'London, England'
    }      
}