import { useDispatch, useSelector } from "react-redux";
import MenuPageStyles from "../styles/MenuPage.module.css";
import MenuItem from "./MenuItem";
import { useEffect } from "react";
import { fetchItems, setItems } from "../redux/menuSlice";

export default function MenuPage() {
  const items = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect((e) => {
    dispatch(fetchItems());
  }, []);

  console.log(items);

  return (
    <div>
      <div className={MenuPageStyles.page}>
        {/* {Array.from({ length: 30 }).map((i, idx) => (
          <MenuItem key={idx} />
        ))} */}

        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
