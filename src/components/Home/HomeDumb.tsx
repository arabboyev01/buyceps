import React from 'react'
import { ContentWrapper, HomeComponent, LoadMore } from '@/src/components/Home/home.style'
import { HomePageDataType } from '@/types'
import Rendered from '@/src/components/Home/Rendered'
import Loader from '@/src/components/Loader'

const HomeDumb: React.FC<HomePageDataType> = ({data, loading, handleAddPage, handleRoutePage}) => (
    <HomeComponent>
        {loading ? <Loader/> :
            <>
                <ContentWrapper>
                    <Rendered data={data} handleRoutePage={handleRoutePage}/>
                </ContentWrapper>
                <LoadMore onClick={handleAddPage}>Load more</LoadMore>
            </>
        }
    </HomeComponent>
)
export default HomeDumb;