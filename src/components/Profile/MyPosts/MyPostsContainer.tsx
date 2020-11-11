import {addPost, setLikesCount, updateNewPostText} from "../../../redux-state/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {StoreType} from "../../../redux-state/redux-store";


const mapStateToProps = (state: StoreType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {
    addPost, updateNewPostText, setLikesCount
})(MyPosts)