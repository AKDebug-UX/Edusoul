// import { useNavigate } from "react-router-dom";

export default function Loader() {
  // const navigate = useNavigate();

  return (
    <div className="flex mt-[15em] justify-center items-center">
      <div className="animate-spin rounded-full h-6 w-6 border-b-4 border-primary"></div>
    </div>
  );
}
