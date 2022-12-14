import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon, PlusIcon, MinusIcon } from '@heroicons/react/outline';
import { useDispatchCart } from './Cart';

export default function CartModal({ cart, open, setOpen }) {
  const dispatch = useDispatchCart();

  const handleAddToCart = (product) => {
    dispatch({ type: 'ADD_ITEM_TO_CART', payload: product });
  };

  const handleRemoveSingleItem = (product) => {
    dispatch({ type: 'REMOVE_SINGLE_ITEM_FROM_CART', payload: product });
  };

  const handleRemoveFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const handleBuyNow = () => {
    dispatch({ type: 'CLEAR_CART' });
    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="fixed inset-y-0 right-0 flex max-w-full pl-10 pointer-events-none">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md pointer-events-auto">
                  <div className="flex flex-col h-full overflow-y-scroll shadow-xl bg-themeLight">
                    <div className="flex-1 px-2 py-6 overflow-y-auto sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="flex items-center ml-3 h-7">
                          <button
                            type="button"
                            className="p-2 -m-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="w-6 h-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200">
                            {cart.cartItems.length > 0 ? (
                              cart.cartItems.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.description}
                                      className="object-cover object-center w-full h-full"
                                    />
                                  </div>

                                  <div className="flex flex-col flex-1 ml-2">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h4>{product.name}</h4>
                                        <p className="ml-2">${product.price}</p>
                                      </div>
                                    </div>
                                    <div className="flex items-end justify-between flex-1 text-sm">
                                      <button
                                        onClick={() =>
                                          handleRemoveSingleItem(product)
                                        }
                                      >
                                        <MinusIcon
                                          className="w-6 h-6"
                                          aria-hidden="true"
                                        />
                                      </button>
                                      <p className="text-gray-500">
                                        Qty {product.quantity}
                                      </p>
                                      <button
                                        onClick={() => handleAddToCart(product)}
                                      >
                                        <PlusIcon
                                          className="w-6 h-6"
                                          aria-hidden="true"
                                        />
                                      </button>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                          onClick={() =>
                                            handleRemoveFromCart(product)
                                          }
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <p>No producst yet</p>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="px-4 py-6 border-t border-gray-200 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$ {cart.cartTotal}</p>
                        <p>Total Items</p>
                        <p>{cart.totalItems}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="flex justify-center align-middle">
                        <button
                          className="button font-poppins my-3 py-1.5 px-14 shadow-xl"
                          onClick={handleBuyNow}
                        >
                          BUY NOW
                        </button>
                      </div>
                      <div className="flex justify-center mt-6 text-sm text-center text-gray-500">
                        <button
                          type="button"
                          className="font-medium text-lg hover:text-indigo-500"
                          onClick={() => setOpen(false)}
                        >
                          or Continue Shopping
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
