import {authReducer, AuthUserType, setAuthUserData, setError, setIsAuth, setIsLoggedIn} from "./auth-reducer";

let startState: AuthUserType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    error: '',
    isLoggedIn: false
}

beforeEach(() => {
    startState = {
        id: null,
        email: null,
        login: null,
        isAuth: false,
        error: '',
        isLoggedIn: false
    };
})

test('authUserData(id, email, login) should be changing', () => {

    const action = setAuthUserData(6251, "andreiS@gmail.com", "AndreiS");

    const endState = authReducer(startState, action)

    expect(endState).toEqual({
            id: 6251,
            email: "andreiS@gmail.com",
            login: "AndreiS",
            isAuth: false,
            error: '',
            isLoggedIn: false
        }
    )
});

test('isLoggedIn should be changing', () => {

    const action = setIsLoggedIn(true);

    const endState = authReducer(startState, action)

    expect(endState).toEqual({
            id: null,
            email: null,
            login: null,
            isAuth: false,
            error: '',
            isLoggedIn: true
        }
    )
});

test('error should be changing', () => {

    const action = setError("Network error");

    const endState = authReducer(startState, action)

    expect(endState).toEqual({
            id: null,
            email: null,
            login: null,
            isAuth: false,
            error: 'Network error',
            isLoggedIn: false
        }
    )
});

test('isAuth should be changing', () => {

    const action = setIsAuth(true);

    const endState = authReducer(startState, action)

    expect(endState).toEqual({
            id: null,
            email: null,
            login: null,
            isAuth: true,
            error: '',
            isLoggedIn: false
        }
    )
});