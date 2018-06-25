exports.add = (cart, item) => {
    for (i = 0; i < cart.length; i++) {
        if (cart[i].ProId === item.ProId) {
            cart[i].Quantity += item.Quantity;
            return;
        }
    }

    cart.push(item);
}

exports.decrease = (cart, item) => {
    for (i = 0; i < cart.length; i++) {
        if (cart[i].ProId === item.ProId) {
            if(cart[i].Quantity - item.Quantity >= 1)
              cart[i].Quantity -= item.Quantity;
            return;
        }
    }
}

exports.remove = (cart, proId) => {
    for (i = 0; i < cart.length; i++) {
        if (proId === cart[i].ProId) {
            cart.splice(i, 1);
            return;
        }
    }
}
