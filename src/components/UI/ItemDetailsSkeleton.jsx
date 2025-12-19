import React from "react";
import SkeletonBlock from "./Skeleton";

const ItemDetailsSkeleton = () => {
  return (
    <>
      <div id="wrapper">
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>
          <section aria-label="section" className="mt90 sm-mt-0">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center-skeleton">
                  <SkeletonBlock width="400px" height="680px" />
                </div>
                <div className="col-md-6">
                  <div className="item_info-skeleton">
                    <h2>
                      <SkeletonBlock width="320px" height="40px" />
                    </h2>
                    <div className="item_info_counts">
                      <div className="item_info_views-skeleton">
                        <SkeletonBlock width="40px" height="24px" />
                      </div>
                      <div className="item_info_like-skeleton">
                        <SkeletonBlock width="40px" height="24px" />
                      </div>
                    </div>
                    <div className="description-skeleton">
                      <SkeletonBlock width="400px" height="180px" />
                    </div>
                    <div className="owner-skeleton">
                      <div className="owner-image-skeleton">
                        <SkeletonBlock width="60px" height="14px" />
                        <div className="spacer-20"></div>
                        <SkeletonBlock width="60px" height="60px" />
                      </div>
                      <div className="owner-name-skeleton">
                        <SkeletonBlock width="140px" height="18px" />
                      </div>
                    </div>
                    <div className="spacer-20"></div>
                    <div className="owner-skeleton">
                      <div className="owner-image-skeleton">
                        <SkeletonBlock width="60px" height="14px" />
                        <div className="spacer-20"></div>
                        <SkeletonBlock width="60px" height="60px" />
                      </div>
                      <div className="owner-name-skeleton">
                        <SkeletonBlock width="140px" height="18px" />
                      </div>
                    </div>
                    <div className="price-skeleton">
                      <div className="price">
                        <SkeletonBlock width="60px" height="14px" />
                      </div>
                      <div className="spacer-10"></div>
                      <SkeletonBlock width="80px" height="24px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ItemDetailsSkeleton;
