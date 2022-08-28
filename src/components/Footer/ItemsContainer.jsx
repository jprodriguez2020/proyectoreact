import Item from "./Item";
import { ABOUTUS, PRODUCTS, PAYMENTANDSHIPPING, LEGAL } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-6 px-5 py-16 sm:grid-cols-3 lg:grid-cols-4 sm:px-8">
      <Item Links={ ABOUTUS } title="ABOUT US" />
      <Item Links={ PRODUCTS } title="PRODUCTS" />
      <Item Links={ PAYMENTANDSHIPPING } title="PAYMENT AND SHIPPING" />
      <Item Links={ LEGAL } title="LEGAL" />
    </div>
  );
};

export default ItemsContainer;