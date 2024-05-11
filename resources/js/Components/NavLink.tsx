import { Link } from '@inertiajs/react';
import React, { PropsWithChildren } from 'react';

interface Props {
  href: string;
  active?: boolean;
}

export default function NavLink({
  active,
  href,
  children,
}: PropsWithChildren<Props>) {
  const classes = active
    ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-slate-50 dark:text-slate-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out'
    : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-slate-50 dark:text-slate-400 hover:text-slate-300 dark:hover:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 focus:outline-none focus:text-slate-700 dark:focus:text-slate-300 focus:border-slate-300 dark:focus:border-slate-700 transition duration-150 ease-in-out';

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
