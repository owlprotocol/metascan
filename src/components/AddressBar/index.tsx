import styled from 'styled-components';

const Wrapper = styled.div`
    background: #cde7ec;
    border-radius: 12px;
    padding: 4px 20px;

    > div {
        margin-bottom: 6px;
        font-weight: 500;
        font-size: 16px;
    }

    span {
        flex: 1;
        color: #000;
        word-break: break-all;
    }

    .btn-qr-code {
        margin-right: 14px;
    }
`;

const FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

interface Props {
    address?: string | undefined;
    title?: string;
    hasQR?: boolean;
}

const AddressBar = ({ address, title = 'Address', hasQR = false }: Props) => {
    const handleClickToCopy = () => {
        address ?? navigator.clipboard.writeText(address || '');
    };

    return (
        <Wrapper>
            <div>{title}</div>

            <FlexWrapper>
                {hasQR && (
                    <button className="btn-qr-code">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M0 10C0 4.47715 4.47715 0 10 0H30C35.5228 0 40 4.47715 40 10V30C40 35.5228 35.5228 40 30 40H10C4.47715 40 0 35.5228 0 30V10Z"
                                fill="#DBE4E6"
                            />
                            <path
                                d="M23.9409 20.9091V23.94H26.97V26.9691H30V30H26.97V26.97H23.9409V30H20.9091V26.9691H23.9391V23.94H20.9091V20.9091H23.94H23.9409ZM16.8182 20.9091C17.4209 20.9091 17.999 21.1485 18.4252 21.5748C18.8515 22.001 19.0909 22.5791 19.0909 23.1818V27.7273C19.0909 28.33 18.8515 28.9081 18.4252 29.3343C17.999 29.7606 17.4209 30 16.8182 30H12.2727C11.67 30 11.0919 29.7606 10.6657 29.3343C10.2394 28.9081 10 28.33 10 27.7273V23.1818C10 22.5791 10.2394 22.001 10.6657 21.5748C11.0919 21.1485 11.67 20.9091 12.2727 20.9091H16.8182ZM16.8182 22.7273H12.2727C12.1522 22.7273 12.0366 22.7752 11.9513 22.8604C11.8661 22.9457 11.8182 23.0613 11.8182 23.1818V27.7273C11.8182 27.8478 11.8661 27.9634 11.9513 28.0487C12.0366 28.1339 12.1522 28.1818 12.2727 28.1818H16.8182C16.9387 28.1818 17.0543 28.1339 17.1396 28.0487C17.2248 27.9634 17.2727 27.8478 17.2727 27.7273V23.1818C17.2727 23.0613 17.2248 22.9457 17.1396 22.8604C17.0543 22.7752 16.9387 22.7273 16.8182 22.7273ZM16.1364 23.8636V27.0455H12.9545V23.8636H16.1364ZM30 20.9091V23.94H26.97V20.9091H30ZM16.8182 10C17.4209 10 17.999 10.2394 18.4252 10.6657C18.8515 11.0919 19.0909 11.67 19.0909 12.2727V16.8182C19.0909 17.4209 18.8515 17.999 18.4252 18.4252C17.999 18.8515 17.4209 19.0909 16.8182 19.0909H12.2727C11.67 19.0909 11.0919 18.8515 10.6657 18.4252C10.2394 17.999 10 17.4209 10 16.8182V12.2727C10 11.67 10.2394 11.0919 10.6657 10.6657C11.0919 10.2394 11.67 10 12.2727 10H16.8182ZM27.7273 10C28.33 10 28.9081 10.2394 29.3343 10.6657C29.7606 11.0919 30 11.67 30 12.2727V16.8182C30 17.4209 29.7606 17.999 29.3343 18.4252C28.9081 18.8515 28.33 19.0909 27.7273 19.0909H23.1818C22.5791 19.0909 22.001 18.8515 21.5748 18.4252C21.1485 17.999 20.9091 17.4209 20.9091 16.8182V12.2727C20.9091 11.67 21.1485 11.0919 21.5748 10.6657C22.001 10.2394 22.5791 10 23.1818 10H27.7273ZM16.8182 11.8182H12.2727C12.1522 11.8182 12.0366 11.8661 11.9513 11.9513C11.8661 12.0366 11.8182 12.1522 11.8182 12.2727V16.8182C11.8182 16.9387 11.8661 17.0544 11.9513 17.1396C12.0366 17.2248 12.1522 17.2727 12.2727 17.2727H16.8182C16.9387 17.2727 17.0543 17.2248 17.1396 17.1396C17.2248 17.0544 17.2727 16.9387 17.2727 16.8182V12.2727C17.2727 12.1522 17.2248 12.0366 17.1396 11.9513C17.0543 11.8661 16.9387 11.8182 16.8182 11.8182ZM27.7273 11.8182H23.1818C23.0613 11.8182 22.9456 11.8661 22.8604 11.9513C22.7752 12.0366 22.7273 12.1522 22.7273 12.2727V16.8182C22.7273 16.9387 22.7752 17.0544 22.8604 17.1396C22.9456 17.2248 23.0613 17.2727 23.1818 17.2727H27.7273C27.8478 17.2727 27.9634 17.2248 28.0487 17.1396C28.1339 17.0544 28.1818 16.9387 28.1818 16.8182V12.2727C28.1818 12.1522 28.1339 12.0366 28.0487 11.9513C27.9634 11.8661 27.8478 11.8182 27.7273 11.8182ZM27.0455 12.9545V16.1364H23.8636V12.9545H27.0455ZM16.1336 12.9573V16.1345H12.9573V12.9573H16.1336Z"
                                fill="#70797B"
                            />
                        </svg>
                    </button>
                )}

                <span>{address}</span>

                <button className="btn-copy" onClick={handleClickToCopy}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.4995 14.625C13.4995 15.2217 13.2625 15.794 12.8405 16.216C12.4185 16.6379 11.8462 16.875 11.2495 16.875H3.37451C2.77777 16.875 2.20548 16.6379 1.78352 16.216C1.36156 15.794 1.12451 15.2217 1.12451 14.625V6.75C1.12451 6.15326 1.36156 5.58097 1.78352 5.15901C2.20548 4.73705 2.77777 4.5 3.37451 4.5V5.625C3.07614 5.625 2.78999 5.74353 2.57902 5.9545C2.36804 6.16548 2.24951 6.45163 2.24951 6.75V14.625C2.24951 14.9234 2.36804 15.2095 2.57902 15.4205C2.78999 15.6315 3.07614 15.75 3.37451 15.75H11.2495C11.5479 15.75 11.834 15.6315 12.045 15.4205C12.256 15.2095 12.3745 14.9234 12.3745 14.625H13.4995Z"
                            fill="#70797B"
                        />
                        <path
                            d="M6.74927 2.25024C6.4509 2.25024 6.16475 2.36877 5.95377 2.57975C5.74279 2.79073 5.62427 3.07688 5.62427 3.37524V11.2502C5.62427 11.5486 5.74279 11.8348 5.95377 12.0457C6.16475 12.2567 6.4509 12.3752 6.74927 12.3752H14.6243C14.9226 12.3752 15.2088 12.2567 15.4198 12.0457C15.6307 11.8348 15.7493 11.5486 15.7493 11.2502V3.37524C15.7493 3.07688 15.6307 2.79073 15.4198 2.57975C15.2088 2.36877 14.9226 2.25024 14.6243 2.25024H6.74927ZM6.74927 1.12524H14.6243C15.221 1.12524 15.7933 1.3623 16.2153 1.78425C16.6372 2.20621 16.8743 2.77851 16.8743 3.37524V11.2502C16.8743 11.847 16.6372 12.4193 16.2153 12.8412C15.7933 13.2632 15.221 13.5002 14.6243 13.5002H6.74927C6.15253 13.5002 5.58023 13.2632 5.15828 12.8412C4.73632 12.4193 4.49927 11.847 4.49927 11.2502V3.37524C4.49927 2.77851 4.73632 2.20621 5.15828 1.78425C5.58023 1.3623 6.15253 1.12524 6.74927 1.12524Z"
                            fill="#70797B"
                        />
                    </svg>
                </button>
            </FlexWrapper>
        </Wrapper>
    );
};

export default AddressBar;
