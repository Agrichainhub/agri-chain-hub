const Authlayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: 'url("/images/hero-bg.png")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="flex items-center min-h-screen justify-center w-full"
    >
      {children}
    </div>
  );
};

export default Authlayout;
