import React from 'react'
import {render,fireEvent, cleanup, waitForElement} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

import Input from './Input'

afterEach(cleanup)

describe('Input component', () => {
    test('loads and displays', () => {
        const {getByPlaceholderText} = render(<Input placeholder="This is a test"/>)
        const inputEle = getByPlaceholderText('This is a test')
        

        inputEle.value = "Text changed"
        expect(inputEle).toBeTruthy()
        expect(inputEle.value).toBe('Text changed')
    })
})