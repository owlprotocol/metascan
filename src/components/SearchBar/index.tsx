import styled from 'styled-components';

const GradBorderWrapper = styled.div`
    background: linear-gradient(269.68deg, #00f3b9 8.63%, #2091f9 50.28%);
    width: 100%;
    height: 64px;
    border-radius: 10px;
    padding: 2px;
`;

const Wrapper = styled.div`
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 101%;
    height: 60px;

    > div {
        display: flex;
    }

    button {
        display: inline-block;
        width: 75px;
        height: 60px;
    }

    .btn-menu {
        background-color: #fff;
        border-radius: 10px 0 0 10px;
        flex: 1 0 75px;
    }

    .btn-camera {
        width: 96px;
        background-color: #fff;
    }

    .btn-search {
        background-color: #008392;
        border-radius: 10px;
        position: relative;
        right: 9px;
    }

    input {
        height: 60px;
        width: 100%;
        padding: 0 0 0 12px;
        border: 0;
        border-left: 1px solid #2091f9;
    }
`;

const PLACEHOLDER_TEXT = 'Search for transactions, addresses, blocks, embedded text data....';

const SearchBar = () => {
    const handleChange = ({ target }: any) => {
        console.log(target.value);
    };

    return (
        <GradBorderWrapper>
            <Wrapper>
                <button className="btn-menu">
                    <svg width="30" height="19" viewBox="0 0 30 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 17.074C0 16.7425 0.131696 16.4245 0.366117 16.1901C0.600537 15.9557 0.918479 15.824 1.25 15.824H8.75C9.08152 15.824 9.39946 15.9557 9.63388 16.1901C9.8683 16.4245 10 16.7425 10 17.074C10 17.4055 9.8683 17.7234 9.63388 17.9579C9.39946 18.1923 9.08152 18.324 8.75 18.324H1.25C0.918479 18.324 0.600537 18.1923 0.366117 17.9579C0.131696 17.7234 0 17.4055 0 17.074ZM0 9.57397C0 9.24245 0.131696 8.92451 0.366117 8.69009C0.600537 8.45567 0.918479 8.32397 1.25 8.32397H18.75C19.0815 8.32397 19.3995 8.45567 19.6339 8.69009C19.8683 8.92451 20 9.24245 20 9.57397C20 9.9055 19.8683 10.2234 19.6339 10.4579C19.3995 10.6923 19.0815 10.824 18.75 10.824H1.25C0.918479 10.824 0.600537 10.6923 0.366117 10.4579C0.131696 10.2234 0 9.9055 0 9.57397ZM0 2.07397C0 1.74245 0.131696 1.42451 0.366117 1.19009C0.600537 0.955671 0.918479 0.823975 1.25 0.823975H28.75C29.0815 0.823975 29.3995 0.955671 29.6339 1.19009C29.8683 1.42451 30 1.74245 30 2.07397C30 2.4055 29.8683 2.72344 29.6339 2.95786C29.3995 3.19228 29.0815 3.32397 28.75 3.32397H1.25C0.918479 3.32397 0.600537 3.19228 0.366117 2.95786C0.131696 2.72344 0 2.4055 0 2.07397Z"
                            fill="black"
                            fillOpacity="0.61"
                        />
                    </svg>
                </button>

                <input placeholder={PLACEHOLDER_TEXT} onChange={handleChange} />

                <div>
                    <button className="btn-camera">
                        <svg width="29" height="27" viewBox="0 0 29 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5108 0.719971C18.0612 0.719927 18.6021 0.863705 19.0798 1.13706C19.5576 1.41042 19.9556 1.80386 20.2345 2.27841L21.3774 4.22576H24.2851C24.8843 4.22576 25.4776 4.34378 26.0313 4.5731C26.5849 4.80241 27.0879 5.13852 27.5116 5.56223C27.9353 5.98594 28.2714 6.48897 28.5007 7.04257C28.73 7.59618 28.8481 8.18954 28.8481 8.78876V22.1268C28.8481 22.726 28.73 23.3193 28.5007 23.8729C28.2714 24.4266 27.9353 24.9296 27.5116 25.3533C27.0879 25.777 26.5849 26.1131 26.0313 26.3424C25.4776 26.5717 24.8843 26.6898 24.2851 26.6898H5.33107C4.12088 26.6898 2.96027 26.209 2.10454 25.3533C1.24881 24.4976 0.768066 23.3369 0.768066 22.1268V8.78876C0.768066 7.57858 1.24881 6.41796 2.10454 5.56223C2.96027 4.7065 4.12088 4.22576 5.33107 4.22576H8.25139L9.47989 2.22646C9.76235 1.76626 10.1581 1.38614 10.6293 1.12241C11.1005 0.858668 11.6314 0.720114 12.1714 0.719971H17.5108ZM17.5108 2.82597H12.1714C12.0177 2.8261 11.8659 2.85984 11.7267 2.92484C11.5875 2.98985 11.4642 3.08453 11.3655 3.20224L11.2742 3.3286L9.73963 5.82772C9.64553 5.98121 9.51365 6.10801 9.35658 6.19601C9.19951 6.284 9.02251 6.33026 8.84247 6.33036H5.33247C5.00958 6.33017 4.68981 6.39363 4.39146 6.51711C4.09311 6.64059 3.82203 6.82167 3.5937 7.04999C3.36538 7.27831 3.18431 7.5494 3.06083 7.84775C2.93734 8.1461 2.87388 8.46587 2.87407 8.78876V22.1268C2.87407 23.483 3.9748 24.5838 5.33107 24.5838H24.2851C24.9367 24.5838 25.5617 24.3249 26.0224 23.8641C26.4832 23.4033 26.7421 22.7784 26.7421 22.1268V8.78876C26.7421 8.13712 26.4832 7.51218 26.0224 7.0514C25.5617 6.59062 24.9367 6.33176 24.2851 6.33176H20.7751C20.5915 6.33186 20.4111 6.28397 20.2518 6.19285C20.0924 6.10172 19.9597 5.97053 19.8667 5.81228L18.4178 3.34545C18.3249 3.1874 18.1923 3.05634 18.0333 2.96523C17.8742 2.87412 17.6941 2.82612 17.5108 2.82597ZM14.8081 8.43776C16.4837 8.43776 18.0907 9.1034 19.2756 10.2883C20.4604 11.4731 21.1261 13.0801 21.1261 14.7558C21.1261 16.4314 20.4604 18.0384 19.2756 19.2233C18.0907 20.4081 16.4837 21.0738 14.8081 21.0738C13.1324 21.0738 11.5254 20.4081 10.3406 19.2233C9.15571 18.0384 8.49007 16.4314 8.49007 14.7558C8.49007 13.0801 9.15571 11.4731 10.3406 10.2883C11.5254 9.1034 13.1324 8.43776 14.8081 8.43776ZM14.8081 10.5438C14.2549 10.5438 13.7072 10.6527 13.1962 10.8644C12.6852 11.0761 12.2209 11.3863 11.8297 11.7774C11.4386 12.1685 11.1284 12.6329 10.9167 13.1439C10.705 13.6549 10.5961 14.2026 10.5961 14.7558C10.5961 15.3089 10.705 15.8566 10.9167 16.3676C11.1284 16.8786 11.4386 17.343 11.8297 17.7341C12.2209 18.1252 12.6852 18.4355 13.1962 18.6471C13.7072 18.8588 14.2549 18.9678 14.8081 18.9678C15.9252 18.9678 16.9965 18.524 17.7864 17.7341C18.5763 16.9442 19.0201 15.8729 19.0201 14.7558C19.0201 13.6387 18.5763 12.5673 17.7864 11.7774C16.9965 10.9875 15.9252 10.5438 14.8081 10.5438Z"
                                fill="black"
                                fillOpacity="0.61"
                            />
                        </svg>
                    </button>
                    <button className="btn-search">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M23.166 22.0616L18.425 17.3206C20.0993 15.3267 20.9392 12.7635 20.7696 10.1654C20.6 7.56736 19.434 5.13506 17.5148 3.37573C15.5956 1.6164 13.0713 0.665865 10.4683 0.722351C7.86535 0.778838 5.38465 1.83798 3.54356 3.67891C1.70247 5.51985 0.643101 8.00044 0.586385 10.6034C0.529668 13.2064 1.47998 15.7308 3.23914 17.6501C4.9983 19.5695 7.4305 20.7357 10.0285 20.9055C12.6266 21.0753 15.1899 20.2357 17.1839 18.5616L21.925 23.3026C22.0895 23.4672 22.3127 23.5596 22.5455 23.5596C22.7782 23.5596 23.0014 23.4672 23.166 23.3026C23.3305 23.1381 23.423 22.9149 23.423 22.6821C23.423 22.4494 23.3305 22.2262 23.166 22.0616ZM2.36361 10.8358C2.36361 9.18701 2.85252 7.57528 3.76852 6.20439C4.68452 4.8335 5.98647 3.76502 7.50972 3.13407C9.03297 2.50312 10.7091 2.33804 12.3262 2.65969C13.9433 2.98135 15.4286 3.7753 16.5945 4.94115C17.7603 6.10699 18.5543 7.59237 18.8759 9.20944C19.1976 10.8265 19.0325 12.5027 18.4016 14.0259C17.7706 15.5492 16.7021 16.8511 15.3312 17.7671C13.9603 18.6831 12.3486 19.172 10.6999 19.172C8.48972 19.1695 6.37081 18.2904 4.808 16.7276C3.24519 15.1648 2.36611 13.0459 2.36361 10.8358Z"
                                fill="white"
                            />
                        </svg>
                    </button>
                </div>
            </Wrapper>
        </GradBorderWrapper>
    );
};

export default SearchBar;