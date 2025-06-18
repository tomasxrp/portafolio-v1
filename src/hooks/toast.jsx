import { toast as toastify } from 'react-toastify';

export function useToast() {
  // Puedes personalizar aquí los tipos de toast si lo deseas
  const toast = ({ title, description, type = "default" }) => {
    toastify(
      <div>
        <strong>{title}</strong>
        <div>{description}</div>
      </div>,
      { type }
    );
  };

  return { toast };
}