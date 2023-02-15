class UserResgisterUseCase {
    constructor() { }

    auth(name: string, email: string, password: string): string {
        if (!name || !email || !password) {
            throw new Error()
        }
        return "User registered"
    }
}

const userData = {
    name: 'Diogo',
    email: 'diogo@diogo',
    password: 'diogo0123'
}
const userDataMissingParam = {
    name: 'Diogo',
    email: '',
    password: ''
}

describe("User register use cases", () => {
    it("Should return success with correct params", () => {
        const userResgisterUseCase = new UserResgisterUseCase()
        const response = userResgisterUseCase.auth(userData.name, userData.email, userData.password)
        expect(response).toBe("User registered")
    }),
        it("Should throw an error if missing params", () => {
            const userResgisterUseCase = new UserResgisterUseCase()
            const response = userResgisterUseCase.auth(userDataMissingParam.name, userDataMissingParam.email, userDataMissingParam.password)
            expect(response).rejects.toThrow(new Error())
        })
})