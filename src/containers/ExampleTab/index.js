import { Form } from "antd";

import CollapseForm from "../../components/CollapseForm";

  // Constants
import {
    TAB_FORM_1,
    TAB_FORM_2
  } from "src/constants/tab-forms";

  // tabs content
const tabs = [
    {
      tab: "Example Tab 1",
      collapses: TAB_FORM_1,
    },
    {
      tab: "Example Tab 2",
      collapses: TAB_FORM_2,
    }
  ];

const ExampleTab = () => {

    return (
        <Form layout="vertical">
            <>
                <CollapseForm tabs={tabs}/>
            </>
        </Form>
    );
}

export default ExampleTab;