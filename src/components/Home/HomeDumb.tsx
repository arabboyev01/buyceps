import React from 'react'
import { ContentWrapper, HomeComponent } from '@/src/components/Home/home.style'
import { HomePageDataType } from '@/types'
import Rendered from '@/src/components/Home/Rendered'
import PaginationComponent from '@/src/components/Pagination'

const HomeDumb: React.FC<HomePageDataType> = ({data, loading}) => (
    <HomeComponent>
        <ContentWrapper>
            {loading ? 'Loading...' : <Rendered data={data}/>}
        </ContentWrapper>
        <PaginationComponent/>
    </HomeComponent>
)
export default HomeDumb;