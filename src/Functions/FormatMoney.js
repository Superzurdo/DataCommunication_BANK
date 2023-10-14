const FormatMoney = (number) => {
    const formatedQuantity = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0, // Optional: You can adjust de number of decimal figures
    }).format(number);
    return formatedQuantity;
};

export default FormatMoney;