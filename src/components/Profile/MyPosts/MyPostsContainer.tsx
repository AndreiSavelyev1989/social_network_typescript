import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux-state/profile-reducer";
import {StoreType} from "../../../redux-state/redux-store-types";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";


// export function MyPostsContainer() {
//
//     const stateProfilePage = props.store.getState().profilePage
//
//     const addPost = () => {
//         props.store.dispatch(addPostAC(stateProfilePage.newPostText))
//     }
//
//     const updateNewPostText = (text: string) => {
//         props.store.dispatch(updateNewPostTextAC(text))
//     }
//
//     return (
//         <MyPosts posts={stateProfilePage.posts}
//                  newPostText={stateProfilePage.newPostText}
//                  addPost={addPost}
//                  updateNewPostText={updateNewPostText}
//         />
//     )
// }

const mapStateToProps = (state: StoreType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostAC(newPostText))
        },
        updateNewPostText: (text: string) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)