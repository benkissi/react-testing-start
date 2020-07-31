import React from 'react'
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import List from './List'

afterEach(cleanup)

describe('List component', () => {
    test('loads and displays list items', () => {
        const {getByText} = render(<List listItems={['Aqua', 'Blue', 'Green']}/>)
        const listItem = getByText(/Aqua/)
        
        expect(listItem).toBeTruthy()
    })
})