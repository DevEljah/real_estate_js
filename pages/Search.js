import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/legacy/image";
import { Flex, Box, Text, Icon } from "@chakra-ui/react";

import { BsFilter } from "react-icons/bs";
import SearchFilters from "./../components/SearchFilters";

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  /*  const searchFiltersHandler = () => {
    setSearchFilters((prevFilters) => !prevFilters);
  }; */

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Search Property By Filters &nbsp;</Text>
        <Icon as={BsFilter} /* paddingLeft="1" */ />
      </Flex>
      {searchFilters && <SearchFilters />}
      <Text fontSize="2xl" p="4" fontWeight="bold"></Text>
    </Box>
  );
};

export default Search;
