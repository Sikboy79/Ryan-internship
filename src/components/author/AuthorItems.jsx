import AuthorItem from "../UI/AuthorItem";

function AuthorItems({ nfts, author }) {
  if (!nfts || !nfts.length) {
    return <p>No NFTs found</p>;
  }

  return (
    <div className="de_tab_content">
      <div className="tab-1">
        <div className="row">
          {nfts.map((nft) => (
            <AuthorItem key={nft.id} nft={nft} author={author} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuthorItems;
