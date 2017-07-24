const normalizeMenu = rawPayload => {
    const { data: { pizzaSizes } } = rawPayload;
    let normalizedMenu = [];

    pizzaSizes.forEach(pizza => {
        const { name, maxToppings, basePrice } = pizza;
        let toppings = [];

        pizza.toppings.forEach(entry => {
            let normalizedTopping = { ...entry.topping };
            normalizedTopping.defaultSelected = entry.defaultSelected;
            toppings.push(normalizedTopping);
        });

        normalizedMenu.push({
            name,
            maxToppings,
            basePrice,
            toppings,
        });
    });

    return normalizedMenu;
};


export {
    normalizeMenu,
}