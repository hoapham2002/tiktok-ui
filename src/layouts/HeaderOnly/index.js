import Header from "~/layouts/components/Header";

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div classname="container">
        <div classname="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
