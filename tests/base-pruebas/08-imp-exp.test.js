import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";



describe('Pruebas en 08-imp-exp', () => {

    test('getHeroeById debe de retornar un hereo por ID', () => {
        const id = 1;
        const hero = getHeroeById(id);


        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
    });


    test('getHeroeById debe de retornar undefined si no existe el ID', () => {
        const id = 1000;
        const hero = getHeroeById(id);

        // Null, undefined o false;
        expect(hero).toBeFalsy();
    });


    test('getHeroesByOwner debe de retornar todos los heroes de DC', () => {

        const owner = 'DC'
        const heroes = getHeroesByOwner(owner);

        
        expect(heroes.length).toEqual(3);
        expect(heroes).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    })


    test('getHeroesByOwner debe de retornar todos los heroes de Marvel', () => {

        const owner = 'Marvel'
        const heroes = getHeroesByOwner(owner);

        expect(heroes.length).toEqual(2);
        expect(heroes).toStrictEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
        ]);
    })

})