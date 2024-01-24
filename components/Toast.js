// Toast.js
const Toast = ({ show, message }) => {
    if (!show) return null;

    return (
        <div style={{
            zIndex: 50,
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            backgroundColor: '#C01C5C',
            fontWeight: 400,
            color: 'white',
            padding: '10px',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            zIndex: 1000,
        }}>
            {message}
        </div>
    );
};

export default Toast;