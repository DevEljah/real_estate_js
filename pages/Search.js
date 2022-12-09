import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { BsFilter } from "react-icons/bs";

import Property from "../components/Property";

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  return (
    <Box>
      <Flex cursor="pointer" bg="gray.100"></Flex>
      <Text>Search Property By Filters</Text>
    </Box>
  );
};

export default Search;
