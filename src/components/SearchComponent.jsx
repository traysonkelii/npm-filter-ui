import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as types from '../redux/types'
import { PackageRow } from './PackageRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Container, Divider, Grid, Typography } from '@material-ui/core';

const SearchComponent = () => {
    const dispatch = useDispatch();
    const results = useSelector(state => state.search.results);
    const loading = useSelector(state => state.search.loading);
    const error = useSelector(state => state.search.error);
    const queryString = useSelector(state => state.search.queryString);

    const textInput = React.createRef();

    const handleClick = () => {
        dispatch({ type: types.SEARCH_REQUESTED, queryString: queryString })
    }

    const handleText = (event) => {
        dispatch({ type: types.UPDATE_QUERY_STRING, queryString: event.target.value });
    }

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            handleClick();
        }
    }

    return (
        <Container maxWidth="md">
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography>NPM PACKAGE FINDER</Typography>
                </Grid>
                <Grid item xs={12} md={10}>
                    <TextField
                        ref={textInput}
                        onChange={handleText}
                        onKeyDown={handleKeyDown}
                        fullWidth
                        m={1}
                        placeholder="Enter package here..." />
                </Grid>
                <Grid item xs={12} md={1}>
                    <Button onClick={handleClick} variant="contained" color="primary">search</Button>
                </Grid>
                {results.length > 0 &&
                    <Grid item xs={12}>
                        <Typography>
                            Found {results.length} packages
                    </Typography>
                    </Grid>}

                <Grid item xs={12}>
                    {loading && <Typography>loading...</Typography>}
                    {results.length > 0 && results.map((row, index) => (
                        <>
                            <PackageRow key={index} name={row.package.name} description={row.package.description}
                                link={row.package.links.homepage} />
                            <Divider></Divider>
                        </>
                    ))}
                    {error && <p>Errors: {error}</p>}
                    {results.length === 0 && !loading && <Typography>No results</Typography>}
                </Grid>
            </Grid>
        </Container>
    )
}

export default SearchComponent