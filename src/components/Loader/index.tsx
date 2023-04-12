import { Puff } from 'react-loader-spinner'

const Loader = () => {
    return (
        <Puff
            height="50"
            width="50"
            radius={1}
            color="#ccc"
            ariaLabel="puff-loading"
            wrapperClass=""
            visible={true}
            wrapperStyle={{position: 'absolute', top: '45%', left: "48%", zIndex: '1'}}
        />
    )
}
export default Loader