import { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import composeHooks from 'react-hooks-compose';
import { getSearchUrlWithTerm } from '../../utils/searchUtils';
import { Search } from '../../svg';
import { GradBorderWrapper, Wrapper } from './style';

const PLACEHOLDER_TEXT = 'Search for transactions or address'; //'Search for transactions, addresses, blocks, embedded text data....';

const useSearchBarHook = () => {
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState('');

    const submitSearch = useCallback(() => {
        if (!searchTerm) return;
        const searchUrlWithTerm = getSearchUrlWithTerm(searchTerm);
        history.push(searchUrlWithTerm);
    }, [history, searchTerm]);

    const handleInputKeyPress = useCallback(
        (event: any) => {
            if (event.which === 13) submitSearch();
        },
        [submitSearch],
    );

    return {
        searchTerm,
        setSearchTerm,
        submitSearch,
        handleInputKeyPress,
    };
};

export interface PresenterProps {
    searchTerm?: string;
    setSearchTerm?: (t: any) => any;
    submitSearch?: (t: any) => any;
    handleInputKeyPress?: (t: any) => any;
}

export const SearchBarPresenter = ({
    searchTerm,
    setSearchTerm = (t) => console.debug(`Set search ${t}`),
    submitSearch = (t) => console.debug(`Submit ${t}`),
    handleInputKeyPress,
}: PresenterProps) => {
    return (
        <GradBorderWrapper>
            <Wrapper onSubmit={submitSearch}>
                <input
                    placeholder={PLACEHOLDER_TEXT}
                    value={searchTerm}
                    onChange={({ target }) => setSearchTerm(target.value)}
                    autoComplete="false"
                    onKeyPress={handleInputKeyPress}
                />

                <div>
                    <button className="btn-search" onClick={submitSearch}>
                        <Search />
                    </button>
                </div>
            </Wrapper>
        </GradBorderWrapper>
    );
};

const SearchBarContainer = composeHooks(() => ({
    useSearchBar: () => useSearchBarHook(),
}))(SearchBarPresenter) as (props: any) => JSX.Element;

export default SearchBarContainer;
