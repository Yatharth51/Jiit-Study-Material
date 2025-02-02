import { Link, useLocation } from "react-router-dom";

export function Breadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="breadcrum bg-black pl-20 pt-10 hover:underline">
      <Link to="/">Home</Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <span key={name}> &gt; {name}</span>
        ) : (
          <span key={name}>
            {" > "}
            <Link to={routeTo}>{name}</Link>
          </span>
        );
      })}
    </div>
  );
}