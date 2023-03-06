import { Validator } from "../../__mocks__/validator"

type UserRequest = {
    body: {
        name: string,
        email: string,
        password: string
    }
}

export interface UserRegisterRoute {
    validator: Validator
}

export class UserRegisterRoute {
    constructor(validator: Validator) {
        this.validator = validator
    }
    async save(data: UserRequest): Promise<object> {
        // if (!data || !data.body) {
        //     return { statusCode: 400, message: `Bad Request` }
        // }
        const { name, email, password } = data.body
        if (!name || !email || !password) {
            return { statusCode: 400, message: `Bad Request` }
        }
        const responseValidator = await this.validator.isEmail(email)
        if(responseValidator === false ){
            return { statusCode: 401, message: `Bad Request` }
        }
    
        return { statusCode: 200, message: `User Registered` }
    }
}