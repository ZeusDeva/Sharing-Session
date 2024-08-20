import DateTab from "src/containers/ExampleTab/DateTab";
import InputTab from "src/containers/ExampleTab/InputTab";
import OptionTab from "src/containers/ExampleTab/OptionTab";
import ViewTab from "src/containers/ExampleTab/ViewTab";

export const TAB_FORM_1 = [
    {
        header: "Date",
        component: DateTab,
    },
    {
        header: "Input",
        component: InputTab,
    },
  ];
  
  export const TAB_FORM_2 = [
    {
        header: "Option",
        component: OptionTab,
    },
    {
        header: "View",
        component: ViewTab,
    },
  ];