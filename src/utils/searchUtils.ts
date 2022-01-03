import Web3 from 'web3';

/**
 * Return the matching path for any search term
 * @param searchTerm search term can be Block number / Block hash / Transaction / Address.
 */
export const getSearchUrlWithTerm = (searchTerm: string) => {
    if (validateBlockNumber(searchTerm)) {
        return `/block/${searchTerm}/`;
    } else if (validateAddress(searchTerm)) {
        return `/address/${searchTerm}`;
    } else if (validateTransactionHash(searchTerm)) {
        return `/txn/${searchTerm}/`;
    } else {
        return '/';
    }
};

/**
 * Regex test to check if search term is positive number (including zero)
 * @param string
 * @returns boolean indicating if it is a positive number or not
 */
export const validateBlockNumber = (string: string) => {
    const regexExp = /^[0-9]*$/;
    return regexExp.test(string);
};

/**
 * Regex test to check if search term is a valid ethereum address (including zero)
 * @param string
 * @returns a boolean of whether the term is an address or not
 */
export const validateAddress = (string: string) => {
    return Web3.utils.isAddress(string);
};

/**
 * Simple regex test to ensure a string is valid ERC20 hash
 * @param string
 * @returns boolean indicates if hash is valid or not
 */
export const validateTransactionHash = (string: string) => {
    const regexExp = /^0x|[a-f0-9]{64}$/gi;
    return regexExp.test(string);
};
