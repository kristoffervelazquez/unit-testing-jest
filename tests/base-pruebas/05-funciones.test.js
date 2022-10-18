import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        // console.log(user);

        expect(testUser).toEqual(user)

    });



    test('getUsarioActivo debe retornar un objeto', () => {
        const name = 'Kristoffer'

        const activeUser = getUsuarioActivo(name);

        expect(activeUser.username).toBe(name);

    })

})