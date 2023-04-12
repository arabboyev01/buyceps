import { useQuery } from '@apollo/client'
import { GET_SINGLE_POKEMON } from '@/pages/api/hello'
import { useRouter } from 'next/router'
import { SinglePage } from '@/src/components/SingleCart/single.style'
import Loader from '@/src/components/Loader'
import SingleDumb from '@/src/components/SingleCart/SingleDumb'

const SingleCart = () => {
    const router = useRouter()
    const {id, name} = router.query

    const {loading, data} = useQuery(GET_SINGLE_POKEMON, {
        variables: {id: id, name: name},
    });
    console.log(data)

    return (
        <SinglePage>
            {loading ? <Loader /> : <SingleDumb data={data?.pokemon} />}
        </SinglePage>
    )
}

export default SingleCart