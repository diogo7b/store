class UserResgisterUseCase {
    constructor() { }

    async save(name: string, email: string, password: string): Promise<String> {
        if (!email) {
            throw new Error("Missing Params")
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
    password: 'passwor0123'
}

describe("User register use cases", () => {
    it("Should return success with correct params", async () => {
        const userResgisterUseCase = new UserResgisterUseCase()
        const promise = await userResgisterUseCase.save(userData.name, userData.email, userData.password)
        await expect(promise).toBe("User registered")
    }),
        it("Should throw an error if missing params", async () => {
            const userResgisterUseCase = new UserResgisterUseCase()
            const promise = userResgisterUseCase.save(userDataMissingParam.name, userDataMissingParam.email, userDataMissingParam.password)
            await expect(promise).rejects.toThrow()
        })
})