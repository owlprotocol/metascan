import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import composeHooks from 'react-hooks-compose';
import { getSearchUrlWithTerm } from '../../utils/searchUtils';
import { Search } from '../../svg';
import { GradBorderWrapper, Wrapper } from './style';

const PLACEHOLDER_TEXT = 'Search for transactions or address'; //'Search for transactions, addresses, blocks, embedded text data....';

const useSearchBarHook = () => {
    const history = useHistory();
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputKeyPress = (event: any) => {
        if (event.which === 13) {
            setSearchTerm('');
            submitSearch();
        }
    };

    const submitSearch = () => {
        if (!searchTerm) return;

        const searchUrlWithTerm = getSearchUrlWithTerm(searchTerm);
        history.push(searchUrlWithTerm);
    };

    return {
        searchTerm,
        setSearchTerm,
        submitSearch,
        handleInputKeyPress,
    };
};

export interface PresenterProps {
    searchTerm?: string;
    setSearchTerm?: (t: any) => undefined;
    submitSearch?: (t: any) => undefined;
    handleInputKeyPress?: (t: any) => undefined;
}

const SearchBarPresenter = ({
    searchTerm,
    setSearchTerm = (t) => t,
    submitSearch,
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
