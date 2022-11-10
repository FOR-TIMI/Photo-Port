import React from 'react';
import {render , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';


/*This will ensure that after each test, 
* we won't have any leftover memory data that could give us false results.
*/
afterEach(cleanup);


describe('About component', () => {
    //to verify that the component is rendering
    it('Renders about component', () => {
        render(<About/>)
    })
    
    //to Compare Snapshots of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />); // returns a snapshot of the About component
        expect(asFragment()).toMatchSnapshot(); // toMatchSnapshot() asserts that snapshots will match:
    })

})


