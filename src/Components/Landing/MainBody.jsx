import React from 'react';
import usefetchProducts from '../../hooks/useFetchProducts';
import { Box, Grid, Sidebar, Header, Footer, Main, Carousel, Image } from 'grommet';

const MainBody = () => {

    return (
        <Box>
            <Main pad="large">
                <Grid
                    pad="small"
                    responsive={true}
                    align="center"
                    alignContent="between"
                >
                    <Box direction="row" flex overflow={{ horizontal: 'hidden' }}>
                        <Box flex align="center" justify="center">
                            <Box>
                                <Carousel>
                                    <Image fit="cover" />
                                </Carousel>
                            </Box>
                            <Box></Box>
                            <Box></Box>
                        </Box>
                    </Box>
                </Grid>
            </Main>
        </Box>
    )
};

export default MainBody;