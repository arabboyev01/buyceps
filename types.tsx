import { ApolloError } from '@apollo/client'

export type MainDataTypes = {
    id: number
    number: number
    name: string
    image: any
    types: any
}
export type HomePageDataType = {
    data: MainDataTypes
    loading: boolean | undefined
    error?: ApolloError | undefined
    handleAddPage: any
}