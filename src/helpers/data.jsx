const normalizeMenu = (rawPayload) => {
    const { data: { pizzaSizes } } = rawPayload;
    const normalizedMenu = [];

    pizzaSizes.forEach((pizza) => {
        const { name, maxToppings, basePrice } = pizza;
        const toppings = [];

        pizza.toppings.forEach((entry) => {
            const normalizedTopping = { ...entry.topping };
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
};
