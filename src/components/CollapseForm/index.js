import { Collapse, Space, Tabs } from "antd";

// styles
import classes from "./style.module.less";

import ExpandIcon from "src/components/Tab/ExpandIcon";
import { useWindowSize } from "src/hooks/useWindowSize";

const { TabPane } = Tabs;
const { Panel } = Collapse;

const CollapseForm = ({ tabs, subtabs }) => {
  const [width] = useWindowSize();

  return width <= 768 ? (
    <Space
      direction="vertical"
      size="middle"
      className={classes.spaceResponsive}
    >
      {tabs.map(({ tab, collapses }, index) => (
        <Collapse defaultActiveKey="0" key={index}>
          <Panel header={tab} key={index}>
            {index == 4 && subtabs.length > 0 && <Subtabs />}
            <Space
              direction="vertical"
              size="middle"
              className={classes.spaceResponsive}
            >
              {collapses.map(({ header, component }) => (
                <Collapse key={header} expandIcon={ExpandIcon}>
                  <Panel header={header}>
                    {component({
                      // state,
                      // personal,
                      // application,
                    })}
                  </Panel>
                </Collapse>
              ))}
            </Space>
          </Panel>
        </Collapse>
      ))}
    </Space>
  ) : (
    <Tabs defaultActiveKey="0" className={classes.tabs}>
      {tabs.map(({ tab, collapses }, index) => (
        <TabPane tab={tab} key={index}>
          {index == 4 && subtabs.length > 0 && <Subtabs />}
          <Space direction="vertical" size="middle" className={classes.space}>
            {collapses.map(({ header, component }) => (
              <Collapse key={header} expandIcon={ExpandIcon}>
                <Panel header={header}>
                  {component({
                    // state,
                    // personal,
                    // application,
                  })}
                </Panel>
              </Collapse>
            ))}
          </Space>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default CollapseForm;
