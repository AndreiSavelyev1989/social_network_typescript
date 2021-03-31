import {
    addPost,
    deletePost,
    newPostId,
    ProfilePageType,
    profileReducer,
    setLikesCount,
    setUserProfile,
    setUserStatus
} from "./profile-reducer";

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

test('user profile should be added into state', () => {

    const action = setUserProfile({
        userId: 6251,
        fullName: "Andrei",
        aboutMe: "Frontend developer",
        lookingForAJob: true,
        lookingForAJobDescription: "Looking for a job",
        contacts: {
            facebook: "facebook.com",
            website: "website.com",
            vk: "vk.com",
            twitter: "twitter.com",
            instagram: "instagram.com",
            youtube: "youtube.com",
            github: "github.com",
            mainLink: "mainLink.com"
        },
        photos: {
            small: "small.png",
            large: "large.png"
        }
    });

    const endState = profileReducer(startState, action)

    expect(endState).toEqual({
        posts: [
            {id: "1", postMessage: "Hello World", likesCount: 20},
            {id: "2", postMessage: "It is my first post", likesCount: 10},
        ],
        profile: {
            userId: 6251,
            fullName: "Andrei",
            aboutMe: "Frontend developer",
            lookingForAJob: true,
            lookingForAJobDescription: "Looking for a job",
            contacts: {
                facebook: "facebook.com",
                website: "website.com",
                vk: "vk.com",
                twitter: "twitter.com",
                instagram: "instagram.com",
                youtube: "youtube.com",
                github: "github.com",
                mainLink: "mainLink.com"
            },
            photos: {
                small: "small.png",
                large: "large.png"
            }
        },
        status: ""
        }
    )
});

test('user status should be added into state', () => {

    const action = setUserStatus("IT-INCUBATOR");

    const endState = profileReducer(startState, action)

    expect(endState).toEqual({
            posts: [
                {id: "1", postMessage: "Hello World", likesCount: 20},
                {id: "2", postMessage: "It is my first post", likesCount: 10},
            ],
            profile: null,
            status: "IT-INCUBATOR"
        }
    )
});