import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link as NextLink,
} from "@nextui-org/react";
import Link from "next/link";

function Header() {
  return (
    <Navbar shouldHideOnScroll maxWidth="xl">
      <NavbarBrand>
        <Link color="foreground" href="/">
          <p className="font-bold text-inherit">Home</p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={NextLink} href="/recommendations" color="danger">
            Recommend Again
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
