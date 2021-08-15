import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright(props) {
    const {style} = props;
    return (
        <Typography variant="body2" color="textSecondary" align="center" style={{padding: 10, ...style}}>
            {'Copyright © '}
            <MuiLink color="inherit" href="https://engineering.purdue.edu/ece">
                Purdue ECE Student Society
            </MuiLink>{' '}
            {' | '}
            <MuiLink color="inherit" href="https://discord.com/">
                Discord
            </MuiLink>{' '}
            {' | '}
            <MuiLink color="inherit" href="https://www.instagram.com/">
                Instgram
            </MuiLink>{' '}
            {new Date().getFullYear()}
        </Typography>
    );
}