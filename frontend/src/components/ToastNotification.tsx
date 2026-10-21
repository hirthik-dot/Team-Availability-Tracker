import { useEffect } from 'react';

interface ToastNotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export const ToastNotification = ({ message, type, onClose }: ToastNotificationProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`${bgColor} text-white px-6 py-3 rounded-lg shadow-lg fixed bottom-4 right-4`}>
      {message}
    </div>
  );
};
