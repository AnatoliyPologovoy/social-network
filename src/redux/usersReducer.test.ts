import {setUsersAC, toggleFollowAC, usersReducer, UsersStateType, UserStateType} from "./usersReducer";

test('Users isFollow should be change', () => {

    const testUsers: UsersStateType = {
        users: [
            {
                id: 1, status: "Hello, world!", name: 'Roman', isFollow: true, location: {
                    cityName: 'Moscow', country: 'Russia'
                },
                avatar: "https://i.pravatar.cc/38"
            },
            {
                id: 2, status: "This is my new post", name: 'Andrew', isFollow: false, location: {
                    cityName: 'Berlin', country: 'Germany'
                },
                avatar: "https://i.pravatar.cc/38"
            }
        ]
    }

    const endState = usersReducer(testUsers, toggleFollowAC(1))
    const endState2 = usersReducer(testUsers, toggleFollowAC(2))

    expect(endState.users[0].isFollow).toBe(false)
    expect(endState2.users[1].isFollow).toBe(true)
    expect(endState2.users.length).toBe( 2)
})

test('Users length should be integer', () => {

    const testUsers: UsersStateType = {
        users: [
            {
                id: 1, status: "Hello, world!", name: 'Roman', isFollow: true, location: {
                    cityName: 'Moscow', country: 'Russia'
                },
                avatar: "https://i.pravatar.cc/38"
            },
            {
                id: 2, status: "This is my new post", name: 'Andrew', isFollow: true, location: {
                    cityName: 'Berlin', country: 'Germany'
                },
                avatar: "https://i.pravatar.cc/38"
            }
        ]
    }

    const addedUser:UserStateType[] = [
        {
            id: 3, status: "I love React", name: 'Roman', isFollow: false, location: {
                cityName: 'Minsk', country: 'Belarus'
            },
            avatar: "https://i.pravatar.cc/38"
        }
    ]

    const endState = usersReducer(testUsers, setUsersAC(addedUser))

    expect(endState.users.length).toBe(3)
    expect(endState.users[2].name).toBe('Roman')
    expect(endState.users[1].name).toBe('Andrew')
})