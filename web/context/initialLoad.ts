import { createContext } from 'react'

export const initialLoad: boolean = false

export const InitialLoadContext = createContext(initialLoad)
