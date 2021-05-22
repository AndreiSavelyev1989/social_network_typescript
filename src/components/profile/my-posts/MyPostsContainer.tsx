import {addPost, deletePost, setDislikesCount, setLikesCount} from "../../../redux-state/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StoreType} from "../../../redux-state/redux-store";
import React from "react";


const mapStateToProps = (state: StoreType) => {
    const {posts, profile} = state.profilePage;
    const authUserId = state.auth.id;
    return { posts, profile, authUserId}
}

export const MyPostsContainer = React.memo(connect(mapStateToProps, {
    addPost, setLikesCount, deletePost, setDislikesCount
})(MyPosts))