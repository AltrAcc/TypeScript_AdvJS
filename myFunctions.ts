function addTwo(num: number): number {
    return num + 2;
    // return 'Hello';
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, pin: number) {}

let loginUser = (name: string, email: string, pin: number = 1111) => {}

addTwo(3);
getUpper('janvi');

signUpUser('janvi', 'janvi@gmail.com', 1111);
loginUser('janvi', 'j@gmail.com');

export{}