import React, { useEffect, useState } from "react";
import { MenuItem, Menu, Button } from "@mui/material";
import { ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";
import { inter, openSans } from "@/app/fonts/fonts";

/**
 *
 * TODO: Functionality for monthly and annual payment
 */

interface SubscriptionDropdownProps {
  subscriptionPrice: string;
  setSubscriptionPrice: (price: string) => void;
}

const SubscriptionDropdown: React.FC<SubscriptionDropdownProps> = ({
  subscriptionPrice,
  setSubscriptionPrice,
}) => {
  const [anchorEl, setAncholEl] = useState<null | HTMLElement>(null);
  const [subscriptionType, setSubscriptionType] = useState<string>(
    "Monthly Subscription"
  );
  // const [subscriptionPrice, setSubscriptionPrice] = useState<string>('');

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

  // -------- set subscription price --------
  useEffect(() => {
    if (subscriptionType === "Monthly Subscription") {
      setSubscriptionPrice("5,000");
    } else {
      setSubscriptionPrice("10,000");
    }
  });

  const isOpen = Boolean(anchorEl);
  return (
    <div className="flex items-center justify-between">
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
          <MenuItem
            onClick={() => handleMenuItemClick("Monthly Subscription")}
            className={`${openSans.className} px-2.5 py-1.5 text-[0.9375rem] hover:bg-[var(--border)] hover:rounded-[0.3125rem] w-[14.8125rem]`}
          >
            Monthly Subscription
          </MenuItem>
          <MenuItem
            onClick={() => handleMenuItemClick("Annual Subscription")}
            className={`${openSans.className} px-2.5 py-1.5 text-[0.9375rem] w-[14.8125rem] hover:bg-[var(--border)] hover:rounded-[0.3125rem]`}
          >
            Annual Subscription
          </MenuItem>
        </Menu>
      </div>
      <p className="text-xl font-semibold">₦&nbsp;{subscriptionPrice}</p>
    </div>
  );
};

export default SubscriptionDropdown;
