import { useEffect, useState } from "react";
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MdCacel } from "react-icons/md";
import Image from "next/legacy/image";

const SearchFilters = () => {
  return (
    <Flex bg="gray.100" p="4" justfiyContent="center" flexWrap="wrap"></Flex>
  );
};

export default SearchFilters;
