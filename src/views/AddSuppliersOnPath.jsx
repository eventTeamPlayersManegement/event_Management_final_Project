import Index from "../components/SuppliersOnPath/Index.jsx";
import { useParams } from "react-router-dom";
function AddSuppliersOnPath() {
  const params = useParams();
  return <Index path={params.path} />;
}

export default AddSuppliersOnPath;
