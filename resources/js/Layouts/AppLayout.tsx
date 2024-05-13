import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import DropdownLink from '@/Components/DropdownLink';
import { Icon } from '@/Components/Icons';
import NavLink from '@/Components/NavLink';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from '@/Hooks/useTypedPage';
import { Team } from '@/types';
import { router } from '@inertiajs/core';
import { Head, Link } from '@inertiajs/react';
import clsx from 'clsx';
import React, { PropsWithChildren, useState } from 'react';

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

  const [show, setShow] = useState(false)

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
      <div className='min-h-screen flex flex-col'>
        <div>
            <nav className='flex justify-between items-center bg-violet-400 w-screen px-8 py-5'>
                <Link href={route('dashboard')}>
                    <ApplicationLogo className="block h-9 w-auto" />
                </Link>
                <div>
                    <Icon iconName='List' className='w-8 h-8' color='white' onClick={() => setShow(!show)}/>
                </div>
                <div>
                    <Dropdown
                        align="right"
                        width="48"
                        renderTrigger={() =>
                        page.props.jetstream.managesProfilePhotos ? (
                            <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                            <img
                                className="h-8 w-8 rounded-full object-cover"
                                src={page.props.auth.user?.profile_photo_url}
                                alt={page.props.auth.user?.name}
                            />
                            </button>
                        ) : (
                            <span className="inline-flex rounded-md">
                            <button
                                type="button"
                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"
                            >
                                {page.props.auth.user?.name}

                                <svg
                                className="ml-2 -mr-0.5 h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                />
                                </svg>
                            </button>
                            </span>
                        )
                        }
                    >
                        {/* <!-- Account Management --> */}
                        <div className="block px-4 py-2 text-xs text-gray-400">
                        Manage Account
                        </div>

                        <DropdownLink href={route('profile.show')}>
                        Profile
                        </DropdownLink>

                        {page.props.jetstream.hasApiFeatures ? (
                        <DropdownLink href={route('api-tokens.index')}>
                            API Tokens
                        </DropdownLink>
                        ) : null}

                        <div className="border-t border-gray-200 dark:border-gray-600"></div>

                        {/* <!-- Authentication --> */}
                        <form onSubmit={logout}>
                        <DropdownLink as="button">Log Out</DropdownLink>
                        </form>
                    </Dropdown>
                </div>
            </nav>
            <Head title={title} />
            {/* <Banner /> */}
            {renderHeader ? <>
                <header className='bg-violet-400 shadow'>
                    <div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
                        {renderHeader()}
                    </div>
                </header>
            </> : <>
            </>}
        </div>
        <div className='px-8'>
            <div>
                <div className={show ? clsx('w-full h-screen bg-slate-600/50 absolute top-0 left-0 block') : clsx('hidden')} id="overlay-sidebar" onClick={() => setShow(false)} />
                <nav className={show ? clsx('flex justify-center text-lg bg-violet-400 h-screen absolute top-0 left-0 w-64 z-20 transition-[width] duration-300') : clsx('hidden')}>
                    <Icon iconName='X' color="white" onClick={() => setShow(false)} className='absolute top-6 right-8 w-6 h-6' />
                    <ul className='w-9/12 flex gap-3 flex-col mt-12'>
                        <li className='mt-6'>
                            <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                                <Icon color='white' iconName="HouseDoor" className='w-6 h-6 mr-4'/>
                                <span className='text-sm'>Home</span>
                            </NavLink>
                        </li>
                        <li className='flex gap-3 mt-3'>
                            <NavLink href="">
                                <Icon color='white' iconName="PersonLinesFill" className='w-6 h-6 mr-4' />
                                <span className='text-sm'>User</span>
                            </NavLink>
                        </li>
                        <li className='flex gap-3 mt-3'>
                            <NavLink href="">
                                <Icon color='white' iconName="Bag" className='w-6 h-6 mr-4'/>
                                <span className='text-sm'>Product</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div>
                <main className='mt-6 bg-violet-400 text-slate-50 p-5 rounded-lg'>
                    <h1>test</h1>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quam odit accusamus doloremque molestias eaque reiciendis. Accusantium, quisquam. Aperiam eligendi perspiciatis ab excepturi molestiae nesciunt quos incidunt voluptatum nisi nulla!</p>
                </main>
            </div>
        </div>
      </div>
    </div>
  );
}
