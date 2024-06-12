import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const AddTenant = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleAddTenant = () => {
        // Add tenant logic here
        handleClose();
    };

    return (
        <>
            <IconButton onClick={handleOpen}>
                <AddCircleIcon />
            </IconButton>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add Tenant</DialogTitle>
                <DialogContent>
                    {/* Add form fields for tenant details here */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddTenant} variant="contained" color="primary">Add</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AddTenant;