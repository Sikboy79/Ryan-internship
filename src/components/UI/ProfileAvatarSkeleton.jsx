import React from "react";
import SkeletonBlock from "./Skeleton";

const ProfileAvatarSkeleton = () => {
  return (
    <div className="d_profile de-flex profile-avatar-skeleton">
      <div className="de-flex-col">
        <div className="profile_avatar">
          <SkeletonBlock width="100px" height="100px" radius="50%" />
          <div className="profile_name">
            <h4>
              <SkeletonBlock width="240px" height="18px" />
              <span className="profile_username">
                <SkeletonBlock width="140px" height="14px" />
              </span>
              <span className="profile_wallet">
                <SkeletonBlock width="200px" height="14px" />
              </span>
            </h4>
          </div>
        </div>
      </div>
      <div className="profile_follow de-flex">
        <div className="de-flex-col">
          <div className="profile_follower">
            <SkeletonBlock width="130px" height="16px" />
          </div>
          <SkeletonBlock width="160px" height="44px" radius="8px" />
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatarSkeleton;
