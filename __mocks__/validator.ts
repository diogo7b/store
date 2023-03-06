export interface Validator {
    email: string;
    isEmailValid: boolean;
}

export class Validator {
    isEmailValid = true;
    isEmail = async (email: string): Promise<boolean> => {
        this.email = email
        return this.isEmailValid
        // return new Promise((resolve, reject) => {
        //     if (this.isEmailValid === true) {
        //         resolve(this.isEmailValid)
        //     }

        //     if (this.isEmailValid === false) {
        //         reject(this.isEmailValid)
        //     }
        // })
    };

}