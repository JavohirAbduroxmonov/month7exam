const Loader = ({ loading }) => {
  return (
    <div className="absolute right-1/2 top-30">
      {loading && <div class="loader"></div>}
    </div>
  );
};

export default Loader;
