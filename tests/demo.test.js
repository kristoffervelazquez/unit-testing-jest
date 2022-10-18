


describe('Pruebas en <DemoComponent />', () => {

    test('Esta prueba no debe fallar', () => {
        // Inicializacion
        const message1 = 'Hola mundo';
        //Estimulo
        const message2 = message1.trim();

        //Observar comportamiento
        expect(message1).toBe(message2);
    })
})