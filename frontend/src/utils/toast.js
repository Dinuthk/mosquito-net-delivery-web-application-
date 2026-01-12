import toast from 'react-hot-toast';

/**
 * Show success toast message
 * @param {string} message - The success message to display
 */
export const showSuccess = (message) => {
    toast.success(message, {
        duration: 3000,
        icon: '✅',
        style: {
            background: '#4CAF50',
            color: '#fff',
            fontWeight: '500',
            padding: '16px',
            borderRadius: '8px',
        },
    });
};

/**
 * Show error toast message
 * @param {string} message - The error message to display
 */
export const showError = (message) => {
    toast.error(message, {
        duration: 4000,
        icon: '❌',
        style: {
            background: '#f44336',
            color: '#fff',
            fontWeight: '500',
            padding: '16px',
            borderRadius: '8px',
        },
    });
};

/**
 * Show warning toast message
 * @param {string} message - The warning message to display
 */
export const showWarning = (message) => {
    toast(message, {
        duration: 3000,
        icon: '⚠️',
        style: {
            background: '#ff9800',
            color: '#fff',
            fontWeight: '500',
            padding: '16px',
            borderRadius: '8px',
        },
    });
};

/**
 * Show info toast message
 * @param {string} message - The info message to display
 */
export const showInfo = (message) => {
    toast(message, {
        duration: 3000,
        icon: 'ℹ️',
        style: {
            background: '#2196F3',
            color: '#fff',
            fontWeight: '500',
            padding: '16px',
            borderRadius: '8px',
        },
    });
};

/**
 * Show loading toast message
 * @param {string} message - The loading message to display
 * @returns {string} - Toast ID for updating later
 */
export const showLoading = (message) => {
    return toast.loading(message, {
        style: {
            background: '#2196F3',
            color: '#fff',
            fontWeight: '500',
            padding: '16px',
            borderRadius: '8px',
        },
    });
};

/**
 * Dismiss a specific toast
 * @param {string} toastId - The ID of the toast to dismiss
 */
export const dismissToast = (toastId) => {
    toast.dismiss(toastId);
};

/**
 * Dismiss all toasts
 */
export const dismissAllToasts = () => {
    toast.dismiss();
};
