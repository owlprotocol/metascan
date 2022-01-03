/**
 * Return the matching path for any search term
 * @param searchTerm search term can be Block number / Block hash / Transaction / Address.
 */
export const getSearchUrlWithTerm = (searchTerm: string) => {
    if (validateTransactionHash(searchTerm)) {
        return `/txn/${searchTerm}/`;
    } else {
        return '/';
    }
};

/**
 * Simple regex test to insure a string is valid ERC20 hash
 * @param string
 * @returns boolean indicates if hash is valid or not
 */
export const validateTransactionHash = (string: string) => {
    const regexExp = /^0x|[a-f0-9]{64}$/gi;
    return regexExp.test(string);
};
