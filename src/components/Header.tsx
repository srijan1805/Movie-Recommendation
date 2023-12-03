import { getRandomMovieId } from "@/assets/data";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

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
          <Button as={Link} href="/recommendations" color="danger">
            Recommend Again
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;