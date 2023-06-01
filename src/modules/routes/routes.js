import listChat from "../chat/listChat";
import login from "../auth/components/login/login";

export const LOGIN_ROUTE = '/'
export const LIST_CHAT_ROUTE = '/list-chat'

export const routes = [
    {
        path: LOGIN_ROUTE,
        Component:login
    },
    {
        path: LIST_CHAT_ROUTE,
        Component: listChat
    },
]
