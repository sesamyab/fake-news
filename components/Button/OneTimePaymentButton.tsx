interface OneTimePaymentButtonProps {
    id: string;
}

function OneTimePaymentButton({ id }: OneTimePaymentButtonProps) {
    return (
        <sesamy-button
            publisher-content-id={id}
            currency={'SEK'}
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '16px',
                marginBottom: '20px',
            }}
        >
            <div slot="button-text">
                <em
                    style={{
                        display: 'inline-block',
                        fontSize: '16px',
                        lineHeight: 1,
                        marginRight: '8px',
                    }}
                >
                    <svg
                        aria-hidden="true"
                        style={{
                            display: 'inline-block',
                            width: '1em',
                            height: '1em',
                            strokeWidth: 0,
                            stroke: 'white',
                            overflow: 'visible',
                            fill: 'white',
                            pointerEvents: 'none',
                            verticalAlign: 'middle',
                        }}
                    >
                        <use href="#tf-fas-book-reader"></use>
                    </svg>
                </em>
                <span>Lås upp artikel</span>
            </div>
        </sesamy-button>
    );
}

export default OneTimePaymentButton;
