import { useDispatch, useSelector } from "react-redux";
import MenuPageStyles from "../styles/MenuPage.module.css";
import MenuItem from "./MenuItem";
import { useEffect } from "react";
import { fetchItems, filterItems, setItems } from "../redux/menuSlice";

export default function MenuPage() {
  const items = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  useEffect((e) => {
    dispatch(fetchItems());
  }, []);

  return (
    <div>
      <div className={MenuPageStyles.toolbar}>
        <input
          className={MenuPageStyles["search-field"]}
          type="text"
          placeholder="Search Here"
          onChange={(e) => {
            dispatch(filterItems(e.target.value));
          }}
        />
      </div>
      {items.length ? (
        <div className={MenuPageStyles.page}>
          {items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className={MenuPageStyles["menu-empty"]}>No Items Here</div>
      )}
    </div>
  );
}
