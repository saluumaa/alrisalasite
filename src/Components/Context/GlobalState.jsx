import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

// Initial state
const initialState = {
    news: [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultricies neque eget, ornare odio. Nulla facilisi. Nulla facilisi. In hac habitasse platea dictumst. Donec vel est id odio ultrices suscipit. Sed vitae turpis at nisi tempor tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet, odio eu aliquet fermentum, velit nisl vehicula ante, vitae tincidunt leo neque eu lectus. Donec vel est id odio ultrices suscipit. Sed vitae turpis at nisi tempor tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            date: '2021-05-20',
            image: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300']
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultricies neque eget, ornare odio. Nulla facilisi. Nulla facilisi. In hac habitasse platea dictumst. Donec vel est id odio ultrices suscipit. Sed vitae turpis at nisi tempor tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet, odio eu aliquet fermentum, velit nisl vehicula ante, vitae tincidunt leo neque eu lectus. Donec vel est id odio ultrices suscipit. Sed vitae turpis at nisi tempor tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            date: '2021-05-20',
            image: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300']
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultricies neque eget, ornare odio. Nulla facilisi. Nulla facilisi. In hac habitasse platea dictumst. Donec vel est id odio ultrices suscipit. Sed vitae turpis at nisi tempor tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet, odio eu aliquet fermentum, velit nisl vehicula ante, vitae tincidunt leo neque eu lectus. Donec vel est id odio ultrices suscipit. Sed vitae turpis at nisi tempor tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            date: '2021-05-20',
            image: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300']
        },
        {
            id: 4,
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, ultricies neque eget, ornare odio. Nulla facilisi. Nulla facilisi. In hac habitasse platea dictumst. Donec vel est id odio ultrices suscipit. Sed vitae turpis at nisi tempor tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed aliquet, odio eu aliquet fermentum, velit nisl vehicula ante, vitae tincidunt leo neque eu lectus. Donec vel est id odio ultrices suscipit. Sed vitae turpis at nisi tempor tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
            date: '2022-05-20',
            image: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300', 'https://picsum.photos/200/300']
        },
    ]
}

    // create context  
    
    export const GlobalContext = createContext(initialState);

    // provider component

    export const GlobalProvider = ({children}) => {
        const [state, dispatch] = useReducer(AppReducer, initialState);

        // actions
        function deleteNews(id) {
            dispatch({
                type: 'DELETE_NEWS',
                payload: id
            });
        }

        function addNews(news) {
            dispatch({
                type: 'ADD_NEWS',
                payload: news
            });
        }

        return (<GlobalContext.Provider value={{
            news: state.news,
            deleteNews,
            addNews
        }}>
            {children}
        </GlobalContext.Provider>);

    
}