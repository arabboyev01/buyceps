import { useQuery } from '@apollo/client'
import { GET_LOCATIONS } from '@/pages/api/hello'
import HomeDumb from '@/src/components/Home/HomeDumb'

const HomePage = () => {

    const {loading, error, data} = useQuery(GET_LOCATIONS, {
        variables: {first: 20},
    });

    return <HomeDumb data={data} loading={loading} error={error}/>

}
export default HomePage;