import React from 'react'
import { ContentWrapper, HomeComponent } from '@/src/components/Home/home.style'
import { HomePageDataType } from '@/types'
import Rendered from '@/src/components/Home/Rendered'
import Loader from '@/src/components/Loader'
import Pagination from '@/src/components/Pagination'

const HomeDumb: React.FC<HomePageDataType> =
    ({
         data,
         loading,
         handleAddPage,
         handleRoutePage,
         indexOfLastPost,
         indexOfFirstPost,
         handleRemovePage,
        disabled
     }) => (
        <HomeComponent>
            {loading ? <Loader/> :
                <>
                    <ContentWrapper>
                        <Rendered
                            data={data}
                            handleRoutePage={handleRoutePage}
                            indexOfLastPost={indexOfLastPost}
                            indexOfFirstPost={indexOfFirstPost}
                        />
                    </ContentWrapper>
                    <Pagination
                        handleAddPage={handleAddPage}
                        handleRemovePage={handleRemovePage}
                        disabled={disabled}
                    />
                </>
            }
        </HomeComponent>
    )
export default HomeDumb;