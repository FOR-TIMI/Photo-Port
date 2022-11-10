import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


/*
* This will ensure that after each test, 
* we won't have any leftover memory data that could give us false results.
*/
afterEach(cleanup);

describe('Nav Component', () => {
    /*
    *Base Line test
    *to verify that the component is rendering
    */
    it('Renders about component', () => {
        render(<Nav/>)
    })


    /*
    *Snapshot test
    *To Compare Snapshots of the DOM node structure
    */
    it('Matches Snapshot', () =>{
        const { asFragment } =render(<Nav/>); // returns a snapshot of the Nav component
        expect(asFragment()).toMatchSnapshot(); // toMatchSnapshot() asserts that snapshots will match:
    })

})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //Arrange
        const { getByLabelText } = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})


describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Nav />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })