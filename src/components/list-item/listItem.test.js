import React from 'react'
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import ListItem from './ListItem'

afterEach(cleanup)

describe('List item', () => {
    test('loads and displays list item', () => {
        const {getByText} = render(<ListItem/>)
        const listItem = getByText(/ITEM/)
        
        expect(listItem).toBeTruthy()
    })
})