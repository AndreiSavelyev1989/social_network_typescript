import {AppInitialType, appReducer, setIsInitialized} from "./app-reducer";

let startState: AppInitialType = {
    isInitialized: false
}

beforeEach(() => {
    startState = {
        isInitialized: false
    };
})

test('isInitialized should be changing', () => {

    const action = setIsInitialized(true);

    const endState = appReducer(startState, action)

    expect(endState).toEqual({
            isInitialized: true
        }
    )
});