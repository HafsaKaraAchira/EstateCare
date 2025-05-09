import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../utils/useAuth';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Typography from '@mui/material/Typography';
import { Paper, Alert } from '@mui/material'; // Import the Alert component
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import AdminsContactsDialog from './AdminsContactsDialog.js';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false); // State to manage checkbox
    const navigate = useNavigate();
    const { login, loginError } = useAuth();
    // Add state to control the visibility of the ContactAdminsDialog
    const [openContactDialog, setOpenContactDialog] = useState(false);

    const handleOpenContactDialog = () => {
        setOpenContactDialog(true);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await login(email, password, rememberMe)
                .then(() => {
                    if (!loginError)
                        navigate('/dashboard');
                });
        } catch (err) {
            console.error('Login failed', err);
        }
    };

    return (
        <Grid item xs='auto' sm='auto' md='auto' component={Paper} elevation={6}
            sx={{
                backgroundColor: 'white',
                padding: '7% 10%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                maxHeight: '100%',
                height: 'fit-content',
                maxWidth: '90%',
                borderRadius: '1rem',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '0.5rem',
                }}
            >
                <Avatar
                    sx={{
                        mb: 5,
                        bgcolor: 'secondary.main',
                        width: 56,
                        height: 56,
                    }}
                >
                    <HomeOutlinedIcon
                        sx={{
                            width: '100%',
                            height: '100%',
                        }}
                    />
                </Avatar>
                <Typography component="h1" variant="h4" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
                    Hi, Welcome back!
                </Typography>
                <Typography variant="subtitle2">Enter your credentials to access your personal dashboard</Typography>
                {loginError && <Alert
                    severity="error"
                    sx={{
                        bgcolor: 'background.paper', // Use theme colors
                        border: '1px solid',
                        borderColor: 'primary.main', // Use theme colors
                        mb: 2, // Margin bottom
                        // Add more styles as needed
                    }}
                >
                    Error: {loginError.message}
                </Alert>}
                <Box component="form" noValidate onSubmit={handleLogin} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{ marginBottom: '1rem' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle />
                                </InputAdornment>
                            )
                        }}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{ marginBottom: '1rem' }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon />
                                </InputAdornment>
                            )
                        }}
                    />
                    <Grid container
                        sx={{
                            mt: '0.5rem',
                            alignItems: "baseline",
                        }}
                    >
                        <Grid item xs>
                            <FormControlLabel
                                control={<Checkbox checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    value="remember" color="secondary"
                                />
                                }
                                label="Keep me logged in"
                            />
                        </Grid>
                        <Grid item >
                            <Link href="#" variant="body1" sx={{ textDecoration: 'none', fontWeight: 'bold', display: 'block', '&:hover': { textDecoration: 'underline' } }}>
                                Forgot password?
                            </Link>
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 3 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item>
                            <Link href="#" variant="body2"
                                onClick={handleOpenContactDialog}
                                sx={{
                                    textDecoration: 'none',
                                    fontWeight: 'bold',
                                    display: 'block',
                                    '&:hover': { textDecoration: 'underline' }
                                }}
                            >
                                Don't have an account? Contact admins
                            </Link>
                        </Grid>
                    </Grid>
                    <AdminsContactsDialog open={openContactDialog} setOpen={setOpenContactDialog} />
                </Box>
            </Box>
        </Grid>
    );
};

export default LoginForm;