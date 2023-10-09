import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from './Cards';

const videogamesFakeData = [{
    id: '1',
    name: 'Juego 1',
    platforms: 'Plataforma1',
    background_image: 'imagen1.jpg',
    genres: ['Genre1', 'Genre2']
},{
    id: '2',
    name: 'Juego 2',
    platforms: 'Plataforma2',
    background_image: 'imagen2.jpg',
    genres: ['Genre3', 'Genre4']
}];

describe('<Cards/>', () => {
    test('Renderiza las Cards', () => {
        render(<Cards videogames={videogamesFakeData} />)

        const cardNames = screen.getAllByRole('heading'); // Asume que los nombres de los juegos están en elementos de encabezado.
        expect(cardNames[0]).toHaveTextContent('Juego 1');
        expect(cardNames[1]).toHaveTextContent('Juego 2');
    });

    test('No se renderiza ninguna Card si "videogames" está vacío', () => {
        render(<Cards videogames={[]} />)

        const card = screen.queryByRole('heading'); // Intenta encontrar cualquier elemento de encabezado.
        expect(card).not.toBeInTheDocument();
    });
});

