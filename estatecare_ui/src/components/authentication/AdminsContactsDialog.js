import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { useTheme } from '@mui/material/styles';
import Link from '@mui/material/Link';

const AdminsContactsDialog = ({open,setOpen}) => {

    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = useTheme();

  return (
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle 
            sx={{ 
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText 
            }}
        >
        Contact Admins
      </DialogTitle>
        <DialogContent 
            sx={{ 
                backgroundColor: theme.palette.background.default 
            }}
        >
        {/* Add the contact information here */}
            <p>Email: <Link href="mailto:admin@example.com">admin@example.com</Link></p>
            <p>Owner Phone: (123) 456-7890</p>
      </DialogContent>
    </Dialog>
  );
};

export default AdminsContactsDialog;