import { AnchorHTMLAttributes, FC, forwardRef } from 'react';

import { trackExternalLink } from '../../Tracking/tracking';

type ExternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'rel'>;

/**
 * Renders a normal <a> element and track event when clicked
 */
const ExternalLink: FC<ExternalLinkProps> = forwardRef<HTMLAnchorElement | null, ExternalLinkProps>(
  ({ onClick, ...restProps }, ref) => {
    const handleOnClick: ExternalLinkProps['onClick'] = (event) => {
      trackExternalLink(event.currentTarget.href);

      if (onClick instanceof Function) {
        onClick(event);
      }
    };

    return (
      <a
        {...restProps}
        ref={ref}
        onClick={handleOnClick}
        target="_blank"
        rel="noreferrer noopener"
      />
    );
  },
);

ExternalLink.displayName = 'ExternalLink';

export default ExternalLink;
