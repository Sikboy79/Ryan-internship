import React from "react";
import AuthorBanner from "../images/author_banner.jpg";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AuthorItems from "../components/author/AuthorItems";
import NewItemSkeleton from "../components/UI/NewItemSkeleton";
import ProfileAvatarSkeleton from "../components/UI/ProfileAvatarSkeleton";
import ErrorComponent from "../components/UI/ErrorComponent";

const Author = () => {
  const [isLoading, setLoading] = useState(true);
  const { authorId } = useParams();
  const [author, setAuthor] = useState({ nftCollection: [] });
  const [followers, setFollowers] = useState(0);
  const [isFollowing, setIsFollowing] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAuthor() {
      try {
        const response = await axios.get(
          `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
        );
        setAuthor(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchAuthor();
  }, [authorId]);

  const handleFollowToggle = () => {
    setIsFollowing((prev) => {
      const next = !prev;
      localStorage.setItem(`follow_author_${authorId}`, String(next));
      setFollowers((count) => (next ? count + 1 : Math.max(0, count - 1)));
      return next;
    });
  };

  const handleCopy = async (text, field) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 1500);
    } catch (err) {
      setError("Copy failed", err);
    }
  };

  useEffect(() => {
    if (!authorId || author.followers === undefined) return;
    const storedFollow =
      localStorage.getItem(`follow_author_${authorId}`) === "true";
    setIsFollowing(storedFollow);
    setFollowers(author.followers + (storedFollow ? 1 : 0));
  }, [authorId, author.followers]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <section
          id="profile_banner"
          className="text-light"
          style={{ background: `url(${AuthorBanner}) top` }}
        />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {isLoading ? (
                  <ProfileAvatarSkeleton />
                ) : (
                  <div className="d_profile de-flex">
                    <div className="de-flex-col">
                      <div className="profile_avatar">
                        <>
                          <img
                            src={author.authorImage}
                            alt={author.authorName}
                          />
                          <i className="fa fa-check"></i>

                          <div className="profile_name">
                            <h4>
                              {author.authorName}
                              <span className="profile_username">
                                @{author.tag}
                              </span>
                              <span
                                className="profile_wallet copyable"
                                onClick={() =>
                                  handleCopy(author.address, "address")
                                }
                              >
                                {author.address}
                                <span className="copy-tooltip">
                                  {copiedField === "address"
                                    ? "Copied!"
                                    : "Copy"}
                                </span>
                              </span>
                            </h4>
                          </div>
                        </>
                      </div>
                    </div>
                    <div className="profile_follow de-flex">
                      <div className="de-flex-col">
                        <div className="profile_follower">
                          {followers} followers
                        </div>
                        <button
                          type="button"
                          className="btn-main"
                          onClick={handleFollowToggle}
                        >
                          {isFollowing ? "Following" : "Follow"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              {error ? (
                <ErrorComponent message={error} />
              ) : isLoading ? (
                <div className="row">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <NewItemSkeleton key={i} />
                  ))}
                </div>
              ) : (
                <div className="col-md-12">
                  <div className="de_tab tab_simple">
                    <AuthorItems nfts={author.nftCollection} author={author} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Author;
