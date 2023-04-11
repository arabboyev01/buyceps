import React from 'react'
import { ContentWrapper, HomeComponent, LoadMore } from '@/src/components/Home/home.style'
import { HomePageDataType } from '@/types'
import Rendered from '@/src/components/Home/Rendered'
import Loader from '@/src/components/Loader'

const HomeDumb: React.FC<HomePageDataType> = ({data, loading, handleAddPage}) => (
    <HomeComponent>
        <ContentWrapper>
            {loading ? <Loader/> : <Rendered data={data}/>}
        </ContentWrapper>
        {loading ? null : <LoadMore onClick={handleAddPage}>Load more</LoadMore>}
    </HomeComponent>
)
export default HomeDumb;