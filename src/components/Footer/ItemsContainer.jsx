import Item from "./Item";
import { ABOUTUS, PRODUCTS, PAYMENTANDSHIPPING, LEGAL } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-12 px-12 py-8 sm:grid-cols-1 lg:grid-cols-4 sm:px-8 text-themeYellow">
      <Item Links={ ABOUTUS } title="ABOUT US" />
      <Item Links={ PRODUCTS } title="PRODUCTS" />
      <Item Links={ PAYMENTANDSHIPPING } title="PAYMENT AND SHIPPING" />
      <Item Links={ LEGAL } title="LEGAL" />
    </div>
  );
};

export default ItemsContainer;