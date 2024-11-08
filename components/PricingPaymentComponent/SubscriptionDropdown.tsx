import React, { useState } from "react";
import { MenuItem, Menu, Button } from "@mui/material";
import { ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";
import { openSans } from "@/app/fonts/fonts";

const SubscriptionDropdown = () => {
  const [anchorEl, setAncholEl] = useState<null | HTMLElement>(null);
  const [subscriptionType, setSubscriptionType] = useState<string>(
    "Monthly Subscription"
  );

  //   -------- open menu --------
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAncholEl(event.currentTarget);
  };

  // -------- close menu --------
  const handleClose = () => {
    setAncholEl(null);
  };

  const handleMenuItemClick = (type: string) => {
    setSubscriptionType(type);
    handleClose();
  };

  const isOpen = Boolean(anchorEl);
  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        variant="text"
        onClick={handleClick}
        endIcon={
          isOpen ? (
            <ArrowUp01Icon color="#000000" />
          ) : (
            <ArrowDown01Icon color="#000000" />
          )
        }
        className={`${openSans.className} text-[var(--primary-text-color)] text-xl font-semibold p-0`}
        sx={{ textTransform: "none" }}
      >
        {subscriptionType}
      </Button>
      <Menu
        id="subscription-menu"
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}

      >
        <MenuItem onClick={() => handleMenuItemClick("Monthly Subscription")} className={`${openSans.className}`}>
          Monthly Subscription
        </MenuItem>
        <MenuItem onClick={() => handleMenuItemClick("Annual Subscription")} className={`${openSans.className}`}>
          Annual Subscription
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SubscriptionDropdown;
