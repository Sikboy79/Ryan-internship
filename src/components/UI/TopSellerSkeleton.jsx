import React from "react";
import SkeletonBlock from "./Skeleton";

const TopSellerSkeleton = () => {
  return (
    <div className="skeleton-card-newItem">
      <li className="author_list_item skeleton">
        <div className="author_list_pp">
          <div className="skeleton-avatar-wrapper-topSeller">
            <SkeletonBlock width="60px" height="60px" radius="50%" />
            <div className="skeleton-checkmark">
              <SkeletonBlock width="18px" height="18px" radius="50%" />
            </div>
          </div>
        </div>
        <div className="author_list_info-topSeller">
          <SkeletonBlock width="120px" height="16px" radius="6px" />
          <div className="price-topSeller">
            <SkeletonBlock width="60px" height="14px" radius="6px" />
          </div>
        </div>
      </li>
    </div>
  );
};

export default TopSellerSkeleton;
