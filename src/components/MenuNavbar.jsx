const MenuNavbar = () => {
  return (
    <div className="account-avatar">
      <div className="p-2 d-flex menu-avatar">
        <div
          className="
                          d-flex
                          btw-menu-avatar
                          align-items-center
                          hide-over
                        "
        >
          <p className="mb-0 py-2">Account</p>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="Svg-ulyrgf-0 ghlXvf svg-color"
          >
            <path
              fillRule="evenodd"
              d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="hide-over text-left">
          <p className="mb-0 py-2">Profile</p>
        </div>
        <div
          className="
                          d-flex
                          btw-menu-avatar
                          align-items-center
                          hide-over
                        "
        >
          <p className="mb-0 py-2">Go to Premium</p>
          <svg
            role="img"
            height="16"
            width="16"
            viewBox="0 0 16 16"
            className="Svg-ulyrgf-0 ghlXvf svg-color"
          >
            <path
              fillRule="evenodd"
              d="M15 7V1H9v1h4.29L7.11 8.18l.71.71L14 2.71V7h1zM1 15h12V9h-1v5H2V4h5V3H1v12z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="hide-over text-left">
          <p className="mb-0 py-2">
              Log out
          </p>
        </div>
      </div>
    </div>
  );
};

export default MenuNavbar;
