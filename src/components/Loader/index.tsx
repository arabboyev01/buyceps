import { Puff } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Puff
            height="80"
            width="80"
            radius={1}
            color="#ccc"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    )
}
export default Loader