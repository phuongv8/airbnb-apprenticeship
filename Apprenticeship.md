# Code highlight

Below is the code snippet from Cart.js. This code generate a dropdown menu in a form. When a user changes the value in the dropdown menu, a callback function will be triggered. This updates the item's quantity in cart with the new value, calculates the change in quantity, then updates the cart total and the cart item count in the header.

I chose to highlight this code because it was my first React project. I was the only one in my cohort using a dropdown menu while others used increment. Everyone suggested me to use increment instead, but I want to keep my dropdown menu for my users. Even though this is not the most optimized way, I was glad to figure out how to do it before my presentation.

```js
<Form.Select
  size="md"
  defaultValue={item.quantityInCart}
  onChange={e => {
    let qty = e.target.value;
    let changeInQty = qty - item.quantityInCart;
    item.quantityInCart = qty;
    props.setTotal(props.total + item.price * changeInQty);
    props.setItemCount(props.itemCount + changeInQty);
  }}
>
  {Array.from({ length: item.quantity }, (_, i) => i + 1).map(x => (
    <option key={x} value={x}>
      {x}
    </option>
  ))}
</Form.Select>
```
