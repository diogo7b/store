
interface Validator {
    isEmailValid: boolean;
    isEmail: (email: string) => boolean
}
const validator: Validator = {
    isEmailValid: true,

    isEmail: (email: string) => {
        return this.isEmailValid
    }
}