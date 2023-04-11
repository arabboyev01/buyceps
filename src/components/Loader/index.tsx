import { Puff } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Puff
            height="80"
            width="80"
            radius={1}
            color="#ccc"
            ariaLabel="puff-loading"
            wrapperClass=""
            visible={true}
            wrapperStyle={{position: 'absolute', top: '45%', left: "47%"}}
        />
    )
}
export default Loader