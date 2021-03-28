import {addPost, deletePost, newPostId, ProfilePageType, profileReducer, setLikesCount} from "./profile-reducer";

let startState: ProfilePageType = {
    posts: [
        {id: "1", postMessage: "Hello World", likesCount: 20},
        {id: "2", postMessage: "It is my first post", likesCount: 10}
    ],
    profile: null,
    status: ""
}

beforeEach(() => {
    startState = {
        posts: [
            {id: "1", postMessage: "Hello World", likesCount: 20},
            {id: "2", postMessage: "It is my first post", likesCount: 10}
        ],
        profile: null,
        status: ""
    };
})

test('new post should be added into posts', () => {

    const action = addPost("IT-INCUBATOR");

    const endState = profileReducer(startState, action)

    expect(endState).toEqual({
        posts: [
            {id: "1", postMessage: "Hello World", likesCount: 20},
            {id: "2", postMessage: "It is my first post", likesCount: 10},
            {id: newPostId, postMessage: "IT-INCUBATOR", likesCount: 0}
        ],
        profile: null,
        status: ""
        }
    )
});

test('likesCount of current post should be incremented by 1', () => {

    const action = setLikesCount("2", 11);

    const endState = profileReducer(startState, action)

    expect(endState).toEqual({
        posts: [
            {id: "1", postMessage: "Hello World", likesCount: 20},
            {id: "2", postMessage: "It is my first post", likesCount: 11},
        ],
        profile: null,
        status: ""
        }
    )
});

test('selected post should be deleted from posts', () => {

    const action = deletePost("2");

    const endState = profileReducer(startState, action)

    expect(endState).toEqual({
        posts: [
            {id: "1", postMessage: "Hello World", likesCount: 20}
        ],
        profile: null,
        status: ""
        }
    )
});