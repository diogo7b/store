class UserRegisterRoute {
    async save(data: UserRequest): Promise<object> {
        // if (!data || !data.body) {
        //     return { statusCode: 400, message: `Bad Request` }
        // }
        const { name, email, password } = data.body
        if (!name || !email || !password) {
            return { statusCode: 400, message: `Bad Request` }
        }
        return {statusCode: 200, message: `User Registered`}
    }
}

type UserRequest = {
    body: {
        name: string,
        email: string,
        password: string
    }
}
const userRequestWithError: UserRequest = {
    body: {
        name: 'any',
        email: 'any@email',
        password: ''
    }

}
const userRequest: UserRequest = {
    body: {
        name: 'any',
        email: 'any@email',
        password: 'anyPassword'
    }
}

describe("User Register Route", () => {
    it("Should return 400 if no body is provided", async () => {
        const userRegisterRoute = new UserRegisterRoute()
        const response = await userRegisterRoute.save(userRequestWithError)
        expect(response).toEqual({ statusCode: 400, message: `Bad Request` })
    })
})