import PropTypes from "prop-types";
import React from "react";

function Layout({ children }) {
  return (
    <div className="max-w-screen-xl mx-auto">
      {children}
      <footer className="text-sm tracking-tight my-6">&copy; Enlight 2021</footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
