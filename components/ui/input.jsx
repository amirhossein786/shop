export function Input({ type = 'text', placeholder, className, ...props }) {
    return (
      <input
        type={type}
        placeholder={placeholder}
        className={`p-2 border rounded-lg ${className}`}
        {...props}
      />
    );
  }
  