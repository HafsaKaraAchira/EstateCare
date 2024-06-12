import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const FilterableSearchBar = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        // Perform search logic here
        console.log('Searching for:', searchText);
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
                <TextField
                    label="Search"
                    variant="outlined"
                    fullWidth
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Button variant="contained" color="primary" onClick={handleSearch}>
                    Search
                </Button>
            </Grid>
        </Grid>
    );
};

export default FilterableSearchBar;