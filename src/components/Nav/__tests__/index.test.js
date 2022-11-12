import React from 'react';
import {render , cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';



const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

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
    it('Renders Nav component', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
          />);
    })


    /*
    *Snapshot test
    *To Compare Snapshots of the DOM node structure
    */
    it('Matches Snapshot', () =>{
        const { asFragment } =  render(<Nav
          categories={categories}
          setCurrentCategory={mockSetCurrentCategory}
          currentCategory={mockCurrentCategory}
          contactSelected={mockContactSelected}
          setContactSelected={mockSetContactSelected}
        />); // returns a snapshot of the Nav component
        expect(asFragment()).toMatchSnapshot(); // toMatchSnapshot() asserts that snapshots will match:
    })

})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        //Arrange
        const { getByLabelText } =render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
          />);
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})


describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } =render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
          />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })