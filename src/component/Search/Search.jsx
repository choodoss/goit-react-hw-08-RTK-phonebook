import PropTypes from 'prop-types';
import { Box, TextField } from '@mui/material';

export default function Search({ handleFilter, filter }) {
    return (
        <Box maxWidth={400} margin={'0 auto'} sx={{ marginBottom: '1rem' }}>
            <TextField
                sx={{ width: '100%' }}
                name="name"
                autoComplete="on"
                label="Find contact by name"
                value={filter}
                onChange={handleFilter}
                variant="outlined"
            />
        </Box>
    );
}

Search.propTypes = {
    handleFilter: PropTypes.func,
    filter: PropTypes.string
};