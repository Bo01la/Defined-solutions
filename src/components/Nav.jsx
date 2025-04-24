import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <Link to={"/services"} className="text-5xl bg-amber-200">
      nav bar
    </Link>
  );
}
