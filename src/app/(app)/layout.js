import Header from "./_components/header";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default AppLayout;
