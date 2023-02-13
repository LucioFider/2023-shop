import "./list.scss";
import Card from "../Card/Card";
import { listProducts } from "../../constants";

const List = () => {
  return (
    <div className="list">
      {listProducts?.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};
export default List;
