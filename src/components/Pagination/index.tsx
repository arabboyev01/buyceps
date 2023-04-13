import { PaginateButton, PaginationWrapper } from '@/src/components/Pagination/style'

const Pagination = ({handleAddPage, handleRemovePage, disabled}: any) => {

    return(
        <PaginationWrapper>
            <PaginateButton disabled={disabled} onClick={handleRemovePage}>Previous</PaginateButton>
            <PaginateButton onClick={handleAddPage}>Next</PaginateButton>
        </PaginationWrapper>
    )
}
export default Pagination