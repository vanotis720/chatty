export const formatDateToLocale = (date) => {
    var options = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };
    return new Date(date).toLocaleDateString('fr-FR', options);
}

export const formatDate = (date) => {
    const creation = new Date(date);
    return creation.toLocaleDateString();
}

export const formatName = (name) => {
    return (name.length > 1) ? name[1] : null;
}

export const formatMoney = (amount, currency = 'CDF', locale = 'fr-CD') => {
    return amount ? amount.toLocaleString(locale, {
        style: 'currency',
        currency: currency
    }) : amount;
}