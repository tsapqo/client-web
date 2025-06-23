const Header = () => {
  return (
    <div className="flex justify-between items-center h-10 bg-slate-900 text-white">
      <h1>Logo</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/terms">Terms</Link>
    </div>
  );
};

export default Header;
