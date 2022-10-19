import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en 09-Promesas.js', () => {
    test('Debe retornar un heroe', async () => {
        const id = 1
        getHeroeByIdAsync(id).then(heroe => {
            expect(heroe.id).toBe(id);
            done();
        })

    })



    test('Debe de obtener un error si hereo no encuentra', () => { 
        const id = 100
        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toBeFalsy();
        }).catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        })
     })
})