import { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { GET_ALL_POKEMONS } from '@/pages/api/hello'
import HomeDumb from '@/src/components/Home/HomeDumb'
import { useRouter } from 'next/router'

const HomePage = () => {
    const [count, setCount] = useState(60)
    const [disabled, setDisabled] = useState(true)
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);

    const {loading, error, data} = useQuery(GET_ALL_POKEMONS, {
        variables: {first: count},
    });

    const handleAddPage = function () {
        setCurrentPage(currentPage + 1)
        currentPage >= 2 && setCount(count + 20)
    }

    const handleRemovePage = () => {
        setCurrentPage(currentPage - 1)
        currentPage >= 3 && setCount(count - 20)
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;

    const handleRoutePage = (id: any, name: any) => {
        return router.push({pathname: '/single-cart', query: {id: id, name: name}})
    }

    useEffect(() => {
        currentPage === 1 ? setDisabled(true) : setDisabled(false)
    }, [currentPage])

    return (
        <HomeDumb
            data={data}
            loading={loading}
            error={error}
            handleAddPage={handleAddPage}
            handleRemovePage={handleRemovePage}
            handleRoutePage={handleRoutePage}
            indexOfFirstPost={indexOfFirstPost}
            indexOfLastPost={indexOfLastPost}
            disabled={disabled}
        />
    )

}
export default HomePage;