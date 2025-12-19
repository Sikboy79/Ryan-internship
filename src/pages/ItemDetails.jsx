import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ItemDetail from "../components/UI/ItemDetail";
import axios from "axios";
import ItemDetailsSkeleton from "../components/UI/ItemDetailsSkeleton";
import ErrorComponent from "../components/UI/ErrorComponent";

const ItemDetails = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { nftId } = useParams();
  const [nft, setItemDetails] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchitemDetails() {
      try {
        const response = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`
        );
        setItemDetails(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchitemDetails();
  }, [nftId]);
  console.log(nft);

  return (
    <>
      {error ? (
        <ErrorComponent message={error} />
      ) : isLoading ? (
        <ItemDetailsSkeleton />
      ) : (
        <div>
          <ItemDetail nft={nft} />
        </div>
      )}
    </>
  );
};

export default ItemDetails;
