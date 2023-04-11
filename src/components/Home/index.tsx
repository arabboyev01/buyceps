import { useState } from "react"
import { useQuery } from '@apollo/client'
import { GET_ALL_POKEMONS } from '@/pages/api/hello'
import HomeDumb from '@/src/components/Home/HomeDumb'

const HomePage = () => {
    const [count, setCount] = useState(20)
    const {loading, error, data} = useQuery(GET_ALL_POKEMONS, {
        variables: {first: count},
    });
    const handleAddPage = () => {
        setCount(count + 20)
    }

    return <HomeDumb data={data} loading={loading} error={error} handleAddPage={handleAddPage}/>

}
export default HomePage;