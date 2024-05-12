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
import Sidebar from '@/Components/Sidebar';

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
      <div className='min-h-screen flex flex-col'>
        <div>
            <nav className='flex justify-between items-center bg-violet-400 w-screen px-8 py-5'>
                <Link href={route('dashboard')}>
                    <ApplicationLogo className="block h-9 w-auto" />
                </Link>
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
        <div className='px-8 '>
            <div>
                <Sidebar />
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
