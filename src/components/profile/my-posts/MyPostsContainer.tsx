import {addPost, setLikesCount} from "../../../redux-state/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StoreType} from "../../../redux-state/redux-store";
import React from "react";


const mapStateToProps = (state: StoreType) => {
    return {
        posts: state.profilePage.posts,
    }
}

export const MyPostsContainer = React.memo(connect(mapStateToProps, {
    addPost, setLikesCount
})(MyPosts))