import React, { useEffect, useState } from "react";
import { MenuItem, Menu, Button } from "@mui/material";
import { ArrowDown01Icon, ArrowUp01Icon } from "hugeicons-react";
import { inter, openSans } from "@/app/fonts/fonts";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { RootState } from "@/store/store";
import { setPlan } from "@/store/slices/planSlice";

/**
 *
 * TODO: Functionality for monthly and annual payment
 */

interface SubscriptionPrice {
  monthly: string;
  annual: string;
}
const subscriptionPrice : SubscriptionPrice = {
  monthly: "5000",
  annual: "6000"
}

const SubscriptionDropdown: React.FC = () => {
  const [anchorEl, setAncholEl] = useState<null | HTMLElement>(null);
  
  const { selectedPlan, price, subscription } = useAppSelector((state: RootState) => state.plan);
  const dispatch = useAppDispatch();
  const [currentSubscriptionPrice, setCurrentSubscriptionPrice] = useState(subscriptionPrice);

  //   -------- open menu --------
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAncholEl(event.currentTarget);
  };

  // -------- close menu --------
  const handleClose = () => {
    setAncholEl(null);
  };

  useEffect(()=>{
    if (selectedPlan === "Basic"){
      setCurrentSubscriptionPrice({
        monthly: "5000",
        annual: "60000"
      })
    }else if (selectedPlan === "Premium"){
      setCurrentSubscriptionPrice({
        monthly: "10000",
        annual: "120000"
      })
    }else {
      setCurrentSubscriptionPrice({
        monthly: "15000",
        annual: "180000"
      })
    }

  }, [setCurrentSubscriptionPrice, selectedPlan])


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
          {subscription}
        </Button>
        <Menu
          id="subscription-menu"
          anchorEl={anchorEl}
          open={isOpen}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() =>  dispatch(setPlan({ plan:selectedPlan, price:currentSubscriptionPrice.monthly, subscription: "Monthly" })) }
            className={`${openSans.className} px-2.5 py-1.5 text-[0.9375rem] hover:bg-[var(--border)] hover:rounded-[0.3125rem] w-[14.8125rem]`}
          >
            Monthly Subscription
          </MenuItem>
          <MenuItem
            onClick={() => dispatch(setPlan({ plan:selectedPlan, price:currentSubscriptionPrice.annual, subscription: "Annual" })) }
            className={`${openSans.className} px-2.5 py-1.5 text-[0.9375rem] w-[14.8125rem] hover:bg-[var(--border)] hover:rounded-[0.3125rem]`}
          >
            Annual Subscription
          </MenuItem>
        </Menu>
      </div>
      <p className="text-xl font-semibold">₦&nbsp;{price}</p>
    </div>
  );
};

export default SubscriptionDropdown;
