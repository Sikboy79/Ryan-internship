
const SkeletonBlock = ({ width, height, radius, style = {} }) => {
  return (
    <div
      className="skeleton-block"
      style={{
        width,
        height,
        borderRadius: radius,
        ...style,
      }}
    ></div>
  );
};

export default SkeletonBlock;

