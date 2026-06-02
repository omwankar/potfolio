const Button = ({ children, href, variant = 'primary', onClick, download, target, className = '' }) => {
  const base = variant === 'primary' ? 'btn-primary' : 'btn-ghost';
  const classes = `${base} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        download={download}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
