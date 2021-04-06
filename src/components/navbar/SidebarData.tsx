import React from "react";
import {BiNews, CgProfile, FaUsers, GiMusicSpell, IoSettingsSharp, MdMessage, RiLoginBoxLine} from "react-icons/all";

export const PATH = {
    PROFILE: "/profile",
    DIALOGS: "/dialogs",
    USERS: "/users",
    LOGIN: "/login",
    NEWS: "/news",
    MUSIC: "/music",
    SETTINGS: "/settings",
    ABOUT_ME: "/profile/about-me",
    MY_POSTS: "/profile/my-posts",
    MY_FRIENDS: "/profile/my-friends"
}

export const sidebarData = [
    {
        title: "Profile",
        path: PATH.PROFILE,
        icon: <CgProfile/>
    },
    {
        title: "Dialogs",
        path: PATH.DIALOGS,
        icon: <MdMessage/>
    },
    {
        title: "Users",
        path: PATH.USERS,
        icon: <FaUsers/>
    },
    {
        title: "Login",
        path: PATH.LOGIN,
        icon: <RiLoginBoxLine/>
    },
    {
        title: "News",
        path: PATH.NEWS,
        icon: <BiNews/>
    },
    {
        title: "Music",
        path: PATH.MUSIC,
        icon: <GiMusicSpell/>
    },
    {
        title: "Settings",
        path: PATH.SETTINGS,
        icon: <IoSettingsSharp/>
    },

]

export const profileNavData = [
    {
        title: "About me",
        path: PATH.ABOUT_ME,
    },
    {
        title: "My posts",
        path: PATH.MY_POSTS,
    },
    {
        title: "My friends",
        path: PATH.MY_FRIENDS,
    },
]