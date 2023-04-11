import React from 'react'
import { HomeComponent } from '@/src/components/Home/home.style'
import { HomePageDataType } from '@/types'
import Rendered from '@/src/components/Home/Rendered'

const HomeDumb: React.FC<HomePageDataType> = ({data, loading}) => (
    <HomeComponent>
        {loading ? 'Loading...' : <Rendered data={data}/>}
    </HomeComponent>
)
export default HomeDumb;