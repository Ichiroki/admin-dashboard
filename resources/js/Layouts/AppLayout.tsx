import { router } from '@inertiajs/core';
import { Link, Head } from '@inertiajs/react';
import classNames from 'classnames';
import React, { PropsWithChildren, useState } from 'react';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import ApplicationMark from '@/Components/ApplicationMark';
import Banner from '@/Components/Banner';
import Dropdown from '@/Components/Dropdown';
import DropdownLink from '@/Components/DropdownLink';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Team } from '@/types';
import ApplicationLogo from '@/Components/ApplicationLogo';

interface Props {
  title: string;
  renderHeader?(): JSX.Element;
}

export default function AppLayout({
  title,
  renderHeader,
  children,
}: PropsWithChildren<Props>) {
  const page = useTypedPage();
  const route = useRoute();
  const [showingNavigationDropdown, setShowingNavigationDropdown] =
    useState(false);

  function switchToTeam(e: React.FormEvent, team: Team) {
    e.preventDefault();
    router.put(
      route('current-team.update'),
      {
        team_id: team.id,
      },
      {
        preserveState: false,
      },
    );
  }

  function logout(e: React.FormEvent) {
    e.preventDefault();
    router.post(route('logout'));
  }

  return (
    <div>
      <Head title={title} />

      <Banner />

      <div className='min-h-screen w-3/12 bg-violet-400 text-lg'>
        <nav className='flex justify-center'>
            <ul className='w-9/12 flex gap-3 flex-col mt-6'>
                <li>
                    <Link href={route('dashboard')}>
                        <ApplicationLogo className="block h-9 w-auto" />
                    </Link>
                </li>
                <li><NavLink href="">Home</NavLink></li>
                <li><NavLink href="">User</NavLink></li>
                <li><NavLink href="">Product</NavLink></li>
                {/* <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li> */}
            </ul>
        </nav>
      </div>
    </div>
  );
}
