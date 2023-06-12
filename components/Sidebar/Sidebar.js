import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js";
import UserDropdown from "components/Dropdowns/UserDropdown.js";

const SIDEBAR_MENU = [
  {
    label: 'Dashboard',
    value: 'dashboard',
    // link: 'admin/dashboard',
  },
  {
    label: 'Blogs',
    value: 'blogs',
    // link: 'admin/blogs',
  },
  {
    label: 'Sales',
    value: 'sales',
    // link: 'admin/sales',
  },
  {
    label: 'Customer',
    value: 'customer',
    // link: 'admin/customer',
  },
  {
    label: 'Purchase',
    value: 'purchase',
    // link: 'admin/purchase',
  },
  {
    label: 'Inventory',
    value: 'inventory',
    // link: 'admin/inventory',
  },
  {
    label: 'Receipts',
    value: 'receipts',
    // link: 'admin/receipts',
  },
  {
    label: 'Expense',
    value: 'expense',
    // link: 'admin/expense',
  },
  {
    label: 'Assets',
    value: 'assets',
    // link: 'admin/assets',
  },
  {
    label: 'Investor',
    value: 'Investor',
    // link: 'admin/Investor',
  },
  {
    label: 'Report',
    value: 'report',
    // link: 'admin/report',
  },
  {
    label: 'Calendar',
    value: 'calendar',
    // link: 'admin/calendar',
  },
]

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  const router = useRouter();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 p-3")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/">
            <a
              href="#pablo"
              className="md:block text-left md:pb-2 text-emerald-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            >
              Admin Panel
            </a>
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown />
            </li>
            <li className="inline-block relative">
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-0 mb-0 md:pb-4 md:mb-4 border-b border-solid border-emerald-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/">
                    <a
                      href="#pablo"
                      className="md:block text-left md:pb-2 text-emerald-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    >
                      Admin Panel
                    </a>
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            {/* <hr className="my-4 hidden md:block md:min-w-full" /> */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              {SIDEBAR_MENU.map(menu => {
                return (
                  <li className="items-center">
                    <Link href={menu.value}>
                      <a
                        href="#pablo"
                        className={
                          "text-xs uppercase py-3 font-bold block " +
                          (router.pathname.indexOf(menu.value) !== -1
                            ? "text-emerald-500 hover:text-emerald-600"
                            : "text-emerald-700 hover:text-emerald-500")
                        }
                      >
                        <i
                          className={
                            "fas fa-tv mr-2 text-sm " +
                            (router.pathname.indexOf(menu.value) !== -1
                              ? "opacity-75"
                              : "text-emerald-300")
                          }
                        ></i>{" "}
                        {menu.label}
                      </a>
                    </Link>
                  </li>
                )
              })}
{/* 
              <li className="items-center">
                <Link href="/admin/sales">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/sales") !== -1
                        ? "text-emerald-500 hover:text-emerald-600"
                        : "text-emerald-700 hover:text-emerald-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/sales") !== -1
                          ? "opacity-75"
                          : "text-emerald-300")
                      }
                    ></i>{" "}
                    Sales
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/customer">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/customer") !== -1
                        ? "text-emerald-500 hover:text-emerald-600"
                        : "text-emerald-700 hover:text-emerald-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/customer") !== -1
                          ? "opacity-75"
                          : "text-emerald-300")
                      }
                    ></i>{" "}
                    Customer
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/admin/customer">
                  <a
                    href="#pablo"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/customer") !== -1
                        ? "text-emerald-500 hover:text-emerald-600"
                        : "text-emerald-700 hover:text-emerald-500")
                    }
                  >
                    <i
                      className={
                        "fas fa-table mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/customer") !== -1
                          ? "opacity-75"
                          : "text-emerald-300")
                      }
                    ></i>{" "}
                    Customer
                  </a>
                </Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
