import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../features/userGetAll/userGetAllSlice";

export default function Fetch({ url }) {
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(fetchUsers(url));
      setData(users);
    }

    return () => {
      mounted = false;
    };
  }, [url]);

  const { users } = useSelector((state) => state.userGetAll);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  if (!data) {
    return <span>Loading data</span>;
  }

  return <span>data</span>;
}
