import { toDoList } from "@/app/common/interfaces/container-1/reduxToolkit";
import { ICreateItems } from "@/app/common/interfaces/container-2/itemCreator";

export function createItem(props:ICreateItems) {
  const Info: toDoList = {
    nameItem: props.currentType,
    daysOfWeek: props.checkedBox,
    DefinitelyDoable: props.DefinitelyDoable,
  };
  props.setCurrentType("");
  props.dispatch(props.checkToDoList(Info));
}