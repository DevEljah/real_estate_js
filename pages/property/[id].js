import { Box, Flex, Text, Spacer, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { baseUrl, fetchApi } from "../..utils/fetchApi";

const PropertyDetails = ({
  PropertyDetails,
  price,
  rentFrequency,
  rooms,
  title,
  baths,
  area,
  agency,
  isVerified,
  description,
  type,
  purpose,
  furnichingStatus,
  amenities,
  photos,
}) => {
  <Box maxWidth="1000px" margin="auto">
    {photos && <ImageScrollbar data={photos} />}
  </Box>;
};
export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  // we get "params" wich is coming from URL and then we will
  // get the "id" of those paramotors
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    proos: {
      PropertyDetails: data,
    },
  };
}
