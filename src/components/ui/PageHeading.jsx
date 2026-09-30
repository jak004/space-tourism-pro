export function PageHeading({ number, children }) {
  return (
    <h1 className="page-heading">
      <span>{number}</span>{children}
    </h1>
  );
}
