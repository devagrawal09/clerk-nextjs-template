"use client";

import { useOrganization, useSession, useUser } from "@clerk/nextjs";
import { useState } from "react";

export function UserDetails() {
  const { isLoaded, user } = useUser();
  const [jsonOutput, setJsonOutput] = useState(false);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="flex px-5">
        <h3 className="py-4 text-lg leading-6 font-medium text-gray-900">
          User Details
        </h3>

        <Toggle
          checked={jsonOutput}
          onChange={() => setJsonOutput(!jsonOutput)}
          disabled={!isLoaded}
        />
      </div>
      <div className="border-t border-gray-200 overflow-y-scroll bg-gray-50 h-full">
        {isLoaded && user ? (
          jsonOutput ? (
            <>
              <pre className="px-4 py-5 sm:px-6 text-black text-sm">
                {JSON.stringify({ user }, null, 2)}
              </pre>
            </>
          ) : (
            <dl>
              <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">User ID</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.id}
                </dd>
              </div>
              <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  First name
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.firstName}
                </dd>
              </div>
              <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Last name</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.lastName}
                </dd>
              </div>
              <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Primary Email
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {user.primaryEmailAddress?.emailAddress}
                </dd>
              </div>
              <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Profile Image
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  <img
                    src={user.profileImageUrl}
                    alt="Profile Image"
                    className="h-10 w-10 rounded-full"
                  />
                </dd>
              </div>
            </dl>
          )
        ) : (
          <div className="bg-gray-50 text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            Loading user data...
          </div>
        )}
      </div>
    </div>
  );
}

export function SessionDetails() {
  const { isLoaded, session } = useSession();
  const [jsonOutput, setJsonOutput] = useState(false);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="flex px-5">
        <h3 className="py-4 text-lg leading-6 font-medium text-gray-900">
          Session Details
        </h3>
        <Toggle
          checked={jsonOutput}
          onChange={() => setJsonOutput(!jsonOutput)}
          disabled={!isLoaded}
        />
      </div>
      <div className="border-t overflow-y-scroll border-gray-200 bg-gray-50 h-full">
        {isLoaded && session ? (
          jsonOutput ? (
            <div className="">
              <pre className="px-4 py-5 sm:px-6 text-black text-sm">
                {JSON.stringify({ session }, null, 2)}
              </pre>
            </div>
          ) : (
            <dl>
              <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Session ID
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {session.id}
                </dd>
              </div>
              <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Status</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {session.status}
                </dd>
              </div>
              <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">
                  Last Active
                </dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {session.lastActiveAt.toLocaleTimeString()}{" "}
                  {session.lastActiveAt.toLocaleDateString()}
                </dd>
              </div>

              <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-500">Expiry</dt>
                <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                  {session.expireAt.toLocaleTimeString()}{" "}
                  {session.expireAt.toLocaleDateString()}
                </dd>
              </div>
            </dl>
          )
        ) : (
          <div className="bg-gray-50 text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            Loading user data...
          </div>
        )}
      </div>
    </div>
  );
}

export function OrgDetails() {
  const { isLoaded, organization } = useOrganization();
  const [jsonOutput, setJsonOutput] = useState(false);

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="flex px-5">
        <h3 className="py-4 text-lg leading-6 font-medium text-gray-900">
          Organization Details
        </h3>
        <Toggle
          checked={jsonOutput}
          onChange={() => setJsonOutput(!jsonOutput)}
          disabled={!(isLoaded && organization)}
        />
      </div>
      <div className="border-t overflow-y-scroll border-gray-200 bg-gray-50 h-full">
        {isLoaded ? (
          organization ? (
            jsonOutput ? (
              <>
                <pre className="px-4 py-5 sm:px-6 text-black text-sm">
                  {JSON.stringify({ organization }, null, 2)}
                </pre>
              </>
            ) : (
              <dl>
                <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Organization ID
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {organization.id}
                  </dd>
                </div>
                <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {organization.name}
                  </dd>
                </div>
                <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Members</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {organization.membersCount}
                  </dd>
                </div>
                <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Pending Invites
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {organization.pendingInvitationsCount}
                  </dd>
                </div>
                <div className="border-b px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">
                    Organization Logo
                  </dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {organization.logoUrl ? (
                      <img
                        src={organization.logoUrl}
                        alt="Organization Logo"
                        className="h-8 w-8 rounded-full"
                      />
                    ) : (
                      <img
                        src={organization.experimental_imageUrl}
                        alt="Organization Logo"
                        className="h-8 w-8 rounded-full"
                      />
                    )}
                  </dd>
                </div>
              </dl>
            )
          ) : (
            <div className="bg-gray-50 text-gray-700 px-4 py-5">
              You are currently logged in to your personal workspace.
              <br />
              Create or switch to an organization to see its details.
            </div>
          )
        ) : (
          <div className="bg-gray-50 text-gray-700 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            Loading organization data...
          </div>
        )}
      </div>
    </div>
  );
}

function Toggle(props: {
  checked: boolean;
  onChange: () => void;
  disabled: boolean;
}) {
  return (
    <div className="flex items-center justify-end flex-1">
      <span className="mr-3 text-sm font-medium text-gray-900">List</span>
      <label className="relative inline-flex items-center">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={props.checked}
          onChange={props.onChange}
          disabled={props.disabled}
        />
        <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600 peer-disabled:bg-gray-300 cursor-pointer peer-disabled:cursor-not-allowed"></div>
      </label>
      <span className="ml-3 text-sm font-medium text-gray-900">JSON</span>
    </div>
  );
}
