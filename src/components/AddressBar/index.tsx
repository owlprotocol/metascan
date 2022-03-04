import styled from 'styled-components';
import copy from 'copy-to-clipboard';
import { QR } from '../../svg';

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

const AddressBar = ({ address, title = 'address', hasQR = false }: Props) => {
    const handleClickToCopy = () => {
        copy(String(address));
    };

    return (
        <Wrapper>
            <div>{title}</div>

            <FlexWrapper>
                {hasQR && (
                    <button className="btn-qr-code">
                        <QR />
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
