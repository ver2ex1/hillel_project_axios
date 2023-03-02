import { Tab, Tabs as UiTabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ProductsList from './ProductsList';
import ProductCreateForm from './ProductCreateForm';

const Tabs = () => {
  return (
    <UiTabs>
      <TabList>
        <Tab>List</Tab>
        <Tab>Form</Tab>
      </TabList>
      <TabPanel>
        <ProductsList />
      </TabPanel>
      <TabPanel>
        <ProductCreateForm />
      </TabPanel>
    </UiTabs>
  );
};

export default Tabs;
