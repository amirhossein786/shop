import { create } from "zustand";

const useCart = create((set, get) => ({
  items: [],
  invoice: {
    totalprice: 0,
    discount: 0,
    send: 0,
  },
  actions: {
    addToBasket: (payload) => {
      const Exist = get().items.some((_item) => _item.id === payload.id);
      if (Exist) {
        set((oldState) => ({
          invoice: {
            ...oldState.invoice,
            totalprice: oldState.invoice.totalprice + payload.price,
          },
          items: oldState.items.map((_item) =>
            _item.id === payload.id
              ? { ..._item, quantity: _item.quantity + 1 }
              : _item
          ),
        }));
      } else {
        set((oldState) => ({
          invoice: {
            ...oldState.invoice,
            totalprice: oldState.invoice.totalprice + payload.price,
          },
          items: [...oldState.items, { ...payload, quantity: 1 }],
        }));
      }
    },
    removeFromBasket: (payload) => {
      set((oldState) => {
        const shouldRemove = payload.quantity === 1;
        return {
          invoice: {
            ...oldState.invoice,
            totalprice: oldState.invoice.totalprice - payload.price,
          },
          items: shouldRemove
            ? oldState.items.filter((_item) => _item.id !== payload.id)
            : oldState.items.map((_item) =>
                _item.id === payload.id
                  ? { ..._item, quantity: _item.quantity - 1 }
                  : _item
              ),
        };
      });
    },
  },
}));

export default useCart;
