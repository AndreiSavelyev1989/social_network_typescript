import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    usersReducer,
    UsersType
} from "./users-reducer";

let startState: UsersType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    portionSize: 10,
    isFetching: false,
    followingInProgress: []
}

beforeEach(() => {
    startState = {
        users: [
            {
                id: 6251,
                name: "Andrei",
                status: "hello",
                photos: {
                    small: "small.png",
                    large: "large.png"
                },
                followed: false
            }
        ],
        pageSize: 5,
        totalUsersCount: 0,
        currentPage: 1,
        portionSize: 10,
        isFetching: false,
        followingInProgress: []
    };
})

test('users should be changing', () => {

    const action = setUsers([
        {
            id: 62,
            name: "Andrei",
            status: "hello",
            photos: {
                small: "small.png",
                large: "large.png"
            },
            followed: false
        },
        {
            id: 625,
            name: "Victor",
            status: "World",
            photos: {
                small: "small.png",
                large: "large.png"
            },
            followed: false
        },

    ]);

    const endState = usersReducer(startState, action)

    expect(endState).toEqual({
            users: [
                {
                    id: 62,
                    name: "Andrei",
                    status: "hello",
                    photos: {
                        small: "small.png",
                        large: "large.png"
                    },
                    followed: false
                },
                {
                    id: 625,
                    name: "Victor",
                    status: "World",
                    photos: {
                        small: "small.png",
                        large: "large.png"
                    },
                    followed: false
                },
            ],
            pageSize: 5,
            totalUsersCount: 0,
            currentPage: 1,
            portionSize: 10,
            isFetching: false,
            followingInProgress: []
        }
    )
});

test('followed should be changing', () => {

    const action = followSuccess(6251);

    const endState = usersReducer(startState, action)

    expect(endState).toEqual({
            users: [
                {
                    id: 6251,
                    name: "Andrei",
                    status: "hello",
                    photos: {
                        small: "small.png",
                        large: "large.png"
                    },
                    followed: true
                }
            ],
            pageSize: 5,
            totalUsersCount: 0,
            currentPage: 1,
            portionSize: 10,
            isFetching: false,
            followingInProgress: []
        }
    )
});

test('totalUsersCount should be changing', () => {

    const action = setTotalUsersCount(6251);

    const endState = usersReducer(startState, action)

    expect(endState).toEqual({
            users: [
                {
                    id: 6251,
                    name: "Andrei",
                    status: "hello",
                    photos: {
                        small: "small.png",
                        large: "large.png"
                    },
                    followed: false
                }
            ],
            pageSize: 5,
            totalUsersCount: 6251,
            currentPage: 1,
            portionSize: 10,
            isFetching: false,
            followingInProgress: []
        }
    )
});

test('currentPage should be changing', () => {

    const action = setCurrentPage(5);

    const endState = usersReducer(startState, action)

    expect(endState).toEqual({
            users: [
                {
                    id: 6251,
                    name: "Andrei",
                    status: "hello",
                    photos: {
                        small: "small.png",
                        large: "large.png"
                    },
                    followed: false
                }
            ],
            pageSize: 5,
            totalUsersCount: 0,
            currentPage: 5,
            portionSize: 10,
            isFetching: false,
            followingInProgress: []
        }
    )
});

test('isFetching should be changing', () => {

    const action = toggleIsFetching(true);

    const endState = usersReducer(startState, action)

    expect(endState).toEqual({
            users: [
                {
                    id: 6251,
                    name: "Andrei",
                    status: "hello",
                    photos: {
                        small: "small.png",
                        large: "large.png"
                    },
                    followed: false
                }
            ],
            pageSize: 5,
            totalUsersCount: 0,
            currentPage: 1,
            portionSize: 10,
            isFetching: true,
            followingInProgress: []
        }
    )
});

test('followingInProgress should be changing', () => {

    const action = toggleFollowingProgress(true, 6251);

    const endState = usersReducer(startState, action)

    expect(endState).toEqual({
            users: [
                {
                    id: 6251,
                    name: "Andrei",
                    status: "hello",
                    photos: {
                        small: "small.png",
                        large: "large.png"
                    },
                    followed: false
                }
            ],
            pageSize: 5,
            totalUsersCount: 0,
            currentPage: 1,
            portionSize: 10,
            isFetching: false,
            followingInProgress: [6251]
        }
    )
});