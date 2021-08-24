import Head from "next/head";
import {AppBar, Toolbar, Typography, Container} from "@material-ui/core";

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>Next A-zona</title>
            </Head>
            <AppBar position={'static'}>
                <Toolbar>
                    <Typography>
                        A-zona
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                {children}
            </Container>
            <footer>
                <Typography>
                    All right reserved. Next A-zona
                </Typography>
            </footer>
        </div>
    );
};

export default Layout;
