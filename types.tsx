import { ApolloError } from '@apollo/client'

export type MainDataTypes = {
    id: number
    number: number
    name: string
    image: any
    types: any
    pokemons: any
}
export type HomePageDataType = {
    data: MainDataTypes
    loading?: boolean | undefined
    error?: ApolloError | undefined
    handleAddPage?: any
    handleRoutePage: (e: any, b: any) => void
    indexOfLastPost: number
    indexOfFirstPost: number
    handleRemovePage?: () => void
    disabled?: boolean
}