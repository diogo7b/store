import { Validator } from "../../__mocks__/validator"
import { UserRegisterRoute } from "./user-register-route"

const makeSut = (): any => {
    const validator = new Validator()
    const userRegisterRoute = new UserRegisterRoute(validator)

    return {
        userRegisterRoute, validator
    }
}

const makeSutWithInvalidParam = (): any => {
    const validator = new Validator()
    validator.isEmailValid = false;
    const userRegisterRoute = new UserRegisterRoute(validator)

    return {
        userRegisterRoute, validator
    }
}

type UserRequest = {
    body: {
        name: string,
        email: string,
        password: string
    }
}

describe("User Register Route", () => {
    it("Should return 400 if no param is provided", async () => {
        const { userRegisterRoute } = makeSut()
        const response = await userRegisterRoute.save({ body: {} })
        expect(response).toEqual({ statusCode: 400, message: `Bad Request` })
    })

    it("Should return 401 if an invalid param is provided", async () => {
        const { userRegisterRoute, validator } = makeSutWithInvalidParam()
        const response = await userRegisterRoute.save({ body: { name: "Diogo", email: "invalid_mail", password: "any" } })
        expect(response).toEqual({ statusCode: 401, message: `Bad Request` })
    })
})