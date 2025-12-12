import React from "react";
import SkeletonBlock from "./Skeleton";

const HotCollectionSkeleton = () => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <div className="skeleton-card">
        <SkeletonBlock width="100%" height="100px" radius="10px" />
        <div className="skeleton-info">
          <div className="skeleton-avatar-wrapper">
            <SkeletonBlock width="60px" height="60px" radius="50%" />
            <div className="skeleton-checkmark skeleton-shimmer">
              <SkeletonBlock width="20px" height="20px" radius="50%" />
            </div>
          </div>
          <div className="skeleton__lines">
            <SkeletonBlock width="70%" height="16px" radius="6px" />
          </div>
          <div className="skeleton__lines-small">
            <SkeletonBlock width="50%" height="14px" radius="6px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotCollectionSkeleton;
