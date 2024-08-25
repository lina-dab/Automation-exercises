
export function generateRandomEmail() {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let localPart = '';
    for (let i = 0; i < 8; i++) {
        localPart += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `${localPart}@gmail.com`;

}

export function generateRandomUser() {
    return {
        name: 'Lina',
        lastName: 'Testiene',
        email: generateRandomEmail(),
        password: 'testas123',
        dayOfBirth: 1,
        monthOfBirth: 1,
        yearOfBirth: 1991,
        company: 'Cognizant',
        address: 'Zalgirio g. 112',
        address2: 'Saltoniskiu g. 9B',
        country: 'Australia',
        state: 'Vilniaus miesto',
        city: 'Vilnius',
        zipCode: 'LT-01100',
        mobileNumber: '+37012345678'
    };
}