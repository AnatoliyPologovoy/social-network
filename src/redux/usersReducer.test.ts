import {setUsersAC, toggleFollowAC, usersReducer, UsersStateType, UserStateType} from "./usersReducer";

let testUsers: UsersStateType

beforeEach(()=>{
    testUsers = {
        users: [
            {
                id: 1, status: "Hello, world!", name: 'Roman', followed: true
            },
            {
                id: 2, status: "This is my new post", name: 'Andrew', followed: false
            }
        ],
        totalCountUsers: 0,
        usersPerPage: 8,
        currentPage: 1,
        maxPage: 20,
        isFetching: false
    }
})

test('Users isFollow should be change', () => {

    const endState = usersReducer(testUsers, toggleFollowAC(1))
    const endState2 = usersReducer(testUsers, toggleFollowAC(2))

    expect(endState.users[0].followed).toBe(false)
    expect(endState2.users[1].followed).toBe(true)
    expect(endState2.users.length).toBe( 2)
})

test('Users length should be integer', () => {

    const addedUser:UserStateType[] = [
        {
            id: 3, status: "I love React", name: 'Roman', followed: false
        }
    ]

    const endState = usersReducer(testUsers, setUsersAC(addedUser))

    expect(endState.users.length).toBe(1)
    expect(endState.users[0].name).toBe('Roman')
    // expect(endState.users[1].name).toBe('Andrew')
})