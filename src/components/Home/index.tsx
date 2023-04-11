import { useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POKEMONS } from '@/pages/api/hello'
import HomeDumb from '@/src/components/Home/HomeDumb'
import { useRouter } from 'next/router'

const HomePage = () => {
    const [count, setCount] = useState(20)
    const router = useRouter()
    const {loading, error, data} = useQuery(GET_ALL_POKEMONS, {
        variables: {first: count},
    });
    const handleAddPage = () => {
        setCount(count + 20)
    }

    const handleRoutePage = (id: any, name: any) => {
        return router.push({pathname: '/single-cart', query: {id: id, name: name}})
    }

    return (
        <HomeDumb
            data={data}
            loading={loading}
            error={error}
            handleAddPage={handleAddPage}
            handleRoutePage={handleRoutePage}
        />
    )

}
export default HomePage;