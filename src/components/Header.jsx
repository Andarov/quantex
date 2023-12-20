import React from "react";
import { Link, NavLink } from "react-router-dom";
import hamburger from "../img/hamburger.svg";
import exit from "../img/exit.svg";
import { useState } from "react";

const Header = () => {
  const [mobileManu, setMobileMenu] = useState(false);

  return (
    <div className={`${mobileManu ? "min-h-screen fixed top-0 left-0 h-full w-full" : ""} flex flex-col`}>
      <header className="xl:py-6 shadow-md">
        <div className="w-full max-w-base mx-auto bg-header-bg py-6 px-6 rounded-xl flex justify-between items-center">
          <Link to="/" className="text-2xl font-semibold">
            Quantex
          </Link>

          <nav className="hidden xl:block space-x-8">
            <NavLink
              className="capitalize inline-flex items-center space-x-2 font-medium text-sm"
              to="/"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M8.39173 2.35005L2.61673 6.97504C1.96673 7.4917 1.55006 8.58337 1.69172 9.40004L2.80006 16.0334C3.00006 17.2167 4.13339 18.175 5.33339 18.175H14.6667C15.8584 18.175 17.0001 17.2084 17.2001 16.0334L18.3084 9.40004C18.4417 8.58337 18.0251 7.4917 17.3834 6.97504L11.6084 2.35836C10.7167 1.6417 9.27506 1.64171 8.39173 2.35005Z"
                  fill="#56AB91"
                />
                <path
                  d="M9.99996 12.9167C11.1506 12.9167 12.0833 11.9839 12.0833 10.8333C12.0833 9.68274 11.1506 8.75 9.99996 8.75C8.84937 8.75 7.91663 9.68274 7.91663 10.8333C7.91663 11.9839 8.84937 12.9167 9.99996 12.9167Z"
                  fill="#56AB91"
                />
              </svg>
              <span>Home page</span>
            </NavLink>

            <NavLink
              className="capitalize inline-flex items-center space-x-2 font-medium text-sm"
              to="/news"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M13.4917 1.66675H6.51671C3.48338 1.66675 1.67505 3.47508 1.67505 6.50841V13.4834C1.67505 16.5167 3.48338 18.3251 6.51671 18.3251H13.4917C16.525 18.3251 18.3334 16.5167 18.3334 13.4834V6.50841C18.3334 3.47508 16.525 1.66675 13.4917 1.66675Z"
                  fill="#56AB91"
                />
                <path
                  d="M15.8333 12.5001H15.625V12.0834V11.6667V9.16675V6.45841C15.625 5.19175 14.6 4.16675 13.3333 4.16675H6.66663C5.39996 4.16675 4.37496 5.19175 4.37496 6.45841V9.16675V11.6667V12.0834V12.5001H4.16663C3.82496 12.5001 3.54163 12.7834 3.54163 13.1251C3.54163 13.4667 3.82496 13.7501 4.16663 13.7501H4.99996H7.36665C7.64998 14.9417 8.72496 15.8334 9.99996 15.8334C11.275 15.8334 12.3499 14.9417 12.6333 13.7501H15H15.8333C16.175 13.7501 16.4583 13.4667 16.4583 13.1251C16.4583 12.7834 16.175 12.5001 15.8333 12.5001ZM13.9916 9.90008C13.9416 9.88341 13.8916 9.86675 13.8333 9.85008C13.6666 9.81675 13.5 9.79175 13.325 9.79175H6.65828C6.48328 9.79175 6.31663 9.81675 6.14996 9.85008C6.09996 9.85841 6.04996 9.88341 5.99163 9.90008C5.88329 9.93341 5.77496 9.96675 5.67496 10.0167C5.64996 10.0251 5.62494 10.0334 5.60828 10.0418V9.16675C5.60828 8.59175 6.07494 8.12508 6.64994 8.12508H13.3166C13.8916 8.12508 14.3583 8.59175 14.3583 9.16675V10.0418C14.3333 10.0334 14.3166 10.0251 14.2916 10.0167C14.2083 9.96675 14.0999 9.93341 13.9916 9.90008ZM6.66663 5.41675H13.3333C13.9083 5.41675 14.375 5.88341 14.375 6.45841V7.13341C14.0583 6.97508 13.7083 6.87508 13.3333 6.87508H6.66663C6.29163 6.87508 5.94163 6.97508 5.62496 7.13341V6.45841C5.62496 5.88341 6.09163 5.41675 6.66663 5.41675ZM12.0833 12.5001C11.7416 12.5001 11.4583 12.7834 11.4583 13.1251C11.4583 13.9251 10.8 14.5834 9.99996 14.5834C9.19996 14.5834 8.54163 13.9251 8.54163 13.1251C8.54163 12.7834 8.25829 12.5001 7.91663 12.5001H5.62496V12.0834C5.62496 11.5084 6.09163 11.0417 6.66663 11.0417H13.3333C13.9083 11.0417 14.375 11.5084 14.375 12.0834V12.5001H12.0833Z"
                  fill="#56AB91"
                />
              </svg>
              <span>News</span>
            </NavLink>

            <NavLink
              className="capitalize inline-flex items-center space-x-2 font-medium text-sm"
              to="/about"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 9.99996 1.66675C5.39759 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6025 5.39759 18.3334 9.99996 18.3334Z"
                  fill="#56AB91"
                />
                <path
                  d="M10 11.4584C10.3417 11.4584 10.625 11.1751 10.625 10.8334V6.66675C10.625 6.32508 10.3417 6.04175 10 6.04175C9.65833 6.04175 9.375 6.32508 9.375 6.66675V10.8334C9.375 11.1751 9.65833 11.4584 10 11.4584Z"
                  fill="#56AB91"
                />
                <path
                  d="M10.7666 13.0167C10.725 12.9167 10.6666 12.825 10.5916 12.7417C10.5083 12.6667 10.4166 12.6083 10.3166 12.5667C10.1166 12.4833 9.88329 12.4833 9.68329 12.5667C9.58329 12.6083 9.49163 12.6667 9.40829 12.7417C9.33329 12.825 9.27496 12.9167 9.23329 13.0167C9.19163 13.1167 9.16663 13.225 9.16663 13.3333C9.16663 13.4417 9.19163 13.55 9.23329 13.65C9.27496 13.7583 9.33329 13.8417 9.40829 13.925C9.49163 14 9.58329 14.0583 9.68329 14.1C9.78329 14.1417 9.89163 14.1667 9.99996 14.1667C10.1083 14.1667 10.2166 14.1417 10.3166 14.1C10.4166 14.0583 10.5083 14 10.5916 13.925C10.6666 13.8417 10.725 13.7583 10.7666 13.65C10.8083 13.55 10.8333 13.4417 10.8333 13.3333C10.8333 13.225 10.8083 13.1167 10.7666 13.0167Z"
                  fill="#56AB91"
                />
              </svg>
              <span>About Bot</span>
            </NavLink>

            <NavLink
              className="capitalize inline-flex items-center space-x-2 font-medium text-sm"
              to=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13.3333 6.66675H6.66663V13.3334H13.3333V6.66675Z"
                  fill="#56AB91"
                />
                <path
                  opacity="0.4"
                  d="M4.16663 18.3333C5.54163 18.3333 6.66663 17.2083 6.66663 15.8333V13.3333H4.16663C2.79163 13.3333 1.66663 14.4583 1.66663 15.8333C1.66663 17.2083 2.79163 18.3333 4.16663 18.3333Z"
                  fill="#56AB91"
                />
                <path
                  opacity="0.4"
                  d="M4.16663 6.66675H6.66663V4.16675C6.66663 2.79175 5.54163 1.66675 4.16663 1.66675C2.79163 1.66675 1.66663 2.79175 1.66663 4.16675C1.66663 5.54175 2.79163 6.66675 4.16663 6.66675Z"
                  fill="#56AB91"
                />
                <path
                  opacity="0.4"
                  d="M13.3334 6.66675H15.8334C17.2084 6.66675 18.3334 5.54175 18.3334 4.16675C18.3334 2.79175 17.2084 1.66675 15.8334 1.66675C14.4584 1.66675 13.3334 2.79175 13.3334 4.16675V6.66675Z"
                  fill="#56AB91"
                />
                <path
                  opacity="0.4"
                  d="M15.8334 18.3333C17.2084 18.3333 18.3334 17.2083 18.3334 15.8333C18.3334 14.4583 17.2084 13.3333 15.8334 13.3333H13.3334V15.8333C13.3334 17.2083 14.4584 18.3333 15.8334 18.3333Z"
                  fill="#56AB91"
                />
              </svg>
              <span>How This Work</span>
            </NavLink>

            <NavLink
              className="capitalize inline-flex items-center space-x-2 font-medium text-sm"
              to="/contact"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M14.1667 17.0834H5.83342C3.33341 17.0834 1.66675 15.8334 1.66675 12.9167V7.08342C1.66675 4.16675 3.33341 2.91675 5.83342 2.91675H14.1667C16.6667 2.91675 18.3334 4.16675 18.3334 7.08342V12.9167C18.3334 15.8334 16.6667 17.0834 14.1667 17.0834Z"
                  fill="#56AB91"
                />
                <path
                  d="M9.99998 10.725C9.29998 10.725 8.59165 10.5083 8.04998 10.0666L5.44164 7.98331C5.17498 7.76664 5.12498 7.37497 5.34165 7.10831C5.55831 6.84164 5.94998 6.79164 6.21665 7.00831L8.82497 9.09165C9.45831 9.59998 10.5333 9.59998 11.1666 9.09165L13.775 7.00831C14.0416 6.79164 14.4416 6.83331 14.65 7.10831C14.8666 7.37497 14.825 7.77498 14.55 7.98331L11.9416 10.0666C11.4083 10.5083 10.7 10.725 9.99998 10.725Z"
                  fill="#56AB91"
                />
              </svg>
              <span>Contacts</span>
            </NavLink>
          </nav>

          <div className="hidden xl:block space-x-5">
            <button className="bg-main-bg px-6 py-3 rounded-lg font-medium text-sm">
              Sign In
            </button>
            <button className="bg-light-green px-6 py-3 rounded-lg font-medium text-sm">
              Sign Up
            </button>
          </div>

          <button onClick={()=> setMobileMenu(prev => !prev)} className="xl:hidden">
            <img src={mobileManu ? exit : hamburger} alt="" />
          </button>
        </div>
      </header>

      {mobileManu && (
        <div className="bg-main-bg xl:hidden flex flex-col grow pl-5 pt-6">
          <nav className="flex flex-col space-y-6 grow h-full">
            <NavLink
              className="capitalize inline-flex items-center space-x-2 font-medium text-sm"
              to=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M8.39173 2.35005L2.61673 6.97504C1.96673 7.4917 1.55006 8.58337 1.69172 9.40004L2.80006 16.0334C3.00006 17.2167 4.13339 18.175 5.33339 18.175H14.6667C15.8584 18.175 17.0001 17.2084 17.2001 16.0334L18.3084 9.40004C18.4417 8.58337 18.0251 7.4917 17.3834 6.97504L11.6084 2.35836C10.7167 1.6417 9.27506 1.64171 8.39173 2.35005Z"
                  fill="#56AB91"
                />
                <path
                  d="M9.99996 12.9167C11.1506 12.9167 12.0833 11.9839 12.0833 10.8333C12.0833 9.68274 11.1506 8.75 9.99996 8.75C8.84937 8.75 7.91663 9.68274 7.91663 10.8333C7.91663 11.9839 8.84937 12.9167 9.99996 12.9167Z"
                  fill="#56AB91"
                />
              </svg>
              <span>Home page</span>
            </NavLink>

            <NavLink
              className="capitalize inline-flex items-center space-x-2 font-medium text-sm"
              to=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M13.4917 1.66675H6.51671C3.48338 1.66675 1.67505 3.47508 1.67505 6.50841V13.4834C1.67505 16.5167 3.48338 18.3251 6.51671 18.3251H13.4917C16.525 18.3251 18.3334 16.5167 18.3334 13.4834V6.50841C18.3334 3.47508 16.525 1.66675 13.4917 1.66675Z"
                  fill="#56AB91"
                />
                <path
                  d="M15.8333 12.5001H15.625V12.0834V11.6667V9.16675V6.45841C15.625 5.19175 14.6 4.16675 13.3333 4.16675H6.66663C5.39996 4.16675 4.37496 5.19175 4.37496 6.45841V9.16675V11.6667V12.0834V12.5001H4.16663C3.82496 12.5001 3.54163 12.7834 3.54163 13.1251C3.54163 13.4667 3.82496 13.7501 4.16663 13.7501H4.99996H7.36665C7.64998 14.9417 8.72496 15.8334 9.99996 15.8334C11.275 15.8334 12.3499 14.9417 12.6333 13.7501H15H15.8333C16.175 13.7501 16.4583 13.4667 16.4583 13.1251C16.4583 12.7834 16.175 12.5001 15.8333 12.5001ZM13.9916 9.90008C13.9416 9.88341 13.8916 9.86675 13.8333 9.85008C13.6666 9.81675 13.5 9.79175 13.325 9.79175H6.65828C6.48328 9.79175 6.31663 9.81675 6.14996 9.85008C6.09996 9.85841 6.04996 9.88341 5.99163 9.90008C5.88329 9.93341 5.77496 9.96675 5.67496 10.0167C5.64996 10.0251 5.62494 10.0334 5.60828 10.0418V9.16675C5.60828 8.59175 6.07494 8.12508 6.64994 8.12508H13.3166C13.8916 8.12508 14.3583 8.59175 14.3583 9.16675V10.0418C14.3333 10.0334 14.3166 10.0251 14.2916 10.0167C14.2083 9.96675 14.0999 9.93341 13.9916 9.90008ZM6.66663 5.41675H13.3333C13.9083 5.41675 14.375 5.88341 14.375 6.45841V7.13341C14.0583 6.97508 13.7083 6.87508 13.3333 6.87508H6.66663C6.29163 6.87508 5.94163 6.97508 5.62496 7.13341V6.45841C5.62496 5.88341 6.09163 5.41675 6.66663 5.41675ZM12.0833 12.5001C11.7416 12.5001 11.4583 12.7834 11.4583 13.1251C11.4583 13.9251 10.8 14.5834 9.99996 14.5834C9.19996 14.5834 8.54163 13.9251 8.54163 13.1251C8.54163 12.7834 8.25829 12.5001 7.91663 12.5001H5.62496V12.0834C5.62496 11.5084 6.09163 11.0417 6.66663 11.0417H13.3333C13.9083 11.0417 14.375 11.5084 14.375 12.0834V12.5001H12.0833Z"
                  fill="#56AB91"
                />
              </svg>
              <span>News</span>
            </NavLink>

            <NavLink
              className="capitalize inline-flex items-center space-x-2 font-medium text-sm"
              to=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M9.99996 18.3334C14.6023 18.3334 18.3333 14.6025 18.3333 10.0001C18.3333 5.39771 14.6023 1.66675 9.99996 1.66675C5.39759 1.66675 1.66663 5.39771 1.66663 10.0001C1.66663 14.6025 5.39759 18.3334 9.99996 18.3334Z"
                  fill="#56AB91"
                />
                <path
                  d="M10 11.4584C10.3417 11.4584 10.625 11.1751 10.625 10.8334V6.66675C10.625 6.32508 10.3417 6.04175 10 6.04175C9.65833 6.04175 9.375 6.32508 9.375 6.66675V10.8334C9.375 11.1751 9.65833 11.4584 10 11.4584Z"
                  fill="#56AB91"
                />
                <path
                  d="M10.7666 13.0167C10.725 12.9167 10.6666 12.825 10.5916 12.7417C10.5083 12.6667 10.4166 12.6083 10.3166 12.5667C10.1166 12.4833 9.88329 12.4833 9.68329 12.5667C9.58329 12.6083 9.49163 12.6667 9.40829 12.7417C9.33329 12.825 9.27496 12.9167 9.23329 13.0167C9.19163 13.1167 9.16663 13.225 9.16663 13.3333C9.16663 13.4417 9.19163 13.55 9.23329 13.65C9.27496 13.7583 9.33329 13.8417 9.40829 13.925C9.49163 14 9.58329 14.0583 9.68329 14.1C9.78329 14.1417 9.89163 14.1667 9.99996 14.1667C10.1083 14.1667 10.2166 14.1417 10.3166 14.1C10.4166 14.0583 10.5083 14 10.5916 13.925C10.6666 13.8417 10.725 13.7583 10.7666 13.65C10.8083 13.55 10.8333 13.4417 10.8333 13.3333C10.8333 13.225 10.8083 13.1167 10.7666 13.0167Z"
                  fill="#56AB91"
                />
              </svg>
              <span>About Bot</span>
            </NavLink>

            <NavLink
              className="capitalize inline-flex items-center space-x-2 font-medium text-sm"
              to=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M13.3333 6.66675H6.66663V13.3334H13.3333V6.66675Z"
                  fill="#56AB91"
                />
                <path
                  opacity="0.4"
                  d="M4.16663 18.3333C5.54163 18.3333 6.66663 17.2083 6.66663 15.8333V13.3333H4.16663C2.79163 13.3333 1.66663 14.4583 1.66663 15.8333C1.66663 17.2083 2.79163 18.3333 4.16663 18.3333Z"
                  fill="#56AB91"
                />
                <path
                  opacity="0.4"
                  d="M4.16663 6.66675H6.66663V4.16675C6.66663 2.79175 5.54163 1.66675 4.16663 1.66675C2.79163 1.66675 1.66663 2.79175 1.66663 4.16675C1.66663 5.54175 2.79163 6.66675 4.16663 6.66675Z"
                  fill="#56AB91"
                />
                <path
                  opacity="0.4"
                  d="M13.3334 6.66675H15.8334C17.2084 6.66675 18.3334 5.54175 18.3334 4.16675C18.3334 2.79175 17.2084 1.66675 15.8334 1.66675C14.4584 1.66675 13.3334 2.79175 13.3334 4.16675V6.66675Z"
                  fill="#56AB91"
                />
                <path
                  opacity="0.4"
                  d="M15.8334 18.3333C17.2084 18.3333 18.3334 17.2083 18.3334 15.8333C18.3334 14.4583 17.2084 13.3333 15.8334 13.3333H13.3334V15.8333C13.3334 17.2083 14.4584 18.3333 15.8334 18.3333Z"
                  fill="#56AB91"
                />
              </svg>
              <span>How This Work</span>
            </NavLink>

            <NavLink
              className="capitalize inline-flex items-center space-x-2 font-medium text-sm"
              to=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  opacity="0.4"
                  d="M14.1667 17.0834H5.83342C3.33341 17.0834 1.66675 15.8334 1.66675 12.9167V7.08342C1.66675 4.16675 3.33341 2.91675 5.83342 2.91675H14.1667C16.6667 2.91675 18.3334 4.16675 18.3334 7.08342V12.9167C18.3334 15.8334 16.6667 17.0834 14.1667 17.0834Z"
                  fill="#56AB91"
                />
                <path
                  d="M9.99998 10.725C9.29998 10.725 8.59165 10.5083 8.04998 10.0666L5.44164 7.98331C5.17498 7.76664 5.12498 7.37497 5.34165 7.10831C5.55831 6.84164 5.94998 6.79164 6.21665 7.00831L8.82497 9.09165C9.45831 9.59998 10.5333 9.59998 11.1666 9.09165L13.775 7.00831C14.0416 6.79164 14.4416 6.83331 14.65 7.10831C14.8666 7.37497 14.825 7.77498 14.55 7.98331L11.9416 10.0666C11.4083 10.5083 10.7 10.725 9.99998 10.725Z"
                  fill="#56AB91"
                />
              </svg>
              <span>Contacts</span>
            </NavLink>
          </nav>

          <div className="space-x-5">
            <button className="bg-light-green px-8 py-4 rounded-lg font-medium text-sm">
              Sign Up
            </button>
            <button className="bg-[#101920] px-8 py-4 rounded-lg font-medium text-sm">
              Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
