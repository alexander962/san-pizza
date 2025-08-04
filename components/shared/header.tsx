import {FC} from 'react';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({className}) => {
  return (
    <div className={className}></div>
  );
};
