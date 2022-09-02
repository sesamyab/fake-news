import { SesamyButtonProps } from './OneTimePaymentButton';

function SubscriptionButton({ id }: SesamyButtonProps) {
    return (
        <sesamy-button
            publisher-content-id={id}
            style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '16px',
                marginBottom: '20px',
            }}
            hide-price="true"
        >
            <div slot="button-text">
                <span style={{ marginRight: '0.5em' }}>Bli prenumerant</span>
                <em
                    style={{
                        display: 'inline-block',
                        fontSize: '16px',
                        lineHeight: 1,
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
                        <use href="#tf-ti-arrow-right"></use>
                    </svg>
                </em>
            </div>
        </sesamy-button>
    );
}

export default SubscriptionButton;
