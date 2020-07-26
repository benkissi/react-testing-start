import React from 'react'
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import List from './List'

afterEach(cleanup)

describe('List component', () => {
    test('loads and displays list item', () => {
        const {getByText} = render(<List><p>List item</p></List>)
        const listItem = getByText(/List item/)
        
        expect(listItem).toBeTruthy()
    })
})