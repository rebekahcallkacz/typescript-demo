import React from "react";

type HeaderProps = { label: string };
function Header({ label }: HeaderProps) {
  return <header className="App-header">{label}</header>;
}

export default Header;
