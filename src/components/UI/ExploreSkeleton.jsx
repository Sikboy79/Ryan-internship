import React from 'react'
import SkeletonBlock from './Skeleton';

const ExploreSkeleton = () => {
    return (
    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
      <div className="skeleton-card">
        <div className="skeleton__img-newItem">
          <SkeletonBlock width="100%" height="275px" radius="10px" />
        </div>
        <div className="skeleton-info">
          <div className="skeleton-avatar-wrapper-newItem">
            <SkeletonBlock width="60px" height="60px" radius="50%" />
            <div className="skeleton-checkmark skeleton-shimmer">
              <SkeletonBlock width="20px" height="20px" radius="50%" />
            </div>
          </div>
          <div className="skeleton__lines-newItem">
            <SkeletonBlock width="70%" height="16px" radius="6px" />
          </div>
          <div className="skeleton__lines-small-newItem">
            <SkeletonBlock width="25%" height="14px" radius="6px" />
            <div className="skeleton__likes-newItem">
              <SkeletonBlock width="14px" height="14px" radius="50%" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreSkeleton
