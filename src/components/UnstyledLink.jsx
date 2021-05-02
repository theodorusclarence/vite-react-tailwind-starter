import React from 'react';
import { Link } from 'react-router-dom';

export default function UnstyledLink(props) {
  const href = props.href;
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'));

  if (isInternalLink) {
    return <Link to={href} {...props} className={`${props?.className}`} />;
  }

  return (
    <a
      className={`${props?.className}`}
      target='_blank'
      rel='noopener noreferrer'
      {...props}
    />
  );
}
